# Coddy — Telegram Mini App

Mini App для вашего обучающего бота Coddy. Без сборщиков, без npm, без React —
просто статичные файлы, которые работают в любом браузере и в Telegram.

## 📦 Что внутри

```
coddy_miniapp/
├── index.html      ← каркас приложения, шрифты, подключения
├── style.css       ← все стили (минималистичный «doodle» стиль)
├── content.js      ← ВЕСЬ редактируемый контент (курсы, тесты, ачивки)
└── app.js          ← логика: экраны, состояние, Telegram WebApp API
```

## 🚀 Как запустить — 3 шага

### 1) Положите файлы на хостинг с HTTPS

Telegram требует HTTPS. Любой бесплатный вариант подойдёт:

- **GitHub Pages** (самый простой) — создайте репозиторий, загрузите 4 файла,
  включите Pages в Settings → Pages → Source: main / root. Получите URL вида
  `https://username.github.io/coddy-miniapp/`
- **Netlify Drop** — https://app.netlify.com/drop — просто перетащите папку
  в окно, получите URL за 5 секунд
- **Cloudflare Pages**, **Vercel**, **GitLab Pages** — тоже работают

### 2) Зарегистрируйте Mini App в @BotFather

В Telegram откройте [@BotFather](https://t.me/BotFather):

```
/mybots
→ выберите вашего бота Coddy
→ Bot Settings
→ Menu Button
→ Edit Menu Button URL
→ вставьте URL вашего хостинга (например, https://username.github.io/coddy-miniapp/)
→ задайте текст кнопки: "📚 Открыть курсы"
```

Готово — у бота в чате появится синяя кнопка-«гамбургер» снизу, по которой откроется
ваше Mini App прямо в Telegram.

### 3) (Опционально) Команда /app в боте

Добавьте в `handlers/courses.py` или main.py хендлер:

```python
from aiogram.types import WebAppInfo, InlineKeyboardMarkup, InlineKeyboardButton

@dp.message(Command("app"))
async def open_app(message: Message):
    kb = InlineKeyboardMarkup(inline_keyboard=[[
        InlineKeyboardButton(
            text="📚 Открыть Mini App",
            web_app=WebAppInfo(url="https://username.github.io/coddy-miniapp/")
        )
    ]])
    await message.answer("Открыть учебник:", reply_markup=kb)
```

## ✏️ Как редактировать контент

Весь контент — в файле **`content.js`**. После любого изменения просто перезалейте
файл на хостинг и перезагрузите Mini App (в Telegram потяните за верхнюю шторку и
смахните вниз для обновления).

### Добавить новый курс

Найдите в `content.js` блок `CONTENT.courses = [...]` и добавьте объект:

```js
{
  "id": 11,                            // уникальный ID
  "title": "Основы Python",
  "description": "Знакомство с Python с нуля...",
  "emoji": "🐍",
  "language": "Python",
  "difficulty": "easy",                // "easy" | "medium" | "hard"
  "xp_reward": 500,
  "coins_reward": 250,
  "lessons": [
    {
      "order": 1,
      "title": "Что такое Python",
      "text": "<b>Python</b> — это язык программирования...\n\n<pre><code class='language-python'>print('Hello')</code></pre>"
    },
    {
      "order": 2,
      "title": "Переменные",
      "text": "Переменные хранят данные..."
    }
  ]
}
```

**Форматирование в `text`:**
- `<b>жирный</b>`, `<i>курсив</i>`
- `<code>инлайн-код</code>`
- Многострочный код:
  ```html
  <pre><code class='language-python'>
  def hello():
      print("hi")
  </code></pre>
  ```
- Поддерживаемые языки для подсветки: `python`, `javascript`, `html`, `css`, `sql`, `bash`
- Эмодзи и обычный текст работают как есть

### Добавить тесты к курсу

В `content.js` найдите `CONTENT.tests = {...}` и добавьте под ключом-ID курса:

```js
"11": {  // ключ = id курса
  "easy": [
    {
      "question": "Какой оператор печатает текст в Python?",
      "answers": ["echo", "print", "console.log", "write"],
      "correct": 1                    // индекс правильного ответа (0..n)
    },
    // ... ещё вопросы
  ],
  "medium": [ /* ... */ ],
  "hard":   [ /* ... */ ]
}
```

### Добавить достижение

В `CONTENT.achievements`:

```js
{
  "id": "my_achievement",
  "name": "🎯 Снайпер",
  "desc": "Сдать 3 теста на 100%",
  "category": "💯 Перфекция",
  "check": "perfect_tests",   // см. список ниже
  "value": 3,
  "xp": 200,
  "coins": 100
}
```

**Доступные условия (`check`):**

| Условие | Значение | Описание |
|---|---|---|
| `always` | `null` | Срабатывает сразу |
| `level` | число | Достичь уровня |
| `tests_passed` | число | Пройти N тестов |
| `perfect_tests` | число | Сдать N тестов на 100% |
| `streak` | число | N дней подряд |
| `coins` | число | Накопить N монет |
| `pvp_duels` | число | Принять участие в N дуэлях |
| `pvp_wins` | число | Победить в N дуэлях |
| `hour_before` | число (час) | Учиться до X часов утра |
| `hour_after` | число (час) | Учиться после X часов |
| `manual` | `null` | Выдаётся вручную из кода |

### Изменить ранги

`CONTENT.ranks` — массив `[минимальный_уровень, "название"]`:

```js
CONTENT.ranks = [
  [0,   "👶 Новичок"],
  [10,  "📚 Студент"],
  [20,  "💻 Кодер"],
  // ... добавляйте свои
];
```

### Изменить экономику

`CONTENT.config`:

```js
{
  "max_level": 100,
  "xp_per_level_base": 100,         // меньше = быстрее уровни
  "coins_per_lesson": 10,
  "coins_per_test_pass": 25,
  "coins_per_test_perfect": 50,
  "coins_per_achievement": 100
}
```

## 🎨 Кастомизация стиля

Все цвета — в `style.css` в самом верху, в блоке `:root`:

```css
:root {
  --bg: #FAF6EF;         /* основной фон */
  --bg-soft: #FBE8D2;    /* бежевый фон */
  --accent: #E85D2F;     /* фирменный оранжевый */
  --ink: #1A1A1A;        /* чёрный */
  /* ... */
}
```

Поменяйте `--accent`, и весь акцентный цвет в приложении поменяется.

## 🔌 Подключение к серверу (опционально)

Сейчас прогресс хранится в `localStorage` браузера. Чтобы синхронизировать с
вашим ботом и SQLAlchemy-БД, в `app.js` есть точки расширения:

1. **Загрузка состояния при старте** — функция `loadState()`. Можно сделать
   `fetch('/api/user/' + tg.initDataUnsafe.user.id)`.
2. **Сохранение** — функция `saveState()`. После каждого изменения вызывается.
   Сюда добавьте POST на ваш сервер.
3. **Лидерборд** — экран `screens.leaderboard` сейчас показывает демо-данные.
   Замените на реальный fetch к вашему API.

Telegram WebApp App SDK даёт:
- `tg.initData` — подписанная строка с данными пользователя (валидируйте на сервере!)
- `tg.initDataUnsafe.user` — данные пользователя
- `tg.HapticFeedback` — вибрация
- `tg.MainButton`, `tg.BackButton` — нативные кнопки Telegram

## 🐛 Отладка

В DevTools браузера доступен объект `window._coddy`:

```js
_coddy.STATE              // текущее состояние пользователя
_coddy.addXP(500)         // дать XP
_coddy.addCoins(100)      // дать монет
_coddy.grantAchievement('level_10')  // выдать ачивку
_coddy.checkAchievements()  // проверить все условия заново
_coddy.CONTENT            // весь контент
```

Сбросить прогресс можно в Профиле → "Сбросить прогресс".

## 📝 Что уже включено

- ✅ **10 курсов** (HTML, CSS, Селекторы, Оформление, Блочная модель, Позиционирование,
  Флоаты, Флексы, Гриды, Макеты) — полностью с уроками из вашего бота
- ✅ **150 уроков** с подсветкой кода
- ✅ **222 тестовых вопроса** (HTML, CSS, JS, Python, Git, SQL — 3 уровня сложности)
- ✅ **35 достижений** в 7 категориях
- ✅ **11 рангов** от Новичка до Легенды
- ✅ **5 экранов**: главная, курсы, тесты, награды, профиль + лидерборд
- ✅ Telegram WebApp интеграция (тактильная отдача, BackButton, тема)
- ✅ Прогресс уроков, XP, монеты, стрики
- ✅ Адаптивный дизайн под мобильные

## ❓ FAQ

**Можно ли использовать без Telegram?**
Да — приложение работает и в обычном браузере. Просто откройте `index.html`
через `http://localhost:8000/` (для статики). Логика, отвечающая за Telegram
WebApp, gracefully отключается.

**Где хранится прогресс?**
В `localStorage` браузера Telegram. Для сервера — см. раздел «Подключение к серверу».

**Можно ли менять контент на лету?**
Да — отредактируйте `content.js`, перезалейте на хостинг, перезагрузите Mini App.

---

Создано на базе бота **Coddy v1.06**.
