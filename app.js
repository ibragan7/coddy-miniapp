/* ════════════════════════════════════════════════════════════════════════════
   CODDY · app.js
   Главный код приложения: состояние, рендеринг экранов, навигация,
   интеграция с Telegram WebApp.
   ════════════════════════════════════════════════════════════════════════════ */

(function () {
'use strict';

// ─── Telegram WebApp ─────────────────────────────────────────────────────────
const tg = window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : null;
if (tg) {
  tg.ready();
  tg.expand();
  // Применить цвета темы если есть
  try {
    tg.setHeaderColor('#FAF6EF');
    tg.setBackgroundColor('#FAF6EF');
  } catch (e) {}
}

// Хелпер тактильной отдачи
function haptic(type) {
  try {
    if (tg && tg.HapticFeedback) {
      if (type === 'success' || type === 'error' || type === 'warning') {
        tg.HapticFeedback.notificationOccurred(type);
      } else {
        tg.HapticFeedback.impactOccurred(type || 'light');
      }
    }
  } catch (e) {}
}

// ═══════════════════════════════════════════════════════════════════════════
//  STATE — состояние пользователя (XP, монеты, прогресс, достижения и т.п.)
//  Хранится в localStorage. При наличии Telegram CloudStorage — синхронизируется.
// ═══════════════════════════════════════════════════════════════════════════

const STATE_KEY = 'coddy_state_v1';

const DEFAULT_STATE = {
  user: {
    name: '',
    username: '',
    avatar: '🦊',
  },
  xp: 0,
  level: 1,
  coins: 0,
  total_tests_passed: 0,
  total_perfect_tests: 0,
  pvp_duels: 0,
  pvp_wins: 0,
  current_streak: 1,
  max_streak: 1,
  last_activity: null,
  registration_date: null,
  achievements: [],         // массив id ачивок
  course_progress: {},      // { [course_id]: { current_lesson, completed, finished_lessons: [], started_at } }
  test_results: [],         // [{ course_id, difficulty, score, max, perfect, at }]
  tests_today: 0,
  tests_today_date: '',
};

let STATE = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STATE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return Object.assign({}, DEFAULT_STATE, parsed);
    }
  } catch (e) {}
  // Первый запуск
  const fresh = JSON.parse(JSON.stringify(DEFAULT_STATE));
  fresh.registration_date = new Date().toISOString();
  fresh.last_activity = new Date().toISOString();
  // подтянуть имя из Telegram если доступно
  if (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const u = tg.initDataUnsafe.user;
    fresh.user.name = u.first_name || '';
    fresh.user.username = u.username || '';
  }
  return fresh;
}

function saveState() {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(STATE));
  } catch (e) {
    console.warn('Save failed', e);
  }
}

// ═══════════════════════════════════════════════════════════════════════════
//  GAMIFICATION — XP, уровни, ранги, награды, ачивки
// ═══════════════════════════════════════════════════════════════════════════

function xpForLevel(level) {
  // Накопительный XP, нужный чтобы достичь данного уровня.
  // Используем мягкую квадратичную прогрессию: level n требует base * n * (n-1) / 2 XP.
  // base=100 → ур.2=100, ур.5=1000, ур.10=4500, ур.50=122500, ур.100=495000
  const { xp_per_level_base } = CONTENT.config;
  return Math.floor(xp_per_level_base * level * (level - 1) / 2);
}

function calculateLevel(xp) {
  for (let lvl = 1; lvl <= CONTENT.config.max_level; lvl++) {
    if (xp < xpForLevel(lvl + 1)) return lvl;
  }
  return CONTENT.config.max_level;
}

function getRank(level) {
  let rank = CONTENT.ranks[0][1];
  for (const [minLvl, name] of CONTENT.ranks) {
    if (level >= minLvl) rank = name;
  }
  return rank;
}

function addXP(amount, reason) {
  STATE.xp += amount;
  const newLevel = calculateLevel(STATE.xp);
  let leveledUp = false;
  if (newLevel > STATE.level) {
    leveledUp = true;
    STATE.level = Math.min(newLevel, CONTENT.config.max_level);
  }
  updateStreak();
  saveState();
  refreshTopbar();
  checkAchievements({ silentList: false });
  if (leveledUp) {
    toast(`🎉 Новый уровень! ${STATE.level}`, 'success', 3500);
    haptic('success');
  }
  return leveledUp;
}

function addCoins(amount) {
  STATE.coins += amount;
  saveState();
  refreshTopbar();
  checkAchievements({ silentList: false });
}

function updateStreak() {
  const now = new Date();
  const last = STATE.last_activity ? new Date(STATE.last_activity) : null;
  if (!last) {
    STATE.current_streak = 1;
  } else {
    const hours = (now - last) / 36e5;
    if (hours < 24) {
      // в тот же день
    } else if (hours < 48) {
      STATE.current_streak += 1;
    } else {
      STATE.current_streak = 1;
    }
  }
  if (STATE.current_streak > STATE.max_streak) STATE.max_streak = STATE.current_streak;
  STATE.last_activity = now.toISOString();
}

function checkAchievements({ silentList = false } = {}) {
  const newly = [];
  for (const ach of CONTENT.achievements) {
    if (STATE.achievements.includes(ach.id)) continue;
    if (achievementSatisfied(ach)) {
      STATE.achievements.push(ach.id);
      STATE.xp += ach.xp;
      STATE.coins += ach.coins;
      newly.push(ach);
    }
  }
  if (newly.length) {
    const newLvl = calculateLevel(STATE.xp);
    if (newLvl > STATE.level) STATE.level = newLvl;
    saveState();
    refreshTopbar();
    if (!silentList) {
      newly.forEach((a, i) => {
        setTimeout(() => {
          toast(`🏆 ${a.name}\n+${a.xp} XP · +${a.coins} 🪙`, 'success', 3500);
          haptic('success');
        }, i * 600);
      });
    }
  }
  return newly;
}

function achievementSatisfied(ach) {
  const hour = new Date().getHours();
  switch (ach.check) {
    case 'always':         return true;
    case 'level':          return STATE.level >= ach.value;
    case 'tests_passed':   return STATE.total_tests_passed >= ach.value;
    case 'perfect_tests':  return STATE.total_perfect_tests >= ach.value;
    case 'streak':         return STATE.current_streak >= ach.value || STATE.max_streak >= ach.value;
    case 'coins':          return STATE.coins >= ach.value;
    case 'pvp_duels':      return STATE.pvp_duels >= ach.value;
    case 'pvp_wins':       return STATE.pvp_wins >= ach.value;
    case 'hour_before':    return hour < ach.value;
    case 'hour_after':     return hour >= ach.value && hour <= 4; // ночные часы
    case 'manual':         return false; // вручную через grantAchievement
  }
  return false;
}

function grantAchievement(id) {
  if (STATE.achievements.includes(id)) return;
  const ach = CONTENT.achievements.find(a => a.id === id);
  if (!ach) return;
  STATE.achievements.push(id);
  STATE.xp += ach.xp;
  STATE.coins += ach.coins;
  const newLvl = calculateLevel(STATE.xp);
  if (newLvl > STATE.level) STATE.level = newLvl;
  saveState();
  refreshTopbar();
  toast(`🏆 ${ach.name}\n+${ach.xp} XP · +${ach.coins} 🪙`, 'success', 3500);
  haptic('success');
}

// ═══════════════════════════════════════════════════════════════════════════
//  UI HELPERS
// ═══════════════════════════════════════════════════════════════════════════

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[m]));
}

// Безопасный рендер текста урока — у нас доверенный контент
function renderLessonHTML(text) {
  let out = text;
  // Фикс битого синтаксиса из бота: "<code> class='language-x'>" -> "<code class='language-x'>"
  out = out.replace(/<code>\s+class=(['"][a-z\-]+['"])>/gi, '<code class=$1>');
  // Если многострочный <code class='language-...'>...</code> без <pre> — оборачиваем
  out = out.replace(/<code(\s+class=['"]language-[a-z]+['"])>([\s\S]*?)<\/code>/gi, (m, cls, body) => {
    if (body.includes('\n')) {
      return `<pre><code${cls}>${body}</code></pre>`;
    }
    return m;
  });
  return out;
}

function toast(text, type = 'default', ms = 2800) {
  const stack = $('#toast-stack');
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  el.style.whiteSpace = 'pre-line';
  el.textContent = text;
  stack.appendChild(el);
  setTimeout(() => el.remove(), ms + 100);
}

function refreshTopbar() {
  $('#t-xp').textContent = formatNum(STATE.xp);
  $('#t-coins').textContent = formatNum(STATE.coins);
  $('#t-streak').textContent = formatNum(STATE.current_streak);
}

function formatNum(n) {
  if (n < 1000) return String(n);
  if (n < 10000) return (n/1000).toFixed(1).replace('.0','') + 'k';
  return Math.floor(n/1000) + 'k';
}

// ═══════════════════════════════════════════════════════════════════════════
//  ROUTER — экраны
// ═══════════════════════════════════════════════════════════════════════════

const screens = {};
let currentScreen = 'home';
let screenHistory = [];

function go(name, params = {}, pushHistory = true) {
  if (!screens[name]) {
    console.warn('Unknown screen:', name);
    return;
  }
  if (pushHistory) screenHistory.push({ name: currentScreen });
  currentScreen = name;
  const root = $('#screen-root');
  root.innerHTML = '';
  root.classList.remove('fade');
  // Force reflow для анимации
  void root.offsetWidth;
  const node = screens[name](params);
  if (node) root.appendChild(node);
  // Подсветить таб
  $$('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.screen === topLevelOf(name));
  });
  // Скролл вверх
  window.scrollTo(0, 0);
  // BackButton
  syncBackButton();
}

function topLevelOf(name) {
  // Сопоставление подэкранов с верхней навигацией
  if (name.startsWith('course') || name === 'lesson') return 'courses';
  if (name.startsWith('test') || name === 'quiz') return 'tests';
  if (name === 'achievements') return 'achievements';
  if (name === 'profile' || name === 'leaderboard') return 'profile';
  return 'home';
}

function back() {
  const prev = screenHistory.pop();
  if (prev) {
    go(prev.name, {}, false);
  } else {
    go('home', {}, false);
  }
}

function syncBackButton() {
  if (!tg || !tg.BackButton) return;
  if (currentScreen === 'home' || ['courses','tests','achievements','profile'].includes(currentScreen)) {
    tg.BackButton.hide();
  } else {
    tg.BackButton.show();
  }
}

if (tg && tg.BackButton) {
  tg.BackButton.onClick(() => back());
}

// helper: создать DOM из HTML
function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}
function frag(html) {
  const t = document.createElement('template');
  t.innerHTML = html;
  return t.content;
}

// ═══════════════════════════════════════════════════════════════════════════
//  SCREEN: HOME
// ═══════════════════════════════════════════════════════════════════════════

screens.home = function () {
  const userName = STATE.user.name || 'Студент';
  const rank = getRank(STATE.level);
  const xpCur = STATE.xp - xpForLevel(STATE.level);
  const xpMax = xpForLevel(STATE.level + 1) - xpForLevel(STATE.level);
  const progress = Math.min(100, Math.floor((xpCur / Math.max(1, xpMax)) * 100));

  // Подсчёт прогресса для главной
  const totalLessons = CONTENT.courses.reduce((s, c) => s + c.lessons.length, 0);
  const completedLessons = Object.values(STATE.course_progress).reduce((s, p) => {
    return s + (p.finished_lessons ? p.finished_lessons.length : 0);
  }, 0);

  const node = el(`
    <div>
      <div class="hero-card">
        <div class="hero-greet">Привет,</div>
        <div class="hero-name">${escapeHTML(userName)} 👋</div>
        <div class="hero-rank">${escapeHTML(rank)} · LVL ${STATE.level}</div>

        <div class="hero-progress">
          <div class="hp-row">
            <span>До следующего уровня</span>
            <strong>${xpCur} / ${xpMax} XP</strong>
          </div>
          <div class="hp-bar"><div class="hp-bar-fill" style="width:${progress}%"></div></div>
        </div>

        <svg class="hero-mascot" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <!-- Doodle-style mascot -->
          <path d="M40 12c-12 0-22 9-22 22 0 7 3 13 9 18l-3 9c-1 3 2 5 4 3l8-5c1 0 3 1 4 1 12 0 22-10 22-23S52 12 40 12z"
                fill="#FBE8D2" stroke="#1A1A1A" stroke-width="2.5" stroke-linejoin="round"/>
          <circle cx="32" cy="36" r="2.5" fill="#1A1A1A"/>
          <circle cx="48" cy="36" r="2.5" fill="#1A1A1A"/>
          <path d="M34 45 Q40 49 46 45" fill="none" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round"/>
          <circle cx="28" cy="42" r="2" fill="#E85D2F" opacity="0.7"/>
          <circle cx="52" cy="42" r="2" fill="#E85D2F" opacity="0.7"/>
        </svg>
      </div>

      <div class="section-head">
        <h2>Чем займёмся?</h2>
      </div>
      <div class="quick-grid">
        <button class="quick-tile" data-go="courses">
          <span class="qt-ico">📚</span>
          <span class="qt-title">Курсы</span>
          <span class="qt-sub">${CONTENT.courses.length} курсов</span>
        </button>
        <button class="quick-tile" data-go="tests">
          <span class="qt-ico">📝</span>
          <span class="qt-title">Тесты</span>
          <span class="qt-sub">Проверь себя</span>
        </button>
        <button class="quick-tile" data-go="achievements">
          <span class="qt-ico">🏆</span>
          <span class="qt-title">Награды</span>
          <span class="qt-sub">${STATE.achievements.length} / ${CONTENT.achievements.length}</span>
        </button>
        <button class="quick-tile" data-go="leaderboard">
          <span class="qt-ico">📊</span>
          <span class="qt-title">Рейтинг</span>
          <span class="qt-sub">Топ учеников</span>
        </button>
      </div>

      <div class="section-head">
        <h2>Продолжить</h2>
      </div>
      <div class="list" id="home-continue"></div>
    </div>
  `);

  // Continue list — последние начатые курсы
  const continueList = $('#home-continue', node);
  const started = CONTENT.courses
    .filter(c => STATE.course_progress[c.id])
    .sort((a, b) => {
      const pa = STATE.course_progress[a.id];
      const pb = STATE.course_progress[b.id];
      return new Date(pb.started_at) - new Date(pa.started_at);
    })
    .slice(0, 3);

  if (started.length === 0) {
    // Покажем 3 курса для старта
    CONTENT.courses.slice(0, 3).forEach(c => {
      continueList.appendChild(courseCardNode(c));
    });
  } else {
    started.forEach(c => continueList.appendChild(courseCardNode(c)));
  }

  // Quick tiles wiring
  $$('.quick-tile', node).forEach(b => {
    b.addEventListener('click', () => { haptic('light'); go(b.dataset.go); });
  });

  return node;
};

// ═══════════════════════════════════════════════════════════════════════════
//  SCREEN: COURSES
// ═══════════════════════════════════════════════════════════════════════════

screens.courses = function () {
  const node = el(`
    <div>
      <h1 class="screen-title">Курсы</h1>
      <p class="screen-sub">Выбери курс и пройди уроки. За каждый — XP и монеты.</p>
      <div class="list" id="courses-list"></div>
    </div>
  `);
  const list = $('#courses-list', node);
  CONTENT.courses.forEach(c => list.appendChild(courseCardNode(c)));
  return node;
};

function courseCardNode(course) {
  const progress = STATE.course_progress[course.id];
  const done = progress && progress.finished_lessons ? progress.finished_lessons.length : 0;
  const total = course.lessons.length;
  const pct = total ? Math.floor((done / total) * 100) : 0;
  const diffName = { easy: 'Лёгкий', medium: 'Средний', hard: 'Сложный' }[course.difficulty] || course.difficulty;

  const card = el(`
    <button class="card" data-course="${course.id}">
      <div class="card-emoji">${course.emoji}</div>
      <div class="card-body">
        <div class="card-title">${escapeHTML(course.title)}</div>
        <div class="card-sub">
          <span class="pill ${course.difficulty}">${diffName}</span>
          <span>${total} уроков</span>
          <span><b>${done}</b> ✓</span>
        </div>
        <div class="card-progress"><i style="width:${pct}%"></i></div>
      </div>
      <div class="card-right">›</div>
    </button>
  `);
  card.addEventListener('click', () => {
    haptic('light');
    go('course', { id: course.id });
  });
  return card;
}

// ═══════════════════════════════════════════════════════════════════════════
//  SCREEN: COURSE DETAIL
// ═══════════════════════════════════════════════════════════════════════════

screens.course = function (params) {
  const course = CONTENT.courses.find(c => c.id === params.id);
  if (!course) return el('<div class="empty"><div class="e-emoji">🤷</div><div class="e-title">Курс не найден</div></div>');

  const progress = STATE.course_progress[course.id] || { finished_lessons: [], current_lesson: 1 };
  const done = progress.finished_lessons || [];
  const diffName = { easy: 'Лёгкий', medium: 'Средний', hard: 'Сложный' }[course.difficulty] || course.difficulty;

  const node = el(`
    <div>
      <button class="back-btn">← Назад</button>

      <div class="course-hero">
        <div class="ch-emoji">${course.emoji}</div>
        <div class="ch-title">${escapeHTML(course.title)}</div>
        <div class="ch-desc">${escapeHTML(course.description)}</div>
        <div class="ch-meta">
          <span class="pill ${course.difficulty}">${diffName}</span>
          <span class="pill">⚡ ${course.xp_reward} XP</span>
          <span class="pill">🪙 ${course.coins_reward}</span>
          <span class="pill">📚 ${course.lessons.length} уроков</span>
        </div>
      </div>

      <div class="section-head"><h2>Уроки</h2><span class="section-link">${done.length}/${course.lessons.length} ✓</span></div>
      <div class="list" id="lessons-list"></div>
    </div>
  `);

  $('.back-btn', node).addEventListener('click', () => { haptic('light'); back(); });

  const list = $('#lessons-list', node);
  course.lessons.forEach((lesson, idx) => {
    const isDone = done.includes(lesson.order);
    // Открыт следующий после последнего пройденного. Чтобы избежать жёсткой блокировки — разрешаем заходить в любой.
    const isCurrent = !isDone && (idx === 0 || done.includes(course.lessons[idx-1].order));
    const row = el(`
      <button class="lesson-row ${isDone ? 'done' : ''} ${isCurrent ? 'current' : ''}">
        <div class="lesson-num">${isDone ? '✓' : lesson.order}</div>
        <div class="lesson-title">${escapeHTML(lesson.title)}</div>
        <div class="lesson-status">${isDone ? '✓' : '›'}</div>
      </button>
    `);
    row.addEventListener('click', () => {
      haptic('light');
      go('lesson', { courseId: course.id, lessonOrder: lesson.order });
    });
    list.appendChild(row);
  });

  // Quick action: tests for this course
  const tests = CONTENT.tests[String(course.id)];
  if (tests) {
    const testBtn = el(`
      <div class="section-head"><h2>Закрепить тестом</h2></div>
      <button class="diff-card" id="goto-tests">
        <div class="dc-emoji">📝</div>
        <div>
          <div class="dc-title">Пройти тест по курсу</div>
          <div class="dc-sub">3 уровня сложности</div>
        </div>
        <div class="dc-right">›</div>
      </button>
    `);
    $('#goto-tests', testBtn).addEventListener('click', () => {
      haptic('light');
      go('test-course', { courseId: course.id });
    });
    node.appendChild(testBtn);
  }

  return node;
};

// ═══════════════════════════════════════════════════════════════════════════
//  SCREEN: LESSON
// ═══════════════════════════════════════════════════════════════════════════

screens.lesson = function (params) {
  const course = CONTENT.courses.find(c => c.id === params.courseId);
  if (!course) return el('<div class="empty"><div class="e-title">Урок не найден</div></div>');
  const lesson = course.lessons.find(l => l.order === params.lessonOrder);
  if (!lesson) return el('<div class="empty"><div class="e-title">Урок не найден</div></div>');

  const progress = STATE.course_progress[course.id] || { finished_lessons: [], current_lesson: 1, started_at: new Date().toISOString() };
  const done = progress.finished_lessons || [];
  const isDone = done.includes(lesson.order);

  const node = el(`
    <div>
      <button class="back-btn">← К урокам</button>
      <div class="lesson-view">
        <div class="handwritten" style="font-size:18px;margin-bottom:4px;">${escapeHTML(course.title)} · урок ${lesson.order}</div>
        <h1>${escapeHTML(lesson.title)}</h1>
        <div class="lesson-body">${renderLessonHTML(lesson.text)}</div>
        <div class="lesson-nav">
          ${lesson.order > 1
            ? `<button class="btn-secondary" id="prev-btn">← Назад</button>`
            : ''}
          <button class="btn-primary" id="next-btn">
            ${isDone
              ? (lesson.order < course.lessons.length ? 'Следующий →' : 'К курсу')
              : (lesson.order < course.lessons.length ? 'Завершить и далее →' : 'Завершить курс')}
          </button>
        </div>
      </div>
    </div>
  `);

  $('.back-btn', node).addEventListener('click', () => { haptic('light'); back(); });

  // Подсветка кода в уроках
  setTimeout(() => {
    if (window.hljs) {
      node.querySelectorAll('pre code').forEach(b => {
        try { hljs.highlightElement(b); } catch(e) {}
      });
    }
  }, 10);

  if ($('#prev-btn', node)) {
    $('#prev-btn', node).addEventListener('click', () => {
      haptic('light');
      go('lesson', { courseId: course.id, lessonOrder: lesson.order - 1 }, false);
    });
  }

  $('#next-btn', node).addEventListener('click', () => {
    haptic('medium');
    // Отметить как пройденный, если ещё не
    if (!isDone) {
      const prog = STATE.course_progress[course.id] || {
        current_lesson: 1, finished_lessons: [], completed: false,
        started_at: new Date().toISOString()
      };
      if (!prog.finished_lessons) prog.finished_lessons = [];
      if (!prog.finished_lessons.includes(lesson.order)) prog.finished_lessons.push(lesson.order);
      prog.current_lesson = Math.min(course.lessons.length, lesson.order + 1);
      if (prog.finished_lessons.length === course.lessons.length) {
        prog.completed = true;
        prog.completed_at = new Date().toISOString();
      }
      STATE.course_progress[course.id] = prog;
      addCoins(CONTENT.config.coins_per_lesson);
      // XP за урок: чтобы не зашкаливать — round( course.xp_reward / lessons )
      const lessonXP = Math.max(5, Math.round(course.xp_reward / course.lessons.length));
      addXP(lessonXP, 'lesson');
      if (prog.completed) {
        // Дополнительная награда за курс
        toast(`🎓 Курс "${course.title}" завершён!\n+${course.xp_reward} XP · +${course.coins_reward} 🪙`, 'success', 3500);
        addXP(course.xp_reward, 'course_complete');
        addCoins(course.coins_reward);
      } else {
        toast(`+${lessonXP} XP · +${CONTENT.config.coins_per_lesson} 🪙`, 'success', 1800);
      }
    }
    if (lesson.order < course.lessons.length) {
      go('lesson', { courseId: course.id, lessonOrder: lesson.order + 1 }, false);
    } else {
      back();
    }
  });

  return node;
};

// ═══════════════════════════════════════════════════════════════════════════
//  SCREEN: TESTS (список курсов с тестами)
// ═══════════════════════════════════════════════════════════════════════════

screens.tests = function () {
  const node = el(`
    <div>
      <h1 class="screen-title">Тесты</h1>
      <p class="screen-sub">Проверь, насколько хорошо ты усвоил материал. 3 уровня сложности.</p>
      <div class="list" id="tests-list"></div>
    </div>
  `);
  const list = $('#tests-list', node);

  // Конструируем «виртуальные курсы» для тестов: id 1..6
  const testCourseInfo = [
    { id: 1, title: 'HTML',       emoji: '🌐' },
    { id: 2, title: 'CSS',        emoji: '🎨' },
    { id: 3, title: 'JavaScript', emoji: '⚡' },
    { id: 4, title: 'Python',     emoji: '🐍' },
    { id: 5, title: 'Git',        emoji: '🌿' },
    { id: 6, title: 'SQL',        emoji: '🗄' },
  ];

  testCourseInfo.forEach(info => {
    const tests = CONTENT.tests[String(info.id)];
    if (!tests) return;
    const totalQ = (tests.easy?.length || 0) + (tests.medium?.length || 0) + (tests.hard?.length || 0);
    const passed = STATE.test_results.filter(r => r.course_id === info.id).length;
    const card = el(`
      <button class="card">
        <div class="card-emoji">${info.emoji}</div>
        <div class="card-body">
          <div class="card-title">${escapeHTML(info.title)}</div>
          <div class="card-sub">
            <span>${totalQ} вопросов</span>
            <span><b>${passed}</b> попыток</span>
          </div>
        </div>
        <div class="card-right">›</div>
      </button>
    `);
    card.addEventListener('click', () => {
      haptic('light');
      go('test-course', { courseId: info.id });
    });
    list.appendChild(card);
  });

  return node;
};

// ═══════════════════════════════════════════════════════════════════════════
//  SCREEN: TEST COURSE (выбор сложности)
// ═══════════════════════════════════════════════════════════════════════════

screens['test-course'] = function (params) {
  const tests = CONTENT.tests[String(params.courseId)];
  if (!tests) return el('<div class="empty"><div class="e-title">Тесты не найдены</div></div>');

  const courseTitles = { 1:'HTML', 2:'CSS', 3:'JavaScript', 4:'Python', 5:'Git', 6:'SQL' };
  const courseEmoji  = { 1:'🌐', 2:'🎨', 3:'⚡', 4:'🐍', 5:'🌿', 6:'🗄' };
  const title = courseTitles[params.courseId] || 'Тест';
  const emoji = courseEmoji[params.courseId] || '📝';

  const diffs = [
    { key: 'easy',   name: 'Лёгкий',   sub: 'Базовые знания',   emoji: '🟢', xp: 100, coins: 50  },
    { key: 'medium', name: 'Средний',  sub: 'Глубже копнуть',   emoji: '🟡', xp: 250, coins: 125 },
    { key: 'hard',   name: 'Сложный',  sub: 'Для профи',        emoji: '🔴', xp: 500, coins: 250 },
  ];

  const node = el(`
    <div>
      <button class="back-btn">← Назад</button>
      <div class="course-hero">
        <div class="ch-emoji">${emoji}</div>
        <div class="ch-title">Тест по ${escapeHTML(title)}</div>
        <div class="ch-desc">Выбери уровень сложности и проверь свои знания.</div>
      </div>

      <div class="section-head"><h2>Сложность</h2></div>
      <div class="diff-grid" id="diff-grid"></div>
    </div>
  `);
  $('.back-btn', node).addEventListener('click', () => { haptic('light'); back(); });
  const grid = $('#diff-grid', node);

  diffs.forEach(d => {
    const qs = tests[d.key];
    if (!qs || qs.length === 0) return;
    const card = el(`
      <button class="diff-card">
        <div class="dc-emoji">${d.emoji}</div>
        <div>
          <div class="dc-title">${d.name}</div>
          <div class="dc-sub">${qs.length} вопросов · +${d.xp} XP · +${d.coins} 🪙</div>
        </div>
        <div class="dc-right">›</div>
      </button>
    `);
    card.addEventListener('click', () => {
      haptic('light');
      go('quiz', { courseId: params.courseId, difficulty: d.key, rewardXP: d.xp, rewardCoins: d.coins });
    });
    grid.appendChild(card);
  });

  return node;
};

// ═══════════════════════════════════════════════════════════════════════════
//  SCREEN: QUIZ (прохождение теста)
// ═══════════════════════════════════════════════════════════════════════════

screens.quiz = function (params) {
  const tests = CONTENT.tests[String(params.courseId)];
  const questions = (tests && tests[params.difficulty]) || [];
  if (questions.length === 0) {
    return el('<div class="empty"><div class="e-title">Вопросы не найдены</div></div>');
  }

  // Перемешаем для разнообразия
  const order = [...questions.keys()].sort(() => Math.random() - 0.5);
  let qIdx = 0;
  let correct = 0;
  let answers = []; // {questionIdx, chosen, isCorrect}

  const node = el(`
    <div>
      <button class="back-btn">← Прервать</button>
      <div class="quiz" id="quiz-box"></div>
    </div>
  `);

  $('.back-btn', node).addEventListener('click', () => {
    if (confirm('Прервать тест? Прогресс не сохранится.')) {
      haptic('warning'); back();
    }
  });

  function renderQuestion() {
    const box = $('#quiz-box', node);
    if (qIdx >= order.length) {
      // Финал
      const max = order.length;
      const pct = Math.round((correct / max) * 100);
      const perfect = correct === max;
      // Награды
      let xpGain = Math.round(params.rewardXP * (correct / max));
      let coinsGain = perfect
        ? CONTENT.config.coins_per_test_perfect
        : (correct >= max * 0.5 ? CONTENT.config.coins_per_test_pass : 0);
      coinsGain += Math.round(params.rewardCoins * (correct / max));
      if (correct >= max * 0.5) {
        STATE.total_tests_passed += 1;
        // Tests today
        const today = new Date().toDateString();
        if (STATE.tests_today_date !== today) {
          STATE.tests_today_date = today;
          STATE.tests_today = 0;
        }
        STATE.tests_today += 1;
        if (STATE.tests_today >= 3) grantAchievement('speed_demon');
      }
      if (perfect) STATE.total_perfect_tests += 1;
      STATE.test_results.push({
        course_id: params.courseId,
        difficulty: params.difficulty,
        score: correct,
        max,
        perfect,
        at: new Date().toISOString(),
      });
      saveState();

      box.innerHTML = `
        <div class="quiz-result">
          <div class="qr-emoji">${perfect ? '🏆' : (pct >= 50 ? '✨' : '💪')}</div>
          <div class="qr-title">${perfect ? 'Идеально!' : (pct >= 50 ? 'Отлично!' : 'Можно лучше')}</div>
          <div class="qr-score">${correct} / ${max}</div>
          <div class="handwritten">${pct}% правильных ответов</div>
          <div class="qr-rewards">
            <div class="qr-reward">+${xpGain} ⚡</div>
            <div class="qr-reward">+${coinsGain} 🪙</div>
          </div>
          <div class="lesson-nav" style="margin-top:18px;">
            <button class="btn-secondary" id="restart-btn">Ещё раз</button>
            <button class="btn-primary" id="done-btn">Готово</button>
          </div>
        </div>
      `;
      addXP(xpGain, 'test');
      addCoins(coinsGain);
      haptic(perfect ? 'success' : (pct >= 50 ? 'light' : 'warning'));
      $('#restart-btn').addEventListener('click', () => {
        haptic('light');
        go('quiz', params, false);
      });
      $('#done-btn').addEventListener('click', () => {
        haptic('light');
        // Назад к выбору сложности
        screenHistory.pop();
        back();
      });
      return;
    }

    const q = questions[order[qIdx]];
    box.innerHTML = `
      <div class="quiz-progress">
        <span>Вопрос ${qIdx + 1} / ${order.length}</span>
        <span>Верных: ${correct}</span>
      </div>
      <div class="quiz-progbar"><i style="width:${(qIdx / order.length)*100}%"></i></div>
      <div class="quiz-q">${escapeHTML(q.question)}</div>
      <div class="quiz-answers"></div>
    `;
    const ansBox = box.querySelector('.quiz-answers');
    q.answers.forEach((a, i) => {
      const btn = el(`<button class="quiz-answer">${escapeHTML(a)}</button>`);
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        const isCorrect = i === q.correct;
        // Подсветка
        ansBox.querySelectorAll('.quiz-answer').forEach((b, j) => {
          b.disabled = true;
          if (j === q.correct) b.classList.add('correct');
          else if (j === i) b.classList.add('wrong');
        });
        if (isCorrect) {
          correct++;
          haptic('success');
        } else {
          haptic('error');
        }
        answers.push({ qIdx: order[qIdx], chosen: i, isCorrect });
        setTimeout(() => {
          qIdx++;
          renderQuestion();
        }, 800);
      });
      ansBox.appendChild(btn);
    });
  }

  setTimeout(renderQuestion, 0);
  return node;
};

// ═══════════════════════════════════════════════════════════════════════════
//  SCREEN: ACHIEVEMENTS
// ═══════════════════════════════════════════════════════════════════════════

screens.achievements = function () {
  const total = CONTENT.achievements.length;
  const earned = STATE.achievements.length;
  const pct = total ? Math.round((earned / total) * 100) : 0;

  const node = el(`
    <div>
      <h1 class="screen-title">Достижения</h1>
      <p class="screen-sub">Открывай награды, получай XP и монеты.</p>

      <div class="ach-stats">
        <div class="ach-stat"><div class="as-num">${earned}</div><div class="as-lbl">получено</div></div>
        <div class="ach-stat"><div class="as-num">${total - earned}</div><div class="as-lbl">осталось</div></div>
        <div class="ach-stat"><div class="as-num">${pct}%</div><div class="as-lbl">прогресс</div></div>
      </div>

      <div id="ach-cats"></div>
    </div>
  `);

  // Группировка по категориям
  const byCat = {};
  CONTENT.achievements.forEach(a => {
    if (!byCat[a.category]) byCat[a.category] = [];
    byCat[a.category].push(a);
  });

  const catsRoot = $('#ach-cats', node);
  Object.entries(byCat).forEach(([cat, list]) => {
    const block = el(`
      <div>
        <div class="ach-cat-head">${escapeHTML(cat)}</div>
        <div class="ach-grid"></div>
      </div>
    `);
    const grid = block.querySelector('.ach-grid');
    list.forEach(a => {
      const got = STATE.achievements.includes(a.id);
      const card = el(`
        <div class="ach-card ${got ? '' : 'locked'}">
          ${got ? '<div class="ac-check">✓</div>' : ''}
          <span class="ac-emoji">${a.name.split(' ')[0]}</span>
          <div class="ac-name">${escapeHTML(a.name.replace(/^\S+\s/, ''))}</div>
          <div class="ac-desc">${escapeHTML(a.desc)}</div>
          <div class="ac-rew">
            <span>+${a.xp} ⚡</span>
            <span>+${a.coins} 🪙</span>
          </div>
        </div>
      `);
      grid.appendChild(card);
    });
    catsRoot.appendChild(block);
  });

  return node;
};

// ═══════════════════════════════════════════════════════════════════════════
//  SCREEN: PROFILE
// ═══════════════════════════════════════════════════════════════════════════

screens.profile = function () {
  const userName = STATE.user.name || 'Студент';
  const username = STATE.user.username ? '@' + STATE.user.username : '';
  const rank = getRank(STATE.level);
  const xpCur = STATE.xp - xpForLevel(STATE.level);
  const xpMax = xpForLevel(STATE.level + 1) - xpForLevel(STATE.level);

  const courses_completed = Object.values(STATE.course_progress).filter(p => p.completed).length;
  const lessons_done = Object.values(STATE.course_progress).reduce((s, p) =>
    s + (p.finished_lessons ? p.finished_lessons.length : 0), 0);

  const node = el(`
    <div>
      <h1 class="screen-title">Профиль</h1>

      <div class="profile-card">
        <div class="avatar">${escapeHTML(STATE.user.avatar || '🦊')}</div>
        <div class="profile-name">${escapeHTML(userName)}</div>
        ${username ? `<div class="handwritten">${escapeHTML(username)}</div>` : ''}
        <div style="margin-top:8px;"><span class="profile-rank">${escapeHTML(rank)} · LVL ${STATE.level}</span></div>
        <div style="margin-top:14px;">
          <div class="hp-row"><span>XP до следующего уровня</span><strong>${xpCur} / ${xpMax}</strong></div>
          <div class="hp-bar"><div class="hp-bar-fill" style="width:${Math.min(100, Math.floor((xpCur/Math.max(1,xpMax))*100))}%"></div></div>
        </div>
      </div>

      <div class="stat-grid">
        <div class="stat-box"><div class="sb-row">
          <div class="sb-ico">⚡</div>
          <div><div class="sb-num">${formatNum(STATE.xp)}</div><div class="sb-lbl">Всего XP</div></div>
        </div></div>
        <div class="stat-box"><div class="sb-row">
          <div class="sb-ico">🪙</div>
          <div><div class="sb-num">${formatNum(STATE.coins)}</div><div class="sb-lbl">Монет</div></div>
        </div></div>
        <div class="stat-box"><div class="sb-row">
          <div class="sb-ico">🔥</div>
          <div><div class="sb-num">${STATE.current_streak}</div><div class="sb-lbl">Стрик дней</div></div>
        </div></div>
        <div class="stat-box"><div class="sb-row">
          <div class="sb-ico">🏆</div>
          <div><div class="sb-num">${STATE.achievements.length}</div><div class="sb-lbl">Награды</div></div>
        </div></div>
        <div class="stat-box"><div class="sb-row">
          <div class="sb-ico">🎓</div>
          <div><div class="sb-num">${courses_completed}</div><div class="sb-lbl">Курсов завершено</div></div>
        </div></div>
        <div class="stat-box"><div class="sb-row">
          <div class="sb-ico">📖</div>
          <div><div class="sb-num">${lessons_done}</div><div class="sb-lbl">Уроков пройдено</div></div>
        </div></div>
        <div class="stat-box"><div class="sb-row">
          <div class="sb-ico">📝</div>
          <div><div class="sb-num">${STATE.total_tests_passed}</div><div class="sb-lbl">Тестов пройдено</div></div>
        </div></div>
        <div class="stat-box"><div class="sb-row">
          <div class="sb-ico">💯</div>
          <div><div class="sb-num">${STATE.total_perfect_tests}</div><div class="sb-lbl">Без ошибок</div></div>
        </div></div>
      </div>

      <button class="btn-secondary" id="open-lb" style="width:100%;">📊 Рейтинг</button>
      <div style="height:10px;"></div>
      <button class="btn-secondary" id="reset-btn" style="width:100%; color:#B53B26;">⟲ Сбросить прогресс</button>
    </div>
  `);

  $('#open-lb', node).addEventListener('click', () => { haptic('light'); go('leaderboard'); });
  $('#reset-btn', node).addEventListener('click', () => {
    if (confirm('Сбросить весь прогресс? Это действие нельзя отменить.')) {
      localStorage.removeItem(STATE_KEY);
      STATE = loadState();
      haptic('warning');
      refreshTopbar();
      go('home', {}, false);
      toast('Прогресс сброшен', 'warn');
    }
  });

  return node;
};

// ═══════════════════════════════════════════════════════════════════════════
//  SCREEN: LEADERBOARD (демо-рейтинг)
// ═══════════════════════════════════════════════════════════════════════════

screens.leaderboard = function () {
  // Имитируем глобальный топ: пользователь + несколько имён с разбросом XP
  // (в реальном проекте — данные с сервера)
  const others = [
    { name: 'Дима',    xp: STATE.xp + 1300 },
    { name: 'Алина',   xp: STATE.xp + 900  },
    { name: 'Артём',   xp: STATE.xp + 500  },
    { name: 'София',   xp: STATE.xp + 250  },
    { name: 'Никита',  xp: Math.max(0, STATE.xp - 80) },
    { name: 'Маша',    xp: Math.max(0, STATE.xp - 200) },
    { name: 'Олег',    xp: Math.max(0, STATE.xp - 350) },
    { name: 'Катя',    xp: Math.max(0, STATE.xp - 600) },
    { name: 'Ваня',    xp: Math.max(0, STATE.xp - 900) },
  ];
  const me = { name: (STATE.user.name || 'Вы') + ' (вы)', xp: STATE.xp, isMe: true };
  const all = [...others, me].sort((a, b) => b.xp - a.xp);

  const node = el(`
    <div>
      <button class="back-btn">← Назад</button>
      <h1 class="screen-title">Рейтинг</h1>
      <p class="screen-sub">Топ-10 учеников по XP. Учись чаще — поднимешься выше.</p>
      <div class="list" id="lb-list"></div>
      <div style="margin-top:10px;" class="handwritten center">
        ✦ это демо-рейтинг — подключите свой сервер для реальных данных ✦
      </div>
    </div>
  `);
  $('.back-btn', node).addEventListener('click', () => { haptic('light'); back(); });

  const list = $('#lb-list', node);
  all.slice(0, 10).forEach((u, i) => {
    const place = i + 1;
    const medal = place === 1 ? 'gold' : place === 2 ? 'silver' : place === 3 ? 'bronze' : '';
    const placeStr = place === 1 ? '🥇' : place === 2 ? '🥈' : place === 3 ? '🥉' : place;
    const row = el(`
      <div class="lb-row ${medal}" style="${u.isMe ? 'background:var(--accent-soft);' : ''}">
        <div class="lb-place">${placeStr}</div>
        <div class="lb-name">${escapeHTML(u.name)}</div>
        <div class="lb-xp">${formatNum(u.xp)} XP</div>
      </div>
    `);
    list.appendChild(row);
  });

  return node;
};

// ═══════════════════════════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════════════════════════

function init() {
  // Стрик при запуске
  if (!STATE.last_activity) {
    STATE.last_activity = new Date().toISOString();
    STATE.registration_date = STATE.registration_date || new Date().toISOString();
  } else {
    updateStreak();
  }
  saveState();

  // Первое достижение
  if (!STATE.achievements.includes('first_start')) {
    STATE.achievements.push('first_start');
    STATE.xp += 50; STATE.coins += 25;
    STATE.level = calculateLevel(STATE.xp);
    saveState();
    setTimeout(() => {
      toast('🚀 Первый старт!\n+50 XP · +25 🪙', 'success', 3000);
    }, 500);
  }

  // Часовые ачивки
  const h = new Date().getHours();
  if (h < 7) {
    if (!STATE.achievements.includes('early_bird')) {
      // Молча выдадим (без шума) либо через checkAchievements
    }
  }
  checkAchievements({ silentList: true });

  refreshTopbar();

  // Bottom nav listeners
  $$('.nav-btn').forEach(b => {
    b.addEventListener('click', () => {
      haptic('light');
      screenHistory = []; // переход через таб = новый стек
      go(b.dataset.screen, {}, false);
    });
  });

  go('home', {}, false);
}

document.addEventListener('DOMContentLoaded', init);

// Экспорт для отладки в DevTools
window._coddy = { STATE, go, addXP, addCoins, grantAchievement, checkAchievements, CONTENT };

})();
