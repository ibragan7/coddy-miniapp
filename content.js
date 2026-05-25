/* ════════════════════════════════════════════════════════════════════════════
   CODDY · контент приложения
   ════════════════════════════════════════════════════════════════════════════

   Здесь находится ВЕСЬ редактируемый контент:
      • Курсы (CONTENT.courses)
      • Тесты (CONTENT.tests)
      • Достижения (CONTENT.achievements)
      • Ранги (CONTENT.ranks)
      • Игровой конфиг (CONTENT.config)

   ── КАК ДОБАВИТЬ КУРС ──────────────────────────────────────────────────────
   Добавьте новый объект в CONTENT.courses:
     {
       id:          <уникальное число>,
       title:       "Название курса",
       description: "Краткое описание",
       emoji:       "📖",
       language:    "Python",
       difficulty:  "easy" | "medium" | "hard",
       xp_reward:   500,
       coins_reward: 250,
       lessons: [
         { order: 1, title: "Заголовок", text: "<b>HTML-форматированный текст</b>" },
         ...
       ]
     }

   В тексте урока поддерживается HTML:
     <b>жирный</b>, <i>курсив</i>, <code>инлайн</code>
     <pre><code class='language-python'>...многострочный код...</code></pre>
     Языки: html, css, javascript, python, sql, bash

   ── КАК ДОБАВИТЬ ТЕСТ ──────────────────────────────────────────────────────
   В CONTENT.tests укажите course_id и три уровня сложности:
     CONTENT.tests["1"] = {
       easy:   [{question, answers:[...], correct: 0..3}, ...],
       medium: [...],
       hard:   [...]
     }

   ── КАК ДОБАВИТЬ ДОСТИЖЕНИЕ ────────────────────────────────────────────────
   Добавьте объект в CONTENT.achievements:
     {
       id:       "my_ach",
       name:     "🎯 Название",
       desc:     "Условие получения",
       category: "🌟 Особые",
       check:    "level" | "tests_passed" | "perfect_tests" | "streak"
               | "coins" | "pvp_wins" | "pvp_duels"
               | "always" | "manual" | "hour_before" | "hour_after",
       value:    <число для проверки, для some — null>,
       xp:       100,
       coins:    50
     }

   После редактирования просто обновите файл и перезагрузите Mini App.
   ════════════════════════════════════════════════════════════════════════════ */

window.CONTENT = {};

// ─── Игровой конфиг ──────────────────────────────────────────────────────────
CONTENT.config = {
  "max_level": 100,
  "xp_per_level_base": 100,
  "xp_multiplier": 1.5,
  "coins_per_lesson": 10,
  "coins_per_test_pass": 25,
  "coins_per_test_perfect": 50,
  "coins_per_achievement": 100
};

// ─── Ранги (минимальный уровень → название) ──────────────────────────────────
CONTENT.ranks = [[0, "👶 Новичок"], [10, "📚 Студент"], [20, "💻 Кодер"], [30, "⚡ Разработчик"], [40, "🔧 Инженер"], [50, "🎯 Специалист"], [60, "🏆 Профессионал"], [70, "⭐ Эксперт"], [80, "👑 Мастер"], [90, "🌟 Гуру"], [100, "🚀 Легенда"]];

// ─── Курсы ───────────────────────────────────────────────────────────────────
CONTENT.courses = [
  {
    "id": 1,
    "title": "Основы HTML",
    "description": "Основы HTML — это интерактивный практический курс для новичков, который простыми словами объяснит устройство веб-страниц и научит вас создавать структурированный «скелет» для любого сайта с нуля.",
    "emoji": "🌐",
    "language": "HTML",
    "difficulty": "easy",
    "xp_reward": 500,
    "coins_reward": 250,
    "lessons": [
      {
        "order": 1,
        "title": "Что такое HTML и как работает браузер",
        "text": "<b>HTML — язык разметки веб-страниц</b>\n\nHTML (HyperText Markup Language) — это основа любого сайта. Браузер получает HTML-файл, читает его сверху вниз и превращает в страницу с текстом, картинками и ссылками.\n\n<b>Как это работает:</b>\n\n1. Ты пишешь HTML-файл на компьютере\n2. Браузер открывает файл и разбирает теги\n3. На экране появляется готовая страница\n\n<b>Первая HTML-страница:</b>\n\n<code> class='language-html'>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n  &lt;head&gt;\n    &lt;title&gt;Моя первая страница&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Привет, мир!&lt;/h1&gt;\n    &lt;p&gt;Это моя первая веб-страница.&lt;/p&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</code>\n\nСохрани этот код в файл <code>index.html</code> и открой в браузере — ты увидишь готовую страницу.\n\n💡 <b>Запомни:</b> HTML описывает <i>структуру</i> и <i>содержимое</i> страницы, но не её внешний вид. За красоту отвечает CSS.\n"
      },
      {
        "order": 2,
        "title": "Теги и элементы HTML",
        "text": "<b>Что такое тег</b>\n\nТег — это команда в угловых скобках. Большинство тегов парные: открывающий и закрывающий.\n\n<pre><code class='language-html'>&lt;p&gt;Это абзац текста&lt;/p&gt;\n\n&lt;h1&gt;Это заголовок&lt;/h1&gt;\n\n&lt;strong&gt;Жирный текст&lt;/strong&gt;\n\n&lt;em&gt;Курсивный текст&lt;/em&gt;</code></pre>\n\n<b>Непарные (самозакрывающиеся) теги:</b>\n\n<pre><code class='language-html'>&lt;br&gt;     &lt;!-- перенос строки --&gt;\n&lt;hr&gt;     &lt;!-- горизонтальная линия --&gt;\n&lt;img&gt;    &lt;!-- изображение --&gt;\n&lt;input&gt;  &lt;!-- поле ввода --&gt;</code></pre>\n\n<b>Вложенность тегов:</b>\n\n<pre><code class='language-html'>&lt;p&gt;Текст с &lt;strong&gt;жирным&lt;/strong&gt; словом&lt;/p&gt;\n\n&lt;!-- Нельзя вот так (пересечение): --&gt;\n&lt;p&gt;&lt;strong&gt;ошибка&lt;/p&gt;&lt;/strong&gt;</code></pre>\n\n💡 Теги всегда должны закрываться в обратном порядке — как матрёшки.\n"
      },
      {
        "order": 3,
        "title": "Заголовки и абзацы",
        "text": "<b>Заголовки h1–h6</b>\n\nHTML даёт 6 уровней заголовков. h1 — самый важный, h6 — самый мелкий.\n\n<pre><code class='language-html'>&lt;h1&gt;Главный заголовок страницы&lt;/h1&gt;\n&lt;h2&gt;Раздел&lt;/h2&gt;\n&lt;h3&gt;Подраздел&lt;/h3&gt;\n&lt;h4&gt;Подподраздел&lt;/h4&gt;\n&lt;h5&gt;Редко используется&lt;/h5&gt;\n&lt;h6&gt;Совсем мелкий&lt;/h6&gt;</code></pre>\n\n<b>Абзацы и текст:</b>\n\n<pre><code class='language-html'>&lt;p&gt;Обычный абзац текста.&lt;/p&gt;\n\n&lt;p&gt;Второй абзац — браузер\nавтоматически добавит отступ сверху.&lt;/p&gt;\n\n&lt;!-- Перенос строки внутри абзаца --&gt;\n&lt;p&gt;Строка первая&lt;br&gt;Строка вторая&lt;/p&gt;\n\n&lt;!-- Предформатированный текст (сохраняет пробелы) --&gt;\n&lt;pre&gt;  Пробелы    сохраняются&lt;/pre&gt;</code></pre>\n\n<b>Форматирование текста:</b>\n\n<pre><code class='language-html'>&lt;strong&gt;Важный жирный текст&lt;/strong&gt;\n&lt;b&gt;Просто жирный&lt;/b&gt;\n\n&lt;em&gt;Выделенный курсив&lt;/em&gt;\n&lt;i&gt;Просто курсив&lt;/i&gt;\n\n&lt;u&gt;Подчёркнутый&lt;/u&gt;\n&lt;s&gt;Зачёркнутый&lt;/s&gt;\n&lt;mark&gt;Выделенный маркером&lt;/mark&gt;\n\n&lt;sub&gt;Нижний индекс&lt;/sub&gt;\n&lt;sup&gt;Верхний индекс&lt;/sup&gt;</code></pre>\n\n💡 Используй <code>&lt;strong&gt;</code> для важного текста, а <code>&lt;b&gt;</code> — просто для визуального выделения. Поисковики учитывают разницу.\n"
      },
      {
        "order": 4,
        "title": "Атрибуты тегов",
        "text": "<b>Атрибуты — дополнительные параметры тега</b>\n\nАтрибуты пишутся внутри открывающего тега: <code>имя=\"значение\"</code>\n\n<pre><code class='language-html'>&lt;!-- Ссылка с атрибутом href --&gt;\n&lt;a href=\"https://google.com\"&gt;Google&lt;/a&gt;\n\n&lt;!-- Картинка с несколькими атрибутами --&gt;\n&lt;img src=\"photo.jpg\" alt=\"Фото\" width=\"300\" height=\"200\"&gt;\n\n&lt;!-- Абзац с классом и ID --&gt;\n&lt;p class=\"intro\" id=\"first-para\"&gt;Текст&lt;/p&gt;</code></pre>\n\n<b>Универсальные атрибуты (есть у всех тегов):</b>\n\n<pre><code class='language-html'>&lt;!-- id — уникальный идентификатор на странице --&gt;\n&lt;div id=\"header\"&gt;...&lt;/div&gt;\n\n&lt;!-- class — класс для CSS и JavaScript --&gt;\n&lt;p class=\"text-red big\"&gt;...&lt;/p&gt;\n\n&lt;!-- style — встроенные CSS-стили --&gt;\n&lt;p style=\"color: red; font-size: 18px;\"&gt;Текст&lt;/p&gt;\n\n&lt;!-- title — всплывающая подсказка --&gt;\n&lt;abbr title=\"HyperText Markup Language\"&gt;HTML&lt;/abbr&gt;\n\n&lt;!-- lang — язык содержимого --&gt;\n&lt;p lang=\"en\"&gt;English text&lt;/p&gt;</code></pre>\n\n<b>Булевы атрибуты:</b>\n\n<pre><code class='language-html'>&lt;!-- Присутствие атрибута = включено --&gt;\n&lt;input disabled&gt;\n&lt;input required&gt;\n&lt;input checked&gt;</code></pre>\n\n💡 Значение <code>id</code> должно быть уникальным на всей странице. <code>class</code> можно использовать сколько угодно раз.\n"
      },
      {
        "order": 5,
        "title": "Ссылки",
        "text": "<b>Тег &lt;a&gt; — ссылки</b>\n\n<pre><code class='language-html'>&lt;!-- Обычная ссылка --&gt;\n&lt;a href=\"https://yandex.ru\"&gt;Перейти на Яндекс&lt;/a&gt;\n\n&lt;!-- Открыть в новой вкладке --&gt;\n&lt;a href=\"https://google.com\" target=\"_blank\"&gt;Google&lt;/a&gt;\n\n&lt;!-- Ссылка на email --&gt;\n&lt;a href=\"mailto:info@example.com\"&gt;Написать нам&lt;/a&gt;\n\n&lt;!-- Ссылка на телефон --&gt;\n&lt;a href=\"tel:+79001234567\"&gt;Позвонить&lt;/a&gt;\n\n&lt;!-- Скачать файл --&gt;\n&lt;a href=\"doc.pdf\" download&gt;Скачать PDF&lt;/a&gt;</code></pre>\n\n<b>Относительные и абсолютные пути:</b>\n\n<pre><code class='language-html'>&lt;!-- Абсолютный — полный адрес --&gt;\n&lt;a href=\"https://example.com/about\"&gt;О нас&lt;/a&gt;\n\n&lt;!-- Относительный — от текущей папки --&gt;\n&lt;a href=\"about.html\"&gt;О нас&lt;/a&gt;\n&lt;a href=\"pages/contact.html\"&gt;Контакты&lt;/a&gt;\n&lt;a href=\"../index.html\"&gt;На главную&lt;/a&gt;</code></pre>\n\n<b>Якорные ссылки (переход к разделу страницы):</b>\n\n<pre><code class='language-html'>&lt;!-- Создаём якорь --&gt;\n&lt;h2 id=\"contacts\"&gt;Контакты&lt;/h2&gt;\n\n&lt;!-- Ссылка на якорь --&gt;\n&lt;a href=\"#contacts\"&gt;Перейти к контактам&lt;/a&gt;\n\n&lt;!-- Ссылка на якорь другой страницы --&gt;\n&lt;a href=\"about.html#team\"&gt;Команда&lt;/a&gt;</code></pre>\n\n💡 Атрибут <code>target=\"_blank\"</code> открывает ссылку в новой вкладке. Хорошей практикой считается добавлять <code>rel=\"noopener\"</code> для безопасности.\n"
      },
      {
        "order": 6,
        "title": "Изображения",
        "text": "<b>Тег &lt;img&gt; — вставка изображений</b>\n\n<pre><code class='language-html'>&lt;!-- Минимальный вариант --&gt;\n&lt;img src=\"photo.jpg\" alt=\"Описание фото\"&gt;\n\n&lt;!-- С размерами --&gt;\n&lt;img src=\"logo.png\" alt=\"Логотип\" width=\"200\" height=\"100\"&gt;\n\n&lt;!-- Картинка из интернета --&gt;\n&lt;img src=\"https://example.com/img.jpg\" alt=\"Пример\"&gt;\n\n&lt;!-- Картинка-ссылка --&gt;\n&lt;a href=\"https://example.com\"&gt;\n  &lt;img src=\"banner.jpg\" alt=\"Перейти на сайт\"&gt;\n&lt;/a&gt;</code></pre>\n\n<b>Почему alt обязателен:</b>\n\n<pre><code class='language-html'>&lt;!-- alt отображается если картинка не загрузилась --&gt;\n&lt;img src=\"broken.jpg\" alt=\"Котик спит\"&gt;\n\n&lt;!-- alt читают скринридеры для незрячих --&gt;\n&lt;img src=\"chart.png\" alt=\"График продаж за 2024 год\"&gt;\n\n&lt;!-- Декоративное изображение — alt пустой --&gt;\n&lt;img src=\"divider.png\" alt=\"\"&gt;</code></pre>\n\n<b>Современный тег picture (адаптивные картинки):</b>\n\n<pre><code class='language-html'>&lt;picture&gt;\n  &lt;!-- WebP для современных браузеров --&gt;\n  &lt;source srcset=\"photo.webp\" type=\"image/webp\"&gt;\n  &lt;!-- Запасной вариант --&gt;\n  &lt;img src=\"photo.jpg\" alt=\"Фото\"&gt;\n&lt;/picture&gt;</code></pre>\n\n<b>Форматы изображений:</b>\n• <code>JPEG (.jpg)</code> — фотографии\n• <code>PNG (.png)</code> — с прозрачностью, скриншоты\n• <code>SVG (.svg)</code> — иконки, логотипы (масштабируются)\n• <code>WebP</code> — современный формат, меньше размер\n\n💡 Всегда задавай <code>width</code> и <code>height</code> — браузер заранее резервирует место и страница не «прыгает» при загрузке.\n"
      },
      {
        "order": 7,
        "title": "Списки",
        "text": "<b>Три вида списков в HTML</b>\n\n<b>1. Маркированный список &lt;ul&gt;</b>\n\n<pre><code class='language-html'>&lt;ul&gt;\n  &lt;li&gt;HTML — структура&lt;/li&gt;\n  &lt;li&gt;CSS — стили&lt;/li&gt;\n  &lt;li&gt;JavaScript — поведение&lt;/li&gt;\n&lt;/ul&gt;</code></pre>\n\n<b>2. Нумерованный список &lt;ol&gt;</b>\n\n<pre><code class='language-html'>&lt;ol&gt;\n  &lt;li&gt;Установить редактор кода&lt;/li&gt;\n  &lt;li&gt;Создать файл index.html&lt;/li&gt;\n  &lt;li&gt;Написать первый тег&lt;/li&gt;\n&lt;/ol&gt;\n\n&lt;!-- Нумерация с другого числа --&gt;\n&lt;ol start=\"5\"&gt;\n  &lt;li&gt;Пятый пункт&lt;/li&gt;\n  &lt;li&gt;Шестой пункт&lt;/li&gt;\n&lt;/ol&gt;\n\n&lt;!-- Обратная нумерация --&gt;\n&lt;ol reversed&gt;\n  &lt;li&gt;Третье место&lt;/li&gt;\n  &lt;li&gt;Второе место&lt;/li&gt;\n  &lt;li&gt;Первое место&lt;/li&gt;\n&lt;/ol&gt;</code></pre>\n\n<b>3. Список определений &lt;dl&gt;</b>\n\n<pre><code class='language-html'>&lt;dl&gt;\n  &lt;dt&gt;HTML&lt;/dt&gt;\n  &lt;dd&gt;Язык разметки веб-страниц&lt;/dd&gt;\n\n  &lt;dt&gt;CSS&lt;/dt&gt;\n  &lt;dd&gt;Язык стилей для оформления страниц&lt;/dd&gt;\n&lt;/dl&gt;</code></pre>\n\n<b>Вложенные списки:</b>\n\n<pre><code class='language-html'>&lt;ul&gt;\n  &lt;li&gt;Фрукты\n    &lt;ul&gt;\n      &lt;li&gt;Яблоко&lt;/li&gt;\n      &lt;li&gt;Банан&lt;/li&gt;\n    &lt;/ul&gt;\n  &lt;/li&gt;\n  &lt;li&gt;Овощи&lt;/li&gt;\n&lt;/ul&gt;</code></pre>\n\n💡 <code>&lt;ul&gt;</code> — когда порядок не важен. <code>&lt;ol&gt;</code> — когда порядок важен (инструкции, рейтинги). Никогда не используй список только для отступов — это неправильно.\n"
      },
      {
        "order": 8,
        "title": "Таблицы",
        "text": "<b>Таблицы в HTML</b>\n\nТаблицы используют для табличных данных: расписания, прайсы, сравнения.\n\n<b>Базовая структура:</b>\n\n<pre><code class='language-html'>&lt;table&gt;\n  &lt;thead&gt;\n    &lt;tr&gt;\n      &lt;th&gt;Язык&lt;/th&gt;\n      &lt;th&gt;Создан&lt;/th&gt;\n      &lt;th&gt;Применение&lt;/th&gt;\n    &lt;/tr&gt;\n  &lt;/thead&gt;\n  &lt;tbody&gt;\n    &lt;tr&gt;\n      &lt;td&gt;HTML&lt;/td&gt;\n      &lt;td&gt;1991&lt;/td&gt;\n      &lt;td&gt;Структура страниц&lt;/td&gt;\n    &lt;/tr&gt;\n    &lt;tr&gt;\n      &lt;td&gt;CSS&lt;/td&gt;\n      &lt;td&gt;1996&lt;/td&gt;\n      &lt;td&gt;Оформление страниц&lt;/td&gt;\n    &lt;/tr&gt;\n  &lt;/tbody&gt;\n  &lt;tfoot&gt;\n    &lt;tr&gt;\n      &lt;td colspan=\"3\"&gt;Итого: 2 языка&lt;/td&gt;\n    &lt;/tr&gt;\n  &lt;/tfoot&gt;\n&lt;/table&gt;</code></pre>\n\n<b>Объединение ячеек:</b>\n\n<pre><code class='language-html'>&lt;!-- colspan — объединить по горизонтали --&gt;\n&lt;td colspan=\"2\"&gt;Занимает 2 колонки&lt;/td&gt;\n\n&lt;!-- rowspan — объединить по вертикали --&gt;\n&lt;td rowspan=\"3\"&gt;Занимает 3 строки&lt;/td&gt;</code></pre>\n\n<b>Подпись к таблице:</b>\n\n<pre><code class='language-html'>&lt;table&gt;\n  &lt;caption&gt;Популярные языки программирования&lt;/caption&gt;\n  &lt;tr&gt;...&lt;/tr&gt;\n&lt;/table&gt;</code></pre>\n\n💡 Не используй таблицы для вёрстки (расположения блоков на странице) — это устаревший подход. Для раскладки используй CSS Flexbox или Grid.\n"
      },
      {
        "order": 9,
        "title": "Структура HTML-документа",
        "text": "<b>Обязательная структура любой HTML-страницы</b>\n\n<pre><code class='language-html'>&lt;!DOCTYPE html&gt;\n&lt;html lang=\"ru\"&gt;\n  &lt;head&gt;\n    &lt;meta charset=\"UTF-8\"&gt;\n    &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;\n    &lt;meta name=\"description\" content=\"Описание страницы для поисковиков\"&gt;\n    &lt;title&gt;Название страницы&lt;/title&gt;\n    &lt;link rel=\"stylesheet\" href=\"style.css\"&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;!-- Весь видимый контент здесь --&gt;\n    &lt;script src=\"script.js\"&gt;&lt;/script&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre>\n\n<b>Что означает каждая часть:</b>\n\n• <code>&lt;!DOCTYPE html&gt;</code> — объявление HTML5, всегда первая строка\n• <code>&lt;html lang=\"ru\"&gt;</code> — корневой элемент, язык страницы\n• <code>&lt;head&gt;</code> — невидимая служебная информация\n• <code>charset=\"UTF-8\"</code> — кодировка (поддержка кириллицы)\n• <code>viewport</code> — корректное отображение на мобильных\n• <code>&lt;title&gt;</code> — текст во вкладке браузера и в поисковой выдаче\n• <code>&lt;body&gt;</code> — всё, что видит пользователь\n\n<b>Подключение ресурсов:</b>\n\n<pre><code class='language-html'>&lt;head&gt;\n  &lt;!-- CSS --&gt;\n  &lt;link rel=\"stylesheet\" href=\"style.css\"&gt;\n\n  &lt;!-- Иконка сайта --&gt;\n  &lt;link rel=\"icon\" href=\"favicon.ico\"&gt;\n\n  &lt;!-- Шрифты Google --&gt;\n  &lt;link href=\"https://fonts.googleapis.com/css2?family=Roboto&amp;display=swap\" rel=\"stylesheet\"&gt;\n&lt;/head&gt;\n\n&lt;!-- JS лучше подключать перед &lt;/body&gt; --&gt;\n&lt;script src=\"script.js\"&gt;&lt;/script&gt;</code></pre>\n\n💡 JS подключают в конце <code>&lt;body&gt;</code>, а не в <code>&lt;head&gt;</code> — чтобы страница отображалась быстрее, не дожидаясь загрузки скрипта.\n"
      },
      {
        "order": 10,
        "title": "Семантические теги HTML5",
        "text": "<b>Семантика — теги с понятным значением</b>\n\nДо HTML5 всё делали через <code>&lt;div&gt;</code>. HTML5 добавил теги, которые описывают <i>смысл</i> содержимого.\n\n<b>Основные семантические теги:</b>\n\n<pre><code class='language-html'>&lt;header&gt;\n  &lt;!-- Шапка сайта или раздела --&gt;\n  &lt;nav&gt;\n    &lt;!-- Навигационное меню --&gt;\n    &lt;a href=\"/\"&gt;Главная&lt;/a&gt;\n    &lt;a href=\"/about\"&gt;О нас&lt;/a&gt;\n  &lt;/nav&gt;\n&lt;/header&gt;\n\n&lt;main&gt;\n  &lt;!-- Главный контент (один на странице) --&gt;\n  &lt;article&gt;\n    &lt;!-- Самостоятельная статья, пост --&gt;\n    &lt;h1&gt;Заголовок статьи&lt;/h1&gt;\n    &lt;section&gt;\n      &lt;!-- Тематический раздел внутри статьи --&gt;\n      &lt;h2&gt;Подраздел&lt;/h2&gt;\n      &lt;p&gt;Текст...&lt;/p&gt;\n    &lt;/section&gt;\n  &lt;/article&gt;\n\n  &lt;aside&gt;\n    &lt;!-- Боковая панель, виджеты --&gt;\n  &lt;/aside&gt;\n&lt;/main&gt;\n\n&lt;footer&gt;\n  &lt;!-- Подвал сайта --&gt;\n  &lt;p&gt;© 2024 Моя компания&lt;/p&gt;\n&lt;/footer&gt;</code></pre>\n\n<b>Другие полезные семантические теги:</b>\n\n<pre><code class='language-html'>&lt;!-- Выделение важного --&gt;\n&lt;strong&gt;Очень важно!&lt;/strong&gt;\n\n&lt;!-- Цитата --&gt;\n&lt;blockquote cite=\"https://source.com\"&gt;\n  Длинная цитата из источника.\n&lt;/blockquote&gt;\n\n&lt;!-- Код --&gt;\n&lt;code&gt;console.log('hello')&lt;/code&gt;\n\n&lt;!-- Время --&gt;\n&lt;time datetime=\"2024-01-15\"&gt;15 января 2024&lt;/time&gt;\n\n&lt;!-- Аббревиатура --&gt;\n&lt;abbr title=\"Cascading Style Sheets\"&gt;CSS&lt;/abbr&gt;</code></pre>\n\n💡 Семантика улучшает SEO (поисковые роботы лучше понимают страницу) и доступность (скринридеры для незрячих).\n"
      },
      {
        "order": 11,
        "title": "Формы — основы",
        "text": "<b>Формы — главный способ получить данные от пользователя</b>\n\n<pre><code class='language-html'>&lt;form action=\"/submit\" method=\"post\"&gt;\n\n  &lt;!-- Текстовое поле --&gt;\n  &lt;label for=\"name\"&gt;Имя:&lt;/label&gt;\n  &lt;input type=\"text\" id=\"name\" name=\"name\"\n         placeholder=\"Введите имя\" required&gt;\n\n  &lt;!-- Email --&gt;\n  &lt;label for=\"email\"&gt;Email:&lt;/label&gt;\n  &lt;input type=\"email\" id=\"email\" name=\"email\"\n         placeholder=\"user@example.com\"&gt;\n\n  &lt;!-- Пароль --&gt;\n  &lt;input type=\"password\" name=\"password\"\n         minlength=\"8\" placeholder=\"Минимум 8 символов\"&gt;\n\n  &lt;!-- Кнопка --&gt;\n  &lt;button type=\"submit\"&gt;Отправить&lt;/button&gt;\n  &lt;button type=\"reset\"&gt;Очистить&lt;/button&gt;\n\n&lt;/form&gt;</code></pre>\n\n<b>Атрибуты формы:</b>\n\n• <code>action</code> — куда отправить данные (URL)\n• <code>method</code> — как отправить: <code>get</code> или <code>post</code>\n\n<b>Важные атрибуты input:</b>\n\n<pre><code class='language-html'>&lt;input\n  type=\"text\"\n  name=\"username\"      &lt;!-- имя поля для сервера --&gt;\n  id=\"username\"        &lt;!-- связь с label --&gt;\n  value=\"Аня\"          &lt;!-- значение по умолчанию --&gt;\n  placeholder=\"...\"    &lt;!-- подсказка в поле --&gt;\n  required             &lt;!-- обязательное поле --&gt;\n  disabled             &lt;!-- заблокировано --&gt;\n  readonly             &lt;!-- только чтение --&gt;\n  maxlength=\"50\"       &lt;!-- максимум символов --&gt;\n  autocomplete=\"on\"    &lt;!-- автозаполнение --&gt;\n&gt;</code></pre>\n\n💡 Всегда связывай <code>&lt;label&gt;</code> с полем через <code>for=\"id\"</code> — это улучшает удобство (клик по тексту фокусирует поле).\n"
      },
      {
        "order": 12,
        "title": "Формы — типы полей",
        "text": "<b>Все типы &lt;input&gt;</b>\n\n<pre><code class='language-html'>&lt;!-- Числа --&gt;\n&lt;input type=\"number\" min=\"1\" max=\"100\" step=\"1\"&gt;\n\n&lt;!-- Диапазон (слайдер) --&gt;\n&lt;input type=\"range\" min=\"0\" max=\"100\" value=\"50\"&gt;\n\n&lt;!-- Дата и время --&gt;\n&lt;input type=\"date\"&gt;\n&lt;input type=\"time\"&gt;\n&lt;input type=\"datetime-local\"&gt;\n&lt;input type=\"month\"&gt;\n&lt;input type=\"week\"&gt;\n\n&lt;!-- Цвет --&gt;\n&lt;input type=\"color\" value=\"#ff0000\"&gt;\n\n&lt;!-- Поиск --&gt;\n&lt;input type=\"search\" placeholder=\"Поиск...\"&gt;\n\n&lt;!-- URL --&gt;\n&lt;input type=\"url\" placeholder=\"https://\"&gt;\n\n&lt;!-- Телефон --&gt;\n&lt;input type=\"tel\" placeholder=\"+7 (999) 000-00-00\"&gt;\n\n&lt;!-- Файл --&gt;\n&lt;input type=\"file\" accept=\".jpg,.png\"&gt;\n&lt;input type=\"file\" multiple accept=\"image/*\"&gt;\n\n&lt;!-- Скрытое поле --&gt;\n&lt;input type=\"hidden\" name=\"token\" value=\"abc123\"&gt;</code></pre>\n\n<b>Чекбоксы и радио-кнопки:</b>\n\n<pre><code class='language-html'>&lt;!-- Чекбоксы (несколько можно выбрать) --&gt;\n&lt;input type=\"checkbox\" id=\"html\" name=\"skills\" value=\"html\" checked&gt;\n&lt;label for=\"html\"&gt;HTML&lt;/label&gt;\n\n&lt;input type=\"checkbox\" id=\"css\" name=\"skills\" value=\"css\"&gt;\n&lt;label for=\"css\"&gt;CSS&lt;/label&gt;\n\n&lt;!-- Радио (только один из группы) --&gt;\n&lt;input type=\"radio\" id=\"male\" name=\"gender\" value=\"male\"&gt;\n&lt;label for=\"male\"&gt;Мужской&lt;/label&gt;\n\n&lt;input type=\"radio\" id=\"female\" name=\"gender\" value=\"female\"&gt;\n&lt;label for=\"female\"&gt;Женский&lt;/label&gt;</code></pre>\n\n<b>Другие элементы форм:</b>\n\n<pre><code class='language-html'>&lt;!-- Текстовая область --&gt;\n&lt;textarea name=\"message\" rows=\"5\" cols=\"40\"&gt;\n  Текст по умолчанию\n&lt;/textarea&gt;\n\n&lt;!-- Выпадающий список --&gt;\n&lt;select name=\"city\"&gt;\n  &lt;option value=\"\"&gt;Выберите город&lt;/option&gt;\n  &lt;option value=\"msk\"&gt;Москва&lt;/option&gt;\n  &lt;option value=\"spb\" selected&gt;Санкт-Петербург&lt;/option&gt;\n&lt;/select&gt;</code></pre>\n"
      },
      {
        "order": 13,
        "title": "Блочные и строчные элементы",
        "text": "<b>Два режима отображения элементов</b>\n\n<b>Блочные элементы (block):</b>\n— Занимают всю доступную ширину\n— Начинаются с новой строки\n— Можно задать width, height, margin, padding\n\n<pre><code class='language-html'>&lt;!-- Блочные теги --&gt;\n&lt;div&gt;Универсальный контейнер&lt;/div&gt;\n&lt;p&gt;Абзац&lt;/p&gt;\n&lt;h1&gt;–&lt;h6&gt; &lt;!-- заголовки --&gt;\n&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;\n&lt;table&gt;, &lt;form&gt;\n&lt;header&gt;, &lt;main&gt;, &lt;footer&gt;, &lt;section&gt;</code></pre>\n\n<b>Строчные элементы (inline):</b>\n— Занимают только нужное место\n— Идут в потоке текста\n— Нельзя задать width и height\n\n<pre><code class='language-html'>&lt;!-- Строчные теги --&gt;\n&lt;span&gt;Универсальный строчный контейнер&lt;/span&gt;\n&lt;a&gt;ссылка&lt;/a&gt;\n&lt;strong&gt;, &lt;em&gt;, &lt;b&gt;, &lt;i&gt;\n&lt;img&gt;, &lt;input&gt;, &lt;label&gt;\n&lt;code&gt;, &lt;br&gt;</code></pre>\n\n<b>div и span — главные контейнеры:</b>\n\n<pre><code class='language-html'>&lt;!-- div — блочный, для группировки секций --&gt;\n&lt;div class=\"card\"&gt;\n  &lt;h2&gt;Заголовок карточки&lt;/h2&gt;\n  &lt;p&gt;Текст карточки&lt;/p&gt;\n&lt;/div&gt;\n\n&lt;!-- span — строчный, для выделения части текста --&gt;\n&lt;p&gt;Цена: &lt;span class=\"price\"&gt;1 490 ₽&lt;/span&gt;&lt;/p&gt;</code></pre>\n\n💡 <code>&lt;div&gt;</code> не несёт смысловой нагрузки — используй его только когда нет подходящего семантического тега. Для разметки разделов страницы лучше подойдут <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>.\n"
      },
      {
        "order": 14,
        "title": "Мета-теги и SEO",
        "text": "<b>Мета-теги — информация о странице</b>\n\nМета-теги живут в <code>&lt;head&gt;</code> и невидимы пользователям, но важны для поисковиков и социальных сетей.\n\n<pre><code class='language-html'>&lt;head&gt;\n  &lt;!-- Обязательные --&gt;\n  &lt;meta charset=\"UTF-8\"&gt;\n  &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;\n  &lt;title&gt;Купить iPhone 15 в Москве | ТехноМаркет&lt;/title&gt;\n\n  &lt;!-- SEO --&gt;\n  &lt;meta name=\"description\"\n    content=\"Широкий выбор iPhone 15 по лучшим ценам. Доставка по всей России.\"&gt;\n  &lt;meta name=\"keywords\" content=\"iPhone 15, купить, Москва\"&gt;\n  &lt;meta name=\"robots\" content=\"index, follow\"&gt;\n\n  &lt;!-- Open Graph (для ВКонтакте, Telegram) --&gt;\n  &lt;meta property=\"og:title\" content=\"Купить iPhone 15\"&gt;\n  &lt;meta property=\"og:description\" content=\"Лучшие цены на iPhone 15\"&gt;\n  &lt;meta property=\"og:image\" content=\"https://site.ru/iphone.jpg\"&gt;\n  &lt;meta property=\"og:url\" content=\"https://site.ru/iphone-15\"&gt;\n  &lt;meta property=\"og:type\" content=\"website\"&gt;\n\n  &lt;!-- Иконка сайта --&gt;\n  &lt;link rel=\"icon\" type=\"image/png\" href=\"favicon.png\"&gt;\n  &lt;link rel=\"apple-touch-icon\" href=\"apple-icon.png\"&gt;\n&lt;/head&gt;</code></pre>\n\n<b>Советы по SEO-оптимизации title:</b>\n\n<pre><code class='language-html'>&lt;!-- Плохо: --&gt;\n&lt;title&gt;Главная&lt;/title&gt;\n\n&lt;!-- Хорошо: --&gt;\n&lt;title&gt;Курсы программирования онлайн | Coddy — учись кодить&lt;/title&gt;</code></pre>\n\n<b>Правила хорошего title:</b>\n• 50–60 символов\n• Ключевое слово в начале\n• Название компании/бренда в конце\n\n💡 Description не влияет напрямую на позиции в поиске, но показывается в сниппете. Хороший description повышает кликабельность.\n"
      },
      {
        "order": 15,
        "title": "Итоги курса: полная страница",
        "text": "<b>Собираем всё вместе — полная HTML-страница</b>\n\n<pre><code class='language-html'>&lt;!DOCTYPE html&gt;\n&lt;html lang=\"ru\"&gt;\n&lt;head&gt;\n  &lt;meta charset=\"UTF-8\"&gt;\n  &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;\n  &lt;meta name=\"description\" content=\"Портфолио веб-разработчика\"&gt;\n  &lt;title&gt;Иван Иванов — Frontend-разработчик&lt;/title&gt;\n  &lt;link rel=\"stylesheet\" href=\"style.css\"&gt;\n&lt;/head&gt;\n&lt;body&gt;\n\n  &lt;header&gt;\n    &lt;nav&gt;\n      &lt;a href=\"#about\"&gt;Обо мне&lt;/a&gt;\n      &lt;a href=\"#skills\"&gt;Навыки&lt;/a&gt;\n      &lt;a href=\"#contact\"&gt;Контакты&lt;/a&gt;\n    &lt;/nav&gt;\n  &lt;/header&gt;\n\n  &lt;main&gt;\n    &lt;section id=\"about\"&gt;\n      &lt;h1&gt;Привет! Я Иван&lt;/h1&gt;\n      &lt;img src=\"avatar.jpg\" alt=\"Фото Ивана\"&gt;\n      &lt;p&gt;Frontend-разработчик с &lt;strong&gt;3 годами&lt;/strong&gt; опыта.&lt;/p&gt;\n    &lt;/section&gt;\n\n    &lt;section id=\"skills\"&gt;\n      &lt;h2&gt;Мои навыки&lt;/h2&gt;\n      &lt;ul&gt;\n        &lt;li&gt;HTML5 и CSS3&lt;/li&gt;\n        &lt;li&gt;JavaScript (ES6+)&lt;/li&gt;\n        &lt;li&gt;React&lt;/li&gt;\n      &lt;/ul&gt;\n    &lt;/section&gt;\n\n    &lt;section id=\"contact\"&gt;\n      &lt;h2&gt;Связаться&lt;/h2&gt;\n      &lt;form action=\"/send\" method=\"post\"&gt;\n        &lt;label for=\"name\"&gt;Имя:&lt;/label&gt;\n        &lt;input type=\"text\" id=\"name\" name=\"name\" required&gt;\n\n        &lt;label for=\"email\"&gt;Email:&lt;/label&gt;\n        &lt;input type=\"email\" id=\"email\" name=\"email\" required&gt;\n\n        &lt;label for=\"msg\"&gt;Сообщение:&lt;/label&gt;\n        &lt;textarea id=\"msg\" name=\"message\" rows=\"5\"&gt;&lt;/textarea&gt;\n\n        &lt;button type=\"submit\"&gt;Отправить&lt;/button&gt;\n      &lt;/form&gt;\n    &lt;/section&gt;\n  &lt;/main&gt;\n\n  &lt;footer&gt;\n    &lt;p&gt;© 2024 Иван Иванов. Все права защищены.&lt;/p&gt;\n    &lt;a href=\"mailto:ivan@example.com\"&gt;ivan@example.com&lt;/a&gt;\n  &lt;/footer&gt;\n\n  &lt;script src=\"script.js\"&gt;&lt;/script&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre>\n\n<b>✅ Что ты освоил в этом курсе:</b>\n• Структура HTML-документа и DOCTYPE\n• Теги, атрибуты и вложенность\n• Заголовки, абзацы, списки, таблицы\n• Ссылки и изображения\n• Формы со всеми типами полей\n• Семантические теги HTML5\n• Мета-теги и основы SEO\n\n🚀 Следующий шаг — <b>Основы CSS</b>: научись делать страницы красивыми!\n"
      }
    ]
  },
  {
    "id": 2,
    "title": "Основы CSS",
    "description": "Основы CSS — это визуальный практический курс, который научит вас использовать каскадные таблицы стилей, чтобы превращать скучный HTML-текст в красивые, современные и ярко оформленные веб-страницы.",
    "emoji": "🎨",
    "language": "CSS",
    "difficulty": "medium",
    "xp_reward": 600,
    "coins_reward": 300,
    "lessons": [
      {
        "order": 1,
        "title": "Что такое CSS и как подключить",
        "text": "<b>CSS — язык стилей</b>\n\nCSS (Cascading Style Sheets) управляет внешним видом HTML-элементов: цветами, размерами, расположением и анимацией.\n\n<b>Три способа подключить CSS:</b>\n\n<pre><code class='language-html'>&lt;!-- 1. Внешний файл (рекомендуется) --&gt;\n&lt;link rel=\"stylesheet\" href=\"style.css\"&gt;\n\n&lt;!-- 2. Тег style в head --&gt;\n&lt;style&gt;\n  p { color: red; }\n&lt;/style&gt;\n\n&lt;!-- 3. Атрибут style (избегай) --&gt;\n&lt;p style=\"color: red;\"&gt;Текст&lt;/p&gt;</code></pre>\n\n<b>Синтаксис CSS:</b>\n\n<pre><code class='language-css'>/* Это комментарий */\n\nселектор {\n  свойство: значение;\n  другое-свойство: значение;\n}\n\np {\n  color: black;\n  font-size: 16px;\n  margin: 10px;\n}</code></pre>\n\n<b>Почему «каскадный»:</b>\nЕсли несколько правил применяются к одному элементу — побеждает более специфичное. Если специфичность одинакова — побеждает последнее по порядку.\n\n<pre><code class='language-css'>/* Оба применятся к &lt;p class=\"note\"&gt; */\np { color: black; }        /* проигрывает */\n.note { color: blue; }     /* побеждает (класс специфичнее тега) */</code></pre>\n\n💡 Внешний CSS-файл кешируется браузером — страница загружается быстрее при повторном визите.\n"
      },
      {
        "order": 2,
        "title": "Селекторы",
        "text": "<b>Селекторы — выбираем элементы для стилизации</b>\n\n<pre><code class='language-css'>/* Тег — все элементы этого типа */\np { color: gray; }\nh1 { font-size: 32px; }\n\n/* Класс — элементы с этим классом */\n.button { background: blue; }\n.error { color: red; }\n\n/* ID — единственный элемент */\n#header { height: 80px; }\n\n/* Все элементы */\n* { box-sizing: border-box; }\n\n/* Несколько селекторов */\nh1, h2, h3 { font-family: Arial; }\n\n/* Потомок (любой вложенный) */\nnav a { color: white; }\n\n/* Дочерний (прямой потомок) */\nul > li { list-style: none; }\n\n/* Сосед (следующий элемент) */\nh2 + p { font-size: 18px; }\n\n/* Все следующие */\nh2 ~ p { color: gray; }</code></pre>\n\n<b>Псевдоклассы:</b>\n\n<pre><code class='language-css'>/* При наведении мыши */\na:hover { color: red; }\nbutton:hover { opacity: 0.8; }\n\n/* Первый/последний дочерний */\nli:first-child { font-weight: bold; }\nli:last-child { border: none; }\n\n/* Чётные/нечётные */\ntr:nth-child(even) { background: #f5f5f5; }\ntr:nth-child(odd)  { background: white; }\n\n/* Активная ссылка */\na:active { color: darkred; }\na:visited { color: purple; }\n\n/* Фокус (при клике или Tab) */\ninput:focus { border-color: blue; }\n\n/* Пустой элемент */\ndiv:empty { display: none; }</code></pre>\n\n<b>Псевдоэлементы:</b>\n\n<pre><code class='language-css'>/* Первая буква */\np::first-letter { font-size: 2em; }\n\n/* Первая строка */\np::first-line { font-weight: bold; }\n\n/* До и после элемента */\n.note::before { content: \"⚠️ \"; }\n.price::after  { content: \" ₽\"; }</code></pre>\n"
      },
      {
        "order": 3,
        "title": "Цвета и фоны",
        "text": "<b>Цвета в CSS</b>\n\n<pre><code class='language-css'>/* Именованные */\ncolor: red;\ncolor: cornflowerblue;\ncolor: transparent;\n\n/* HEX — 6 или 3 символа */\ncolor: #FF5733;\ncolor: #F53;       /* краткая запись */\ncolor: #FF573380;  /* 8 символов = с прозрачностью */\n\n/* RGB и RGBA */\ncolor: rgb(255, 87, 51);\ncolor: rgba(255, 87, 51, 0.5);   /* 0 = прозрачный, 1 = непрозрачный */\n\n/* HSL — оттенок (0-360), насыщенность (%), яркость (%) */\ncolor: hsl(14, 100%, 60%);\ncolor: hsla(14, 100%, 60%, 0.8);\n\n/* Переменные */\n:root { --primary: #3498db; }\ncolor: var(--primary);</code></pre>\n\n<b>Фоны:</b>\n\n<pre><code class='language-css'>.box {\n  /* Цвет фона */\n  background-color: #f5f5f5;\n\n  /* Изображение */\n  background-image: url(\"bg.jpg\");\n\n  /* Повторение: repeat | repeat-x | repeat-y | no-repeat */\n  background-repeat: no-repeat;\n\n  /* Позиция */\n  background-position: center center;\n  background-position: top right;\n  background-position: 50% 50%;\n\n  /* Размер: cover | contain | 100px | 50% */\n  background-size: cover;\n\n  /* Прокрутка: scroll | fixed */\n  background-attachment: fixed;\n}\n\n/* Сокращённая запись */\n.hero {\n  background: url(\"hero.jpg\") no-repeat center/cover;\n}\n\n/* Градиент */\n.gradient {\n  background: linear-gradient(to right, #3498db, #9b59b6);\n  background: radial-gradient(circle, #fff, #000);\n}</code></pre>\n\n<b>Несколько фонов:</b>\n\n<pre><code class='language-css'>.layered {\n  background:\n    url(\"overlay.png\") no-repeat center,\n    linear-gradient(#2c3e50, #3498db);\n}</code></pre>\n"
      },
      {
        "order": 4,
        "title": "Шрифты и текст",
        "text": "<b>Работа со шрифтами</b>\n\n<pre><code class='language-css'>body {\n  /* Семейство шрифтов (запасные через запятую) */\n  font-family: 'Roboto', Arial, sans-serif;\n\n  /* Размер */\n  font-size: 16px;\n  font-size: 1rem;    /* rem = от размера html */\n  font-size: 1.2em;   /* em = от размера родителя */\n\n  /* Начертание */\n  font-weight: normal;  /* 400 */\n  font-weight: bold;    /* 700 */\n  font-weight: 300;     /* светлый */\n  font-weight: 900;     /* очень жирный */\n\n  /* Стиль */\n  font-style: italic;\n  font-style: normal;\n\n  /* Сокращение: style weight size/line-height family */\n  font: italic 700 18px/1.5 Arial, sans-serif;\n}</code></pre>\n\n<b>Свойства текста:</b>\n\n<pre><code class='language-css'>p {\n  color: #333;\n\n  /* Выравнивание */\n  text-align: left;\n  text-align: center;\n  text-align: right;\n  text-align: justify;\n\n  /* Межстрочный интервал */\n  line-height: 1.6;\n\n  /* Межбуквенный интервал */\n  letter-spacing: 2px;\n\n  /* Межсловный интервал */\n  word-spacing: 5px;\n\n  /* Декорация */\n  text-decoration: none;           /* убрать подчёркивание */\n  text-decoration: underline red;  /* цветное подчёркивание */\n  text-decoration: line-through;   /* зачёркивание */\n\n  /* Трансформация */\n  text-transform: uppercase;  /* ЗАГЛАВНЫЕ */\n  text-transform: lowercase;  /* строчные */\n  text-transform: capitalize; /* Каждое Слово */\n\n  /* Отступ первой строки */\n  text-indent: 2em;\n\n  /* Тень */\n  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);\n}</code></pre>\n\n<b>Google Fonts — подключение:</b>\n\n<pre><code class='language-html'>&lt;link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=swap\" rel=\"stylesheet\"&gt;</code></pre>\n\n<pre><code class='language-css'>body { font-family: 'Roboto', sans-serif; }</code></pre>\n"
      },
      {
        "order": 5,
        "title": "Блочная модель (Box Model)",
        "text": "<b>Box Model — основа CSS-вёрстки</b>\n\nКаждый элемент — прямоугольник из 4 слоёв (снаружи внутрь):\n<code>margin → border → padding → content</code>\n\n<pre><code class='language-css'>.box {\n  /* Содержимое */\n  width: 200px;\n  height: 100px;\n\n  /* Внутренний отступ (между контентом и рамкой) */\n  padding: 20px;\n  padding-top: 10px;\n  padding: 10px 20px;          /* верх/низ  лево/право */\n  padding: 10px 20px 15px 5px; /* верх право низ лево */\n\n  /* Рамка */\n  border: 2px solid #333;\n  border-width: 1px 2px;\n  border-radius: 8px;          /* скруглённые углы */\n  border-radius: 50%;           /* круг */\n\n  /* Внешний отступ (между элементами) */\n  margin: 15px;\n  margin: 0 auto;              /* центрирование блока */\n}</code></pre>\n\n<b>box-sizing — как считать ширину:</b>\n\n<pre><code class='language-css'>/* По умолчанию: width — только контент */\n/* padding и border добавляются сверху */\n.default { width: 200px; padding: 20px; }\n/* Реальная ширина = 200 + 20*2 + border = 242px */\n\n/* border-box: width включает padding и border */\n.border-box {\n  box-sizing: border-box;\n  width: 200px; padding: 20px;\n}\n/* Реальная ширина = 200px (удобно!) */\n\n/* Обычно задают для всех элементов */\n* { box-sizing: border-box; }</code></pre>\n\n<b>Схлопывание margin:</b>\n\n<pre><code class='language-css'>/* Два соседних элемента — margin не суммируется */\n.block1 { margin-bottom: 20px; }\n.block2 { margin-top: 30px; }\n/* Реальный отступ между ними = 30px (не 50px!) */</code></pre>\n\n💡 Мнемоника для порядка значений: <b>TRouBLe</b> — Top, Right, Bottom, Left.\n"
      },
      {
        "order": 6,
        "title": "Display и позиционирование",
        "text": "<b>Свойство display</b>\n\n<pre><code class='language-css'>/* Блочный — на всю ширину, новая строка */\ndiv { display: block; }\n\n/* Строчный — в потоке текста, без width/height */\nspan { display: inline; }\n\n/* Строчно-блочный — в потоке + можно задать размеры */\nimg { display: inline-block; }\n\n/* Убрать элемент (не занимает место) */\n.hidden { display: none; }\n\n/* Гибкий контейнер */\n.container { display: flex; }\n\n/* Сеточный контейнер */\n.grid { display: grid; }</code></pre>\n\n<b>Свойство position:</b>\n\n<pre><code class='language-css'>/* static — по умолчанию, в потоке документа */\np { position: static; }\n\n/* relative — смещение от своего места */\n.card {\n  position: relative;\n  top: 10px;\n  left: 5px;\n}\n\n/* absolute — позиционируется относительно\n   ближайшего предка с position != static */\n.badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n/* fixed — прибит к экрану, не прокручивается */\n.navbar {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n}\n\n/* sticky — статический пока не достигнет края */\n.table-header {\n  position: sticky;\n  top: 0;\n}</code></pre>\n\n<b>z-index — порядок по глубине:</b>\n\n<pre><code class='language-css'>.modal   { z-index: 1000; }\n.overlay { z-index: 999; }\n.navbar  { z-index: 100; }\n/* Большее значение = ближе к пользователю */</code></pre>\n\n<b>overflow — что делать с переполнением:</b>\n\n<pre><code class='language-css'>.box {\n  overflow: visible;  /* по умолчанию, выходит за рамки */\n  overflow: hidden;   /* обрезать */\n  overflow: scroll;   /* всегда показывать скроллбар */\n  overflow: auto;     /* скроллбар только если нужен */\n}</code></pre>\n"
      },
      {
        "order": 7,
        "title": "Flexbox — основы",
        "text": "<b>Flexbox — гибкая раскладка</b>\n\nFlexbox работает в одном измерении: строка или колонка.\n\n<pre><code class='language-css'>.container {\n  display: flex;\n\n  /* Ось: row (→) | row-reverse (←) | column (↓) | column-reverse (↑) */\n  flex-direction: row;\n\n  /* Выравнивание по главной оси (по умолчанию горизонталь) */\n  justify-content: flex-start;   /* ←●●● */\n  justify-content: center;       /* ←●●●→ */\n  justify-content: flex-end;     /* ●●●→ */\n  justify-content: space-between; /* ●  ●  ● */\n  justify-content: space-around;  /*  ● ● ●  */\n  justify-content: space-evenly;  /* = = = = */\n\n  /* Выравнивание по поперечной оси (вертикаль) */\n  align-items: stretch;     /* растянуть (по умолчанию) */\n  align-items: center;      /* по центру */\n  align-items: flex-start;  /* прижать к началу */\n  align-items: flex-end;    /* прижать к концу */\n  align-items: baseline;    /* по базовой линии текста */\n\n  /* Перенос */\n  flex-wrap: nowrap;   /* в одну строку (по умолчанию) */\n  flex-wrap: wrap;     /* переносить */\n\n  /* Отступы между элементами */\n  gap: 20px;\n  gap: 10px 20px; /* строки / столбцы */\n}</code></pre>\n\n<b>Свойства flex-элементов:</b>\n\n<pre><code class='language-css'>.item {\n  /* flex-grow: занимать свободное место */\n  flex-grow: 1;   /* взять всё свободное */\n  flex-grow: 2;   /* взять вдвое больше */\n\n  /* flex-shrink: как сжиматься */\n  flex-shrink: 0; /* не сжимать */\n\n  /* flex-basis: начальный размер */\n  flex-basis: 200px;\n  flex-basis: auto;\n\n  /* Сокращение: grow shrink basis */\n  flex: 1 1 auto;\n  flex: 1;        /* = 1 1 0 */\n  flex: none;     /* = 0 0 auto */\n\n  /* Выровнять только этот элемент */\n  align-self: center;\n\n  /* Изменить порядок */\n  order: 2;\n}</code></pre>\n"
      },
      {
        "order": 8,
        "title": "Flexbox — практика",
        "text": "<b>Типовые задачи Flexbox</b>\n\n<b>Горизонтальное меню:</b>\n\n<pre><code class='language-css'>nav {\n  display: flex;\n  gap: 24px;\n  align-items: center;\n}\n\nnav a {\n  color: white;\n  text-decoration: none;\n}\n\n/* Логотип слева, меню справа */\nnav .logo { margin-right: auto; }</code></pre>\n\n<b>Карточки в ряд с переносом:</b>\n\n<pre><code class='language-css'>.cards {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n}\n\n.card {\n  flex: 0 0 280px; /* фиксированная ширина */\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}</code></pre>\n\n<b>Вертикальное и горизонтальное центрирование:</b>\n\n<pre><code class='language-css'>.centered {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh; /* вся высота экрана */\n}</code></pre>\n\n<b>Footer прилипает к низу:</b>\n\n<pre><code class='language-css'>body {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\nmain { flex: 1; } /* main занимает всё свободное место */\nfooter { /* автоматически внизу */ }</code></pre>\n\n<b>Двухколоночный макет:</b>\n\n<pre><code class='language-css'>.layout {\n  display: flex;\n  gap: 30px;\n}\n\n.sidebar { flex: 0 0 250px; }  /* фиксированная */\n.content  { flex: 1; }          /* остаток */</code></pre>\n"
      },
      {
        "order": 9,
        "title": "CSS Grid",
        "text": "<b>CSS Grid — двумерная раскладка</b>\n\nGrid работает в двух измерениях одновременно: строки и столбцы.\n\n<pre><code class='language-css'>.grid {\n  display: grid;\n\n  /* Определяем столбцы */\n  grid-template-columns: 200px 1fr 1fr;\n  /* 1fr = одна доля свободного пространства */\n\n  /* 3 равных столбца */\n  grid-template-columns: repeat(3, 1fr);\n\n  /* Автоматическое количество колонок */\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n\n  /* Строки */\n  grid-template-rows: 80px auto 60px;\n\n  /* Отступы */\n  gap: 20px;\n  column-gap: 30px;\n  row-gap: 20px;\n}</code></pre>\n\n<b>Размещение элементов:</b>\n\n<pre><code class='language-css\">/* Номера линий (начинаются с 1) */\n.header {\n  grid-column: 1 / 4;   /* от 1-й до 4-й линии = 3 колонки */\n  grid-row: 1;\n}\n\n.sidebar { grid-column: 1; grid-row: 2; }\n.main    { grid-column: 2 / 4; grid-row: 2; }\n.footer  { grid-column: 1 / 4; grid-row: 3; }\n\n/* Сокращение */\n.hero { grid-area: 1 / 1 / 2 / 4; } /* row-start/col-start/row-end/col-end */</code></pre>\n\n<b>Именованные области:</b>\n\n<pre><code class='language-css'>.layout {\n  display: grid;\n  grid-template-areas:\n    \"header header header\"\n    \"sidebar main main\"\n    \"footer footer footer\";\n  grid-template-columns: 200px 1fr 1fr;\n  grid-template-rows: 80px auto 60px;\n}\n\n.header  { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main    { grid-area: main; }\n.footer  { grid-area: footer; }</code></pre>\n\n💡 Выбирай Flexbox для одного направления (меню, карточки в ряд), Grid — для сложных двумерных макетов (вся страница, галереи).\n"
      },
      {
        "order": 10,
        "title": "Адаптивность и медиазапросы",
        "text": "<b>Адаптивная вёрстка — один сайт на всех устройствах</b>\n\n<b>Единицы измерения:</b>\n\n<pre><code class='language-css'>/* Абсолютные */\nwidth: 300px;\n\n/* Относительные */\nwidth: 50%;          /* от родителя */\nwidth: 100vw;        /* ширина viewport */\nheight: 100vh;       /* высота viewport */\nfont-size: 1rem;     /* от font-size :root (обычно 16px) */\nfont-size: 1.5em;    /* от font-size родителя */\nwidth: clamp(200px, 50%, 800px); /* мин, идеал, макс */</code></pre>\n\n<b>Медиазапросы:</b>\n\n<pre><code class='language-css'>/* Mobile First: сначала мобильные, потом расширяем */\n\n/* Базовые стили — для мобильных */\n.container {\n  padding: 16px;\n  flex-direction: column;\n}\n\n/* Планшет — от 768px */\n@media (min-width: 768px) {\n  .container {\n    padding: 24px;\n    flex-direction: row;\n  }\n}\n\n/* Десктоп — от 1200px */\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 40px;\n  }\n}\n\n/* Desktop First (альтернатива) */\n@media (max-width: 767px) { /* только мобильные */ }\n\n/* Ориентация */\n@media (orientation: landscape) { }\n\n/* Тёмная тема */\n@media (prefers-color-scheme: dark) {\n  body { background: #1a1a1a; color: #fff; }\n}\n\n/* Печать */\n@media print {\n  nav, footer { display: none; }\n}</code></pre>\n\n<b>Стандартные брейкпоинты:</b>\n• 480px — маленькие телефоны\n• 768px — планшеты\n• 1024px — небольшие ноутбуки\n• 1200px — десктоп\n• 1440px — широкие экраны\n"
      },
      {
        "order": 11,
        "title": "CSS-переменные и наследование",
        "text": "<b>CSS Custom Properties (переменные)</b>\n\n<pre><code class='language-css'>/* Объявление в :root = глобальные переменные */\n:root {\n  --color-primary:    #3498db;\n  --color-secondary:  #2ecc71;\n  --color-danger:     #e74c3c;\n  --color-text:       #333;\n  --color-bg:         #fff;\n\n  --font-main:        'Roboto', sans-serif;\n  --font-size-base:   16px;\n  --font-size-large:  20px;\n\n  --spacing-sm:  8px;\n  --spacing-md:  16px;\n  --spacing-lg:  32px;\n\n  --radius:      8px;\n  --shadow:      0 2px 8px rgba(0,0,0,0.1);\n  --transition:  0.3s ease;\n}\n\n/* Использование */\n.button {\n  background: var(--color-primary);\n  padding: var(--spacing-sm) var(--spacing-md);\n  border-radius: var(--radius);\n  transition: var(--transition);\n}\n\n/* Переопределение в компоненте */\n.card {\n  --radius: 12px;  /* только для этой карточки */\n  border-radius: var(--radius);\n}\n\n/* Запасное значение */\ncolor: var(--color-accent, orange);</code></pre>\n\n<b>Тёмная тема через переменные:</b>\n\n<pre><code class='language-css'>:root {\n  --bg: #fff;\n  --text: #333;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --bg: #1a1a1a;\n    --text: #f5f5f5;\n  }\n}\n\nbody {\n  background: var(--bg);\n  color: var(--text);\n}</code></pre>\n\n<b>Наследование:</b>\n\n<pre><code class='language-css'>/* Наследуются: color, font-*, line-height, text-* */\nbody { color: #333; }  /* все дочерние получат этот цвет */\n\n/* НЕ наследуются: background, border, margin, padding */\n\n/* Принудительно унаследовать */\n.child { color: inherit; }\n\n/* Сбросить к изначальному */\n.reset { color: initial; }\n\n/* Использовать значение из :root */\n.use-root { color: unset; }</code></pre>\n"
      },
      {
        "order": 12,
        "title": "Псевдоклассы и псевдоэлементы",
        "text": "<b>Псевдоклассы — состояния элементов</b>\n\n<pre><code class='language-css'>/* Ссылки */\na:link    { color: blue; }    /* не посещённая */\na:visited { color: purple; }  /* посещённая */\na:hover   { color: red; }     /* при наведении */\na:active  { color: darkred; } /* при нажатии */\n\n/* Формы */\ninput:focus        { outline: 2px solid blue; }\ninput:disabled     { opacity: 0.5; }\ninput:required     { border-color: red; }\ninput:valid        { border-color: green; }\ninput:invalid      { border-color: red; }\ninput:placeholder-shown { border-color: gray; }\n\n/* Структурные */\nli:first-child     { color: gold; }\nli:last-child      { border: none; }\nli:nth-child(2)    { color: red; }     /* 2-й */\nli:nth-child(2n)   { background: #f5f5f5; } /* чётные */\nli:nth-child(3n+1) { font-weight: bold; }   /* 1,4,7... */\nli:nth-last-child(1) { margin-bottom: 0; } /* предпоследний */\n\np:only-child { font-size: 20px; }  /* единственный потомок */\ndiv:empty    { display: none; }    /* пустой элемент */\np:not(.note) { color: gray; }      /* НЕ этот класс */</code></pre>\n\n<b>Псевдоэлементы — добавляем виртуальные элементы</b>\n\n<pre><code class='language-css'>/* ::before и ::after — контент до/после */\n.quote::before {\n  content: \"«\";\n  color: gray;\n  font-size: 1.5em;\n}\n.quote::after {\n  content: \"»\";\n}\n\n/* Декоративный элемент */\n.item::before {\n  content: \"\";          /* пустой, но занимает место */\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  background: var(--color-primary);\n  border-radius: 50%;\n  margin-right: 8px;\n}\n\n.hero::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: rgba(0,0,0,0.5);\n}\n\n/* Первая буква абзаца */\np::first-letter {\n  font-size: 2em;\n  float: left;\n  line-height: 1;\n}\n\n/* Выделение текста */\n::selection {\n  background: var(--color-primary);\n  color: white;\n}</code></pre>\n"
      },
      {
        "order": 13,
        "title": "Переходы и анимации",
        "text": "<b>CSS Transitions — плавные переходы</b>\n\n<pre><code class='language-css'>.button {\n  background: blue;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 8px;\n\n  /* transition: свойство длительность функция задержка */\n  transition: background 0.3s ease;\n  transition: all 0.3s ease;\n  transition:\n    background 0.3s ease,\n    transform 0.2s ease;\n}\n\n.button:hover {\n  background: darkblue;\n  transform: scale(1.05);\n}\n\n/* Функции времени */\ntransition-timing-function: ease;         /* быстро → медленно */\ntransition-timing-function: linear;       /* равномерно */\ntransition-timing-function: ease-in;      /* медленно → быстро */\ntransition-timing-function: ease-out;     /* быстро → медленно */\ntransition-timing-function: ease-in-out;  /* медленно в начале и конце */</code></pre>\n\n<b>CSS Animations — анимации по ключевым кадрам</b>\n\n<pre><code class='language-css'>/* 1. Объявить анимацию */\n@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(-20px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n@keyframes pulse {\n  0%   { transform: scale(1); }\n  50%  { transform: scale(1.05); }\n  100% { transform: scale(1); }\n}\n\n@keyframes spin {\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n}\n\n/* 2. Применить */\n.modal {\n  animation: fadeIn 0.3s ease forwards;\n}\n\n.loader {\n  animation: spin 1s linear infinite;\n}\n\n.card {\n  animation: pulse 2s ease-in-out infinite;\n}\n\n/* Параметры */\nanimation-name: fadeIn;\nanimation-duration: 0.5s;\nanimation-timing-function: ease;\nanimation-delay: 0.2s;\nanimation-iteration-count: infinite; /* 1, 2, infinite */\nanimation-direction: alternate;      /* обратная анимация */\nanimation-fill-mode: forwards;       /* оставаться в конечном состоянии */</code></pre>\n\n<b>Трансформации:</b>\n\n<pre><code class='language-css'>.element {\n  transform: translateX(20px);\n  transform: translateY(-50%);\n  transform: translate(10px, 20px);\n  transform: scale(1.5);\n  transform: rotate(45deg);\n  transform: skew(10deg);\n  transform: rotate(45deg) scale(1.2) translateX(10px);\n}</code></pre>\n"
      },
      {
        "order": 14,
        "title": "Специфичность и каскад",
        "text": "<b>Специфичность — кто побеждает при конфликте</b>\n\nКаждый селектор имеет «вес». Побеждает тот, у кого больше.\n\n<b>Шкала специфичности (0-0-0-0):</b>\n\n<pre><code class='language-css'>/* style=\"\" атрибут: 1-0-0-0 (1000 очков) */\n&lt;p style=\"color:red\"&gt;\n\n/* ID: 0-1-0-0 (100 очков) */\n#header { color: blue; }\n\n/* Класс, псевдокласс, атрибут: 0-0-1-0 (10 очков) */\n.title { }\na:hover { }\n[type=\"text\"] { }\n\n/* Тег, псевдоэлемент: 0-0-0-1 (1 очко) */\np { }\n::before { }\n\n/* * — 0 очков */\n* { }</code></pre>\n\n<b>Примеры расчёта:</b>\n\n<pre><code class='language-css'>p                   /* 0-0-0-1 */\n.title              /* 0-0-1-0 */\np.title             /* 0-0-1-1 */\n#header .title      /* 0-1-1-0 */\n#header p.title:hover /* 0-1-2-1 */</code></pre>\n\n<b>!important — ядерная кнопка:</b>\n\n<pre><code class='language-css'>.button { color: blue !important; }\n/* Побеждает всех, но ломает каскад */\n/* Используй только в крайнем случае */</code></pre>\n\n<b>Порядок применения стилей:</b>\n\n1. Стили браузера по умолчанию\n2. Внешние стили (<code>link</code>)\n3. Внутренние (<code>style</code>)\n4. Inline (<code>style=\"\"</code>)\n5. <code>!important</code>\n\n<b>CSS Reset и Normalize:</b>\n\n<pre><code class='language-css'>/* Минимальный сброс */\n*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nul { list-style: none; }\na  { text-decoration: none; color: inherit; }\nimg { max-width: 100%; display: block; }</code></pre>\n"
      },
      {
        "order": 15,
        "title": "Итоги курса: современный CSS",
        "text": "<b>Полный CSS-шаблон современного сайта</b>\n\n<pre><code class='language-css'>/* ─── Переменные ─────────────────────────────── */\n:root {\n  --primary:    #3498db;\n  --dark:       #2c3e50;\n  --light:      #ecf0f1;\n  --text:       #333;\n  --radius:     8px;\n  --shadow:     0 4px 16px rgba(0,0,0,0.1);\n  --transition: 0.3s ease;\n}\n\n/* ─── Сброс ──────────────────────────────────── */\n*, *::before, *::after { box-sizing: border-box; }\nbody {\n  margin: 0;\n  font-family: 'Roboto', Arial, sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n  color: var(--text);\n}\nimg { max-width: 100%; display: block; }\n\n/* ─── Шапка ──────────────────────────────────── */\nheader {\n  background: var(--dark);\n  padding: 16px 24px;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: var(--shadow);\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  max-width: 1200px;\n  margin: 0 auto;\n  gap: 24px;\n}\n\nnav .logo   { margin-right: auto; color: white; font-weight: 700; }\nnav a       { color: rgba(255,255,255,0.8); text-decoration: none; transition: var(--transition); }\nnav a:hover { color: white; }\n\n/* ─── Основной контент ───────────────────────── */\nmain {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 40px 24px;\n}\n\n.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n  margin-top: 32px;\n}\n\n.card {\n  background: white;\n  border-radius: var(--radius);\n  padding: 24px;\n  box-shadow: var(--shadow);\n  transition: transform var(--transition);\n}\n.card:hover { transform: translateY(-4px); }\n\n/* ─── Кнопки ─────────────────────────────────── */\n.btn {\n  display: inline-block;\n  padding: 12px 24px;\n  border-radius: var(--radius);\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  transition: var(--transition);\n  text-decoration: none;\n}\n.btn-primary { background: var(--primary); color: white; }\n.btn-primary:hover { background: #2980b9; transform: scale(1.02); }\n\n/* ─── Адаптивность ───────────────────────────── */\n@media (max-width: 768px) {\n  nav { flex-wrap: wrap; }\n  main { padding: 20px 16px; }\n  .cards { grid-template-columns: 1fr; }\n}</code></pre>\n\n<b>✅ Что ты освоил в этом курсе:</b>\n• Подключение CSS и синтаксис\n• Все виды селекторов и специфичность\n• Цвета, шрифты, блочная модель\n• Flexbox и CSS Grid\n• Адаптивность и медиазапросы\n• Переменные, переходы, анимации\n\n🚀 Следующий шаг — <b>JavaScript</b>: добавь интерактивность!\n"
      }
    ]
  },
  {
    "id": 3,
    "title": "Селекторы",
    "description": "Селекторы HTML/CSS — это практический курс, который научит вас точно указывать браузеру, к каким именно элементам на странице нужно применить стили, используя классы, идентификаторы и продвинутые комбинации тегов.",
    "emoji": "🎛️",
    "language": "HTML CSS",
    "difficulty": "hard",
    "xp_reward": 700,
    "coins_reward": 350,
    "lessons": [
      {
        "order": 1,
        "title": "Что такое JavaScript",
        "text": "<b>JavaScript — язык программирования браузера</b>\n\nJS делает сайты интерактивными: реагирует на действия пользователя, меняет контент, отправляет запросы без перезагрузки страницы.\n\n<b>Где выполняется JavaScript:</b>\n• В браузере — любой сайт\n• На сервере — Node.js\n• В мобильных приложениях — React Native\n\n<b>Подключение скриптов:</b>\n\n<pre><code class='language-html'>&lt;!-- Внутри HTML --&gt;\n&lt;script&gt;\n  console.log(\"Привет из скрипта!\");\n&lt;/script&gt;\n\n&lt;!-- Внешний файл (рекомендуется) --&gt;\n&lt;script src=\"script.js\"&gt;&lt;/script&gt;\n\n&lt;!-- defer — выполнить после загрузки HTML --&gt;\n&lt;script src=\"script.js\" defer&gt;&lt;/script&gt;\n\n&lt;!-- async — выполнить как только загрузится --&gt;\n&lt;script src=\"analytics.js\" async&gt;&lt;/script&gt;</code></pre>\n\n<b>Первые шаги:</b>\n\n<pre><code class='language-javascript'>// Вывод в консоль браузера (F12 → Console)\nconsole.log(\"Привет, мир!\");\nconsole.log(42, true, [1,2,3]);\nconsole.error(\"Ошибка!\");\nconsole.warn(\"Предупреждение\");\nconsole.table([{name: \"Анна\", age: 25}]);\n\n// Диалоговые окна браузера\nalert(\"Сообщение\");\nconst name = prompt(\"Как тебя зовут?\");\nconst ok = confirm(\"Уверен?\"); // true или false</code></pre>\n\n💡 Всегда подключай JS перед <code>&lt;/body&gt;</code> или используй атрибут <code>defer</code>, чтобы HTML загружался раньше скрипта.\n"
      },
      {
        "order": 2,
        "title": "Переменные и типы данных",
        "text": "<b>Переменные — хранилища данных</b>\n\n<pre><code class='language-javascript'>// const — нельзя переназначить (используй по умолчанию)\nconst name = \"Анна\";\nconst age  = 25;\nconst PI   = 3.14159;\n\n// let — можно переназначить\nlet score = 0;\nscore = 100;         // OK\nscore += 50;         // score = 150\n\n// var — устаревший, не используй\nvar old = \"избегай\";</code></pre>\n\n<b>Типы данных:</b>\n\n<pre><code class='language-javascript'>// string — строка\nconst str1 = \"двойные кавычки\";\nconst str2 = 'одинарные кавычки';\nconst str3 = `шаблонная строка: ${name}, ${2 + 2}`;\nconst multiline = `Строка 1\nСтрока 2`;\n\n// number — число (целые и дробные)\nconst int   = 42;\nconst float = 3.14;\nconst neg   = -100;\nconst inf   = Infinity;\nconst nan   = NaN;      // Not a Number\n\n// boolean — логический\nconst yes = true;\nconst no  = false;\n\n// null — намеренное отсутствие значения\nconst empty = null;\n\n// undefined — значение не задано\nlet notDefined;\nconsole.log(notDefined); // undefined\n\n// object — объект\nconst user = { name: \"Анна\", age: 25 };\n\n// array — массив (тоже объект)\nconst colors = [\"red\", \"green\", \"blue\"];\n\n// symbol — уникальный идентификатор\nconst id = Symbol(\"id\");</code></pre>\n\n<b>Проверка типов:</b>\n\n<pre><code class='language-javascript'>typeof \"текст\"   // \"string\"\ntypeof 42        // \"number\"\ntypeof true      // \"boolean\"\ntypeof undefined // \"undefined\"\ntypeof null      // \"object\" (историческая ошибка!)\ntypeof []        // \"object\"\ntypeof {}        // \"object\"\n\n// Правильная проверка массива\nArray.isArray([1, 2, 3])  // true\n\n// Проверка на null\nvalue === null     // true если null</code></pre>\n"
      },
      {
        "order": 3,
        "title": "Операторы и условия",
        "text": "<b>Операторы сравнения</b>\n\n<pre><code class='language-javascript'>// == сравнивает значение (с приведением типов) — ИЗБЕГАЙ\n5 == \"5\"   // true (строку привели к числу)\n\n// === сравнивает значение И тип — ИСПОЛЬЗУЙ\n5 === \"5\"  // false\n5 === 5    // true\nnull === undefined // false\n\n// Неравенство\n5 != \"5\"  // false (с приведением)\n5 !== \"5\" // true  (строго)\n\n// Числовые\n5 > 3    // true\n5 >= 5   // true\n3 < 5    // true</code></pre>\n\n<b>Логические операторы:</b>\n\n<pre><code class='language-javascript'>true && true   // true  (И)\ntrue && false  // false\ntrue || false  // true  (ИЛИ)\nfalse || false // false\n!true          // false (НЕ)\n\n// Short-circuit (ленивые вычисления)\nfalse && doSomething()  // doSomething НЕ вызовется\ntrue  || doSomething()  // doSomething НЕ вызовется\n\n// Nullish coalescing — запасное значение при null/undefined\nconst val = null ?? \"по умолчанию\"; // \"по умолчанию\"\nconst x   = 0    ?? \"по умолчанию\"; // 0 (не null!)\n\n// Optional chaining — безопасный доступ\nconst city = user?.address?.city; // не упадёт если нет address</code></pre>\n\n<b>Условные операторы:</b>\n\n<pre><code class='language-javascript'>const age = 20;\n\n// if / else if / else\nif (age >= 18) {\n  console.log(\"Совершеннолетний\");\n} else if (age >= 14) {\n  console.log(\"Подросток\");\n} else {\n  console.log(\"Ребёнок\");\n}\n\n// Тернарный оператор\nconst status = age >= 18 ? \"взрослый\" : \"ребёнок\";\n\n// Switch\nconst day = \"пн\";\nswitch (day) {\n  case \"пн\":\n  case \"вт\":\n    console.log(\"Начало недели\"); break;\n  case \"пт\":\n    console.log(\"Пятница!\"); break;\n  default:\n    console.log(\"Другой день\");\n}</code></pre>\n"
      },
      {
        "order": 4,
        "title": "Циклы",
        "text": "<b>Циклы — повторяем действия</b>\n\n<pre><code class='language-javascript'>// for — классический цикл со счётчиком\nfor (let i = 0; i < 5; i++) {\n  console.log(i); // 0 1 2 3 4\n}\n\n// Обратный отсчёт\nfor (let i = 5; i > 0; i--) {\n  console.log(i); // 5 4 3 2 1\n}\n\n// while — пока условие истинно\nlet count = 0;\nwhile (count < 3) {\n  console.log(count++); // 0 1 2\n}\n\n// do...while — выполнится хотя бы раз\nlet x = 10;\ndo {\n  console.log(x); // 10\n  x++;\n} while (x < 5);\n\n// for...of — по элементам массива/строки\nconst fruits = [\"яблоко\", \"банан\", \"груша\"];\nfor (const fruit of fruits) {\n  console.log(fruit);\n}\n\n// for...in — по ключам объекта\nconst user = { name: \"Анна\", age: 25 };\nfor (const key in user) {\n  console.log(key, user[key]);\n  // name Анна\n  // age  25\n}</code></pre>\n\n<b>Управление циклом:</b>\n\n<pre><code class='language-javascript'>// break — прервать цикл\nfor (let i = 0; i < 10; i++) {\n  if (i === 5) break;\n  console.log(i); // 0 1 2 3 4\n}\n\n// continue — перейти к следующей итерации\nfor (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  console.log(i); // 0 1 3 4\n}\n\n// Метки (редко нужны)\nouter: for (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (j === 1) break outer; // выйти из внешнего\n  }\n}</code></pre>\n"
      },
      {
        "order": 5,
        "title": "Функции",
        "text": "<b>Функции — многократно используемый код</b>\n\n<pre><code class='language-javascript'>// Объявление функции (hoisting — доступна до объявления)\nfunction greet(name) {\n  return `Привет, ${name}!`;\n}\n\n// Функциональное выражение\nconst greet = function(name) {\n  return `Привет, ${name}!`;\n};\n\n// Стрелочная функция (arrow function)\nconst greet = (name) => `Привет, ${name}!`;\n\n// Без параметров\nconst sayHi  = () => \"Привет!\";\n\n// С несколькими строками\nconst add = (a, b) => {\n  const result = a + b;\n  return result;\n};</code></pre>\n\n<b>Параметры функций:</b>\n\n<pre><code class='language-javascript'>// Значения по умолчанию\nfunction greet(name = \"Гость\") {\n  return `Привет, ${name}!`;\n}\ngreet();        // \"Привет, Гость!\"\ngreet(\"Анна\"); // \"Привет, Анна!\"\n\n// Деструктуризация в параметрах\nfunction printUser({ name, age }) {\n  console.log(`${name}, ${age} лет`);\n}\nprintUser({ name: \"Анна\", age: 25 });\n\n// rest-параметры\nfunction sum(...numbers) {\n  return numbers.reduce((total, n) => total + n, 0);\n}\nsum(1, 2, 3, 4); // 10</code></pre>\n\n<b>Замыкания (closures):</b>\n\n<pre><code class='language-javascript'>function makeCounter() {\n  let count = 0;          // переменная в замыкании\n  return () => ++count;   // функция имеет доступ к count\n}\n\nconst counter = makeCounter();\ncounter(); // 1\ncounter(); // 2\ncounter(); // 3\n\n// Создание приватных данных\nfunction createUser(name) {\n  let _age = 0;                           // приватное\n  return {\n    getName: () => name,\n    getAge:  () => _age,\n    setAge:  (age) => { _age = age; },\n  };\n}</code></pre>\n"
      },
      {
        "order": 6,
        "title": "Массивы",
        "text": "<b>Массивы — упорядоченные коллекции данных</b>\n\n<pre><code class='language-javascript'>// Создание\nconst arr = [1, 2, 3];\nconst arr2 = new Array(3);        // [empty x 3]\nconst arr3 = Array.from(\"abc\");   // ['a','b','c']\n\n// Доступ\narr[0]     // 1 (первый)\narr.at(-1) // 3 (последний)</code></pre>\n\n<b>Методы — изменяют оригинал:</b>\n\n<pre><code class='language-javascript'>const a = [1, 2, 3];\n\na.push(4);        // добавить в конец  → [1,2,3,4]\na.pop();          // убрать из конца   → [1,2,3]\na.unshift(0);     // добавить в начало → [0,1,2,3]\na.shift();        // убрать из начала  → [1,2,3]\na.reverse();      // перевернуть       → [3,2,1]\na.sort();         // сортировать       → [1,2,3]\na.sort((x, y) => y - x); // по убыванию\n\n// splice — удалить/вставить\na.splice(1, 1);       // удалить 1 элемент с индекса 1\na.splice(1, 0, 10);   // вставить 10 после индекса 1</code></pre>\n\n<b>Методы — возвращают новый массив:</b>\n\n<pre><code class='language-javascript'>const nums = [1, 2, 3, 4, 5];\n\n// map — преобразовать каждый\nnums.map(n => n * 2)          // [2,4,6,8,10]\n\n// filter — отфильтровать\nnums.filter(n => n % 2 === 0) // [2,4]\n\n// reduce — свернуть в одно значение\nnums.reduce((sum, n) => sum + n, 0) // 15\n\n// find — найти первый\nnums.find(n => n > 3)    // 4\nnums.findIndex(n => n > 3) // 3\n\n// some / every\nnums.some(n => n > 4)   // true (хоть один)\nnums.every(n => n > 0)  // true (все)\n\n// includes\nnums.includes(3)  // true\n\n// flat / flatMap\n[[1,2],[3,4]].flat()  // [1,2,3,4]\n\n// slice — выреза\nnums.slice(1, 3)  // [2,3]\n\n// concat / spread\n[...nums, 6, 7]   // [1,2,3,4,5,6,7]\n\n// join → строка\nnums.join(\", \")   // \"1, 2, 3, 4, 5\"</code></pre>\n"
      },
      {
        "order": 7,
        "title": "Объекты",
        "text": "<b>Объекты — наборы свойств</b>\n\n<pre><code class='language-javascript'>// Создание объекта\nconst user = {\n  name: \"Анна\",\n  age: 25,\n  isAdmin: false,\n  address: {\n    city: \"Москва\",\n    street: \"Ленина, 1\",\n  },\n  greet() {            // метод объекта\n    return `Привет, я ${this.name}`;\n  },\n};\n\n// Доступ к свойствам\nuser.name          // \"Анна\"\nuser[\"name\"]       // \"Анна\"\nuser.address.city  // \"Москва\"\n\n// Изменение\nuser.age = 26;\nuser[\"email\"] = \"anna@mail.ru\";\n\n// Удаление\ndelete user.isAdmin;\n\n// Проверка наличия свойства\n\"name\" in user          // true\nuser.hasOwnProperty(\"name\") // true</code></pre>\n\n<b>Деструктуризация:</b>\n\n<pre><code class='language-javascript'>const { name, age } = user;\nconst { name: userName } = user; // другое имя переменной\nconst { name, age = 18 } = user; // значение по умолчанию\n\n// Вложенная\nconst { address: { city } } = user;\n\n// В функции\nfunction show({ name, age }) {\n  console.log(name, age);\n}</code></pre>\n\n<b>Spread и Object methods:</b>\n\n<pre><code class='language-javascript'>// Копия объекта\nconst copy = { ...user };\n\n// Слияние объектов\nconst extended = { ...user, role: \"admin\" };\n\n// Object.keys / values / entries\nObject.keys(user)    // [\"name\", \"age\", ...]\nObject.values(user)  // [\"Анна\", 25, ...]\nObject.entries(user) // [[\"name\",\"Анна\"], ...]\n\n// Перебор\nfor (const [key, val] of Object.entries(user)) {\n  console.log(key, val);\n}\n\n// Object.assign\nconst target = Object.assign({}, user, { role: \"vip\" });\n\n// Заморозка (нельзя менять)\nObject.freeze(user);</code></pre>\n"
      },
      {
        "order": 8,
        "title": "DOM — поиск элементов",
        "text": "<b>DOM (Document Object Model) — дерево HTML в JavaScript</b>\n\n<pre><code class='language-javascript'>// querySelector — первый совпадающий элемент\nconst btn  = document.querySelector(\".button\");\nconst h1   = document.querySelector(\"h1\");\nconst nav  = document.querySelector(\"#nav a\");\n\n// querySelectorAll — все совпадающие (NodeList)\nconst btns  = document.querySelectorAll(\".button\");\nconst items = document.querySelectorAll(\"li\");\n\n// Перебор NodeList\nbtns.forEach(btn => console.log(btn));\n[...btns].map(btn => btn.textContent); // в массив\n\n// Устаревшие, но работают\ndocument.getElementById(\"header\");\ndocument.getElementsByClassName(\"card\"); // HTMLCollection\ndocument.getElementsByTagName(\"p\");\n\n// Навигация по DOM\nelement.parentElement\nelement.children           // дочерние элементы\nelement.firstElementChild\nelement.lastElementChild\nelement.nextElementSibling\nelement.previousElementSibling\n\n// closest — ищет вверх по дереву\nbtn.closest(\".card\")</code></pre>\n\n<b>Чтение информации об элементе:</b>\n\n<pre><code class='language-javascript'>const el = document.querySelector(\".card\");\n\n// Содержимое\nel.textContent  // только текст\nel.innerHTML    // HTML внутри\nel.outerHTML    // HTML вместе с самим элементом\n\n// Атрибуты\nel.getAttribute(\"href\")\nel.setAttribute(\"href\", \"/new\")\nel.removeAttribute(\"disabled\")\nel.hasAttribute(\"required\")\n\n// Классы\nel.className          // строка классов\nel.classList          // DOMTokenList\nel.classList.contains(\"active\")\nel.classList.length\n\n// Размеры и позиция\nel.offsetWidth   // ширина с border\nel.offsetHeight\nel.getBoundingClientRect() // { top, left, width, height, ... }</code></pre>\n"
      },
      {
        "order": 9,
        "title": "DOM — изменение страницы",
        "text": "<b>Изменяем DOM из JavaScript</b>\n\n<pre><code class='language-javascript'>const el = document.querySelector(\".card\");\n\n// Текст и HTML\nel.textContent = \"Новый текст\";\nel.innerHTML   = \"&lt;strong&gt;Жирный&lt;/strong&gt; текст\";\n\n// Стили\nel.style.color          = \"red\";\nel.style.backgroundColor = \"#f5f5f5\";\nel.style.display        = \"none\";    // скрыть\nel.style.cssText        = \"color:red; font-size:18px;\"; // несколько\n\n// Классы\nel.classList.add(\"active\");\nel.classList.remove(\"hidden\");\nel.classList.toggle(\"dark\");         // добавить/убрать\nel.classList.replace(\"old\", \"new\");\n\n// Атрибуты\nel.setAttribute(\"data-id\", \"42\");\nel.dataset.id            // читать data-id\nel.dataset.userName      // data-user-name</code></pre>\n\n<b>Создание и добавление элементов:</b>\n\n<pre><code class='language-javascript'>// Создать элемент\nconst div = document.createElement(\"div\");\ndiv.className = \"card\";\ndiv.textContent = \"Новая карточка\";\n\n// Добавить в DOM\ndocument.body.appendChild(div);    // в конец body\ndocument.body.prepend(div);        // в начало body\nel.after(div);                     // после el\nel.before(div);                    // до el\nel.append(div);                    // в конец el\n\n// Шаблонные строки → HTML\nconst card = document.createElement(\"div\");\ncard.innerHTML = `\n  &lt;h2&gt;Заголовок&lt;/h2&gt;\n  &lt;p&gt;Описание&lt;/p&gt;\n  &lt;button class=\"btn\"&gt;Кнопка&lt;/button&gt;\n`;\ndocument.body.append(card);\n\n// Удалить\nel.remove();\nel.parentElement.removeChild(el);\n\n// Клонировать\nconst clone = el.cloneNode(true); // true = с детьми</code></pre>\n"
      },
      {
        "order": 10,
        "title": "События",
        "text": "<b>События — реакция на действия пользователя</b>\n\n<pre><code class='language-javascript'>const btn = document.querySelector(\".btn\");\n\n// Добавить обработчик\nbtn.addEventListener(\"click\", function(event) {\n  console.log(\"Клик!\", event);\n});\n\n// Стрелочная функция\nbtn.addEventListener(\"click\", (e) => {\n  console.log(\"Цель:\", e.target);\n});\n\n// Удалить обработчик (нужна ссылка на функцию)\nconst handler = () => console.log(\"клик\");\nbtn.addEventListener(\"click\", handler);\nbtn.removeEventListener(\"click\", handler);</code></pre>\n\n<b>Популярные события:</b>\n\n<pre><code class='language-javascript'>// Мышь\nel.addEventListener(\"click\",      e => {});\nel.addEventListener(\"dblclick\",   e => {});\nel.addEventListener(\"mouseenter\", e => {}); // наведение (без всплытия)\nel.addEventListener(\"mouseleave\", e => {});\nel.addEventListener(\"mousemove\",  e => { console.log(e.clientX, e.clientY); });\nel.addEventListener(\"contextmenu\",e => { e.preventDefault(); }); // ПКМ\n\n// Клавиатура\ndocument.addEventListener(\"keydown\", e => {\n  console.log(e.key, e.code);\n  if (e.key === \"Enter\") { /* ... */ }\n  if (e.ctrlKey && e.key === \"s\") { e.preventDefault(); /* сохранить */ }\n});\n\n// Форма\nform.addEventListener(\"submit\",  e => { e.preventDefault(); });\ninput.addEventListener(\"input\",  e => { console.log(e.target.value); });\ninput.addEventListener(\"change\", e => {});\ninput.addEventListener(\"focus\",  e => {});\ninput.addEventListener(\"blur\",   e => {});\n\n// Документ\ndocument.addEventListener(\"DOMContentLoaded\", () => { /* DOM готов */ });\nwindow.addEventListener(\"load\",   () => { /* всё загружено */ });\nwindow.addEventListener(\"resize\", () => { console.log(window.innerWidth); });\nwindow.addEventListener(\"scroll\", () => { console.log(window.scrollY); });</code></pre>\n\n<b>Объект события:</b>\n\n<pre><code class='language-javascript'>btn.addEventListener(\"click\", (e) => {\n  e.target          // элемент, на котором произошло событие\n  e.currentTarget   // элемент с обработчиком\n  e.preventDefault() // отменить действие по умолчанию\n  e.stopPropagation() // остановить всплытие\n  e.clientX, e.clientY // координаты мыши\n  e.key, e.code    // нажатая клавиша\n});</code></pre>\n"
      },
      {
        "order": 11,
        "title": "Делегирование событий",
        "text": "<b>Всплытие и делегирование</b>\n\n<b>Всплытие (bubbling):</b> событие сначала происходит на элементе, потом поднимается к родителям.\n\n<pre><code class='language-javascript'>// Пример всплытия\ndocument.querySelector(\".card\").addEventListener(\"click\", (e) => {\n  console.log(\"card\");   // сработает при клике на кнопку внутри\n});\ndocument.querySelector(\".btn\").addEventListener(\"click\", (e) => {\n  console.log(\"btn\");    // сработает первым\n  e.stopPropagation();   // остановить всплытие вверх\n});</code></pre>\n\n<b>Делегирование — один обработчик для многих элементов:</b>\n\n<pre><code class='language-javascript'>// ❌ Плохо — по обработчику на каждую кнопку\ndocument.querySelectorAll(\".btn-delete\").forEach(btn => {\n  btn.addEventListener(\"click\", deleteItem);\n});\n\n// ✅ Хорошо — один обработчик на родителе\nconst list = document.querySelector(\".list\");\nlist.addEventListener(\"click\", (e) => {\n  // e.target — фактически нажатый элемент\n  if (e.target.classList.contains(\"btn-delete\")) {\n    const item = e.target.closest(\".list-item\");\n    item.remove();\n  }\n  if (e.target.classList.contains(\"btn-edit\")) {\n    const id = e.target.dataset.id;\n    editItem(id);\n  }\n});</code></pre>\n\n<b>Почему делегирование лучше:</b>\n• Работает для динамически добавленных элементов\n• Экономит память (один обработчик вместо сотни)\n• Проще поддерживать код\n\n<pre><code class='language-javascript'>// Практический пример: список задач\nconst taskList = document.querySelector(\"#tasks\");\n\ntaskList.addEventListener(\"click\", (e) => {\n  const task = e.target.closest(\".task\");\n  if (!task) return;\n\n  if (e.target.matches(\".btn-done\")) {\n    task.classList.toggle(\"completed\");\n  }\n  if (e.target.matches(\".btn-delete\")) {\n    task.remove();\n  }\n});</code></pre>\n"
      },
      {
        "order": 12,
        "title": "Асинхронность и Promise",
        "text": "<b>Асинхронность в JavaScript</b>\n\nJS однопоточный — выполняет один кусок кода за раз. Но долгие операции (запросы, таймеры) не блокируют поток.\n\n<b>Callback — устаревший подход:</b>\n\n<pre><code class='language-javascript'>// Таймеры\nsetTimeout(() => console.log(\"Через 1 сек\"), 1000);\nsetInterval(() => console.log(\"Каждые 2 сек\"), 2000);\nconst id = setInterval(...);\nclearInterval(id); // остановить\n\n// Callback hell — вложенность растёт\ngetData(function(data) {\n  processData(data, function(result) {\n    saveResult(result, function() {\n      // ещё глубже...\n    });\n  });\n});</code></pre>\n\n<b>Promise — обещание будущего результата:</b>\n\n<pre><code class='language-javascript'>// Создание промиса\nconst promise = new Promise((resolve, reject) => {\n  // выполнить асинхронную операцию\n  if (success) {\n    resolve(data);   // успех\n  } else {\n    reject(error);   // ошибка\n  }\n});\n\n// Использование\npromise\n  .then(data => console.log(\"Успех:\", data))\n  .catch(err => console.error(\"Ошибка:\", err))\n  .finally(() => console.log(\"В любом случае\"));\n\n// Параллельное выполнение\nPromise.all([fetch(\"/api/1\"), fetch(\"/api/2\")])\n  .then(([res1, res2]) => { /* оба готовы */ });\n\n// Гонка — первый результат\nPromise.race([slowRequest(), fastRequest()])\n  .then(result => console.log(\"Первый:\", result));\n\n// Всегда дождаться всех\nPromise.allSettled([p1, p2, p3])\n  .then(results => results.forEach(r => console.log(r.status)));</code></pre>\n"
      },
      {
        "order": 13,
        "title": "async/await и Fetch API",
        "text": "<b>async/await — удобный синтаксис для промисов</b>\n\n<pre><code class='language-javascript'>// async — функция всегда возвращает Promise\nasync function loadUser(id) {\n  // await — ждём результата промиса\n  const response = await fetch(`/api/users/${id}`);\n  const user = await response.json();\n  return user;\n}\n\n// Обработка ошибок\nasync function loadData() {\n  try {\n    const res  = await fetch(\"/api/data\");\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error(\"Ошибка:\", err.message);\n    return null;\n  } finally {\n    console.log(\"Запрос завершён\");\n  }\n}</code></pre>\n\n<b>Fetch API — запросы к серверу:</b>\n\n<pre><code class='language-javascript'>// GET — получить данные\nconst res   = await fetch(\"https://api.example.com/posts\");\nconst posts = await res.json();\n\n// POST — отправить данные\nconst response = await fetch(\"/api/users\", {\n  method:  \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body:    JSON.stringify({ name: \"Анна\", age: 25 }),\n});\nconst newUser = await response.json();\n\n// PUT — обновить\nawait fetch(`/api/users/${id}`, {\n  method:  \"PUT\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body:    JSON.stringify({ name: \"Анна Иванова\" }),\n});\n\n// DELETE — удалить\nawait fetch(`/api/users/${id}`, { method: \"DELETE\" });\n\n// Параллельные запросы\nconst [users, posts] = await Promise.all([\n  fetch(\"/api/users\").then(r => r.json()),\n  fetch(\"/api/posts\").then(r => r.json()),\n]);</code></pre>\n\n<b>Проверка ответа:</b>\n\n<pre><code class='language-javascript'>const res = await fetch(\"/api/data\");\n\nres.ok          // true если 200-299\nres.status      // 200, 404, 500...\nres.statusText  // \"OK\", \"Not Found\"...\n\nawait res.json()   // → объект\nawait res.text()   // → строка\nawait res.blob()   // → файл</code></pre>\n"
      },
      {
        "order": 14,
        "title": "LocalStorage и современный JS",
        "text": "<b>Web Storage — хранение данных в браузере</b>\n\n<pre><code class='language-javascript'>// localStorage — постоянное (не очищается при закрытии)\nlocalStorage.setItem(\"theme\", \"dark\");\nlocalStorage.setItem(\"user\", JSON.stringify({ name: \"Анна\" }));\n\nconst theme = localStorage.getItem(\"theme\"); // \"dark\"\nconst user  = JSON.parse(localStorage.getItem(\"user\"));\n\nlocalStorage.removeItem(\"theme\");\nlocalStorage.clear(); // очистить всё\n\n// sessionStorage — только до закрытия вкладки\nsessionStorage.setItem(\"step\", \"2\");\n\n// Проверка\nif (localStorage.getItem(\"token\")) { /* авторизован */ }</code></pre>\n\n<b>Современный синтаксис ES6+:</b>\n\n<pre><code class='language-javascript'>// Деструктуризация массива\nconst [first, second, ...rest] = [1, 2, 3, 4, 5];\nconst [, , third] = [1, 2, 3]; // пропуск элементов\n\n// Spread\nconst arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]\nMath.max(...arr1);             // 3\n\nconst obj1 = { a: 1 };\nconst obj2 = { ...obj1, b: 2 }; // { a:1, b:2 }\n\n// Шаблонные строки\nconst html = `\n  &lt;div class=\"card\"&gt;\n    &lt;h2&gt;${user.name}&lt;/h2&gt;\n    &lt;p&gt;${user.age} лет&lt;/p&gt;\n  &lt;/div&gt;\n`.trim();\n\n// Computed property names\nconst key = \"name\";\nconst obj = { [key]: \"Анна\" }; // { name: \"Анна\" }\n\n// Short property names\nconst name = \"Анна\", age = 25;\nconst user = { name, age }; // { name: \"Анна\", age: 25 }\n\n// Nullish assignment\nlet x = null;\nx ??= \"по умолчанию\"; // присвоить только если null/undefined\n\n// Logical assignment\nlet a = 0;\na ||= 10; // присвоить если falsy\na &&= 20; // присвоить если truthy</code></pre>\n"
      },
      {
        "order": 15,
        "title": "Итоги: мини-приложение на JS",
        "text": "<b>Собираем всё вместе — список задач</b>\n\n<pre><code class='language-javascript'>// ── Состояние приложения ─────────────────────\nlet tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\nlet nextId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;\n\n// ── Сохранение ───────────────────────────────\nfunction save() {\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n\n// ── Рендеринг ────────────────────────────────\nfunction render() {\n  const list = document.querySelector(\"#task-list\");\n  list.innerHTML = tasks.map(task => `\n    &lt;li class=\"task ${task.done ? 'done' : ''}\" data-id=\"${task.id}\"&gt;\n      &lt;span&gt;${task.text}&lt;/span&gt;\n      &lt;button class=\"btn-done\"&gt;✓&lt;/button&gt;\n      &lt;button class=\"btn-delete\"&gt;✕&lt;/button&gt;\n    &lt;/li&gt;\n  `).join(\"\");\n}\n\n// ── Добавление задачи ────────────────────────\ndocument.querySelector(\"#task-form\")\n  .addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const input = e.target.querySelector(\"input\");\n    const text = input.value.trim();\n    if (!text) return;\n    tasks.push({ id: nextId++, text, done: false });\n    save();\n    render();\n    input.value = \"\";\n    input.focus();\n  });\n\n// ── Делегирование (done / delete) ────────────\ndocument.querySelector(\"#task-list\")\n  .addEventListener(\"click\", (e) => {\n    const li = e.target.closest(\".task\");\n    if (!li) return;\n    const id = Number(li.dataset.id);\n\n    if (e.target.matches(\".btn-done\")) {\n      tasks = tasks.map(t =>\n        t.id === id ? { ...t, done: !t.done } : t\n      );\n    }\n    if (e.target.matches(\".btn-delete\")) {\n      tasks = tasks.filter(t => t.id !== id);\n    }\n    save();\n    render();\n  });\n\n// ── Инициализация ────────────────────────────\nrender();</code></pre>\n\n<b>✅ Что ты освоил в этом курсе:</b>\n• Переменные, типы данных, операторы\n• Условия, циклы, функции, замыкания\n• Массивы и объекты (все методы)\n• DOM: поиск, изменение, создание элементов\n• События и делегирование\n• Promise, async/await, Fetch API\n• LocalStorage и современный ES6+ синтаксис\n\n🚀 Следующий шаг — <b>React</b> или <b>Node.js</b>: выбери своё направление!\n"
      }
    ]
  },
  {
    "id": 4,
    "title": "Оформление",
    "description": "Оформление веб-страниц — это курс, который научит вас управлять шрифтами, текстом, фонами и границами, помогая превратить сырую структуру сайта в аккуратный, читаемый и приятный глазу интерфейс.",
    "emoji": "⭐",
    "language": "HTML CSS",
    "difficulty": "hard",
    "xp_reward": 700,
    "coins_reward": 350,
    "lessons": [
      {
        "order": 1,
        "title": "Что такое JavaScript",
        "text": "<b>JavaScript — язык программирования браузера</b>\n\nJS делает сайты интерактивными: реагирует на действия пользователя, меняет контент, отправляет запросы без перезагрузки страницы.\n\n<b>Где выполняется JavaScript:</b>\n• В браузере — любой сайт\n• На сервере — Node.js\n• В мобильных приложениях — React Native\n\n<b>Подключение скриптов:</b>\n\n<pre><code class='language-html'>&lt;!-- Внутри HTML --&gt;\n&lt;script&gt;\n  console.log(\"Привет из скрипта!\");\n&lt;/script&gt;\n\n&lt;!-- Внешний файл (рекомендуется) --&gt;\n&lt;script src=\"script.js\"&gt;&lt;/script&gt;\n\n&lt;!-- defer — выполнить после загрузки HTML --&gt;\n&lt;script src=\"script.js\" defer&gt;&lt;/script&gt;\n\n&lt;!-- async — выполнить как только загрузится --&gt;\n&lt;script src=\"analytics.js\" async&gt;&lt;/script&gt;</code></pre>\n\n<b>Первые шаги:</b>\n\n<pre><code class='language-javascript'>// Вывод в консоль браузера (F12 → Console)\nconsole.log(\"Привет, мир!\");\nconsole.log(42, true, [1,2,3]);\nconsole.error(\"Ошибка!\");\nconsole.warn(\"Предупреждение\");\nconsole.table([{name: \"Анна\", age: 25}]);\n\n// Диалоговые окна браузера\nalert(\"Сообщение\");\nconst name = prompt(\"Как тебя зовут?\");\nconst ok = confirm(\"Уверен?\"); // true или false</code></pre>\n\n💡 Всегда подключай JS перед <code>&lt;/body&gt;</code> или используй атрибут <code>defer</code>, чтобы HTML загружался раньше скрипта.\n"
      },
      {
        "order": 2,
        "title": "Переменные и типы данных",
        "text": "<b>Переменные — хранилища данных</b>\n\n<pre><code class='language-javascript'>// const — нельзя переназначить (используй по умолчанию)\nconst name = \"Анна\";\nconst age  = 25;\nconst PI   = 3.14159;\n\n// let — можно переназначить\nlet score = 0;\nscore = 100;         // OK\nscore += 50;         // score = 150\n\n// var — устаревший, не используй\nvar old = \"избегай\";</code></pre>\n\n<b>Типы данных:</b>\n\n<pre><code class='language-javascript'>// string — строка\nconst str1 = \"двойные кавычки\";\nconst str2 = 'одинарные кавычки';\nconst str3 = `шаблонная строка: ${name}, ${2 + 2}`;\nconst multiline = `Строка 1\nСтрока 2`;\n\n// number — число (целые и дробные)\nconst int   = 42;\nconst float = 3.14;\nconst neg   = -100;\nconst inf   = Infinity;\nconst nan   = NaN;      // Not a Number\n\n// boolean — логический\nconst yes = true;\nconst no  = false;\n\n// null — намеренное отсутствие значения\nconst empty = null;\n\n// undefined — значение не задано\nlet notDefined;\nconsole.log(notDefined); // undefined\n\n// object — объект\nconst user = { name: \"Анна\", age: 25 };\n\n// array — массив (тоже объект)\nconst colors = [\"red\", \"green\", \"blue\"];\n\n// symbol — уникальный идентификатор\nconst id = Symbol(\"id\");</code></pre>\n\n<b>Проверка типов:</b>\n\n<pre><code class='language-javascript'>typeof \"текст\"   // \"string\"\ntypeof 42        // \"number\"\ntypeof true      // \"boolean\"\ntypeof undefined // \"undefined\"\ntypeof null      // \"object\" (историческая ошибка!)\ntypeof []        // \"object\"\ntypeof {}        // \"object\"\n\n// Правильная проверка массива\nArray.isArray([1, 2, 3])  // true\n\n// Проверка на null\nvalue === null     // true если null</code></pre>\n"
      },
      {
        "order": 3,
        "title": "Операторы и условия",
        "text": "<b>Операторы сравнения</b>\n\n<pre><code class='language-javascript'>// == сравнивает значение (с приведением типов) — ИЗБЕГАЙ\n5 == \"5\"   // true (строку привели к числу)\n\n// === сравнивает значение И тип — ИСПОЛЬЗУЙ\n5 === \"5\"  // false\n5 === 5    // true\nnull === undefined // false\n\n// Неравенство\n5 != \"5\"  // false (с приведением)\n5 !== \"5\" // true  (строго)\n\n// Числовые\n5 > 3    // true\n5 >= 5   // true\n3 < 5    // true</code></pre>\n\n<b>Логические операторы:</b>\n\n<pre><code class='language-javascript'>true && true   // true  (И)\ntrue && false  // false\ntrue || false  // true  (ИЛИ)\nfalse || false // false\n!true          // false (НЕ)\n\n// Short-circuit (ленивые вычисления)\nfalse && doSomething()  // doSomething НЕ вызовется\ntrue  || doSomething()  // doSomething НЕ вызовется\n\n// Nullish coalescing — запасное значение при null/undefined\nconst val = null ?? \"по умолчанию\"; // \"по умолчанию\"\nconst x   = 0    ?? \"по умолчанию\"; // 0 (не null!)\n\n// Optional chaining — безопасный доступ\nconst city = user?.address?.city; // не упадёт если нет address</code></pre>\n\n<b>Условные операторы:</b>\n\n<pre><code class='language-javascript'>const age = 20;\n\n// if / else if / else\nif (age >= 18) {\n  console.log(\"Совершеннолетний\");\n} else if (age >= 14) {\n  console.log(\"Подросток\");\n} else {\n  console.log(\"Ребёнок\");\n}\n\n// Тернарный оператор\nconst status = age >= 18 ? \"взрослый\" : \"ребёнок\";\n\n// Switch\nconst day = \"пн\";\nswitch (day) {\n  case \"пн\":\n  case \"вт\":\n    console.log(\"Начало недели\"); break;\n  case \"пт\":\n    console.log(\"Пятница!\"); break;\n  default:\n    console.log(\"Другой день\");\n}</code></pre>\n"
      },
      {
        "order": 4,
        "title": "Циклы",
        "text": "<b>Циклы — повторяем действия</b>\n\n<pre><code class='language-javascript'>// for — классический цикл со счётчиком\nfor (let i = 0; i < 5; i++) {\n  console.log(i); // 0 1 2 3 4\n}\n\n// Обратный отсчёт\nfor (let i = 5; i > 0; i--) {\n  console.log(i); // 5 4 3 2 1\n}\n\n// while — пока условие истинно\nlet count = 0;\nwhile (count < 3) {\n  console.log(count++); // 0 1 2\n}\n\n// do...while — выполнится хотя бы раз\nlet x = 10;\ndo {\n  console.log(x); // 10\n  x++;\n} while (x < 5);\n\n// for...of — по элементам массива/строки\nconst fruits = [\"яблоко\", \"банан\", \"груша\"];\nfor (const fruit of fruits) {\n  console.log(fruit);\n}\n\n// for...in — по ключам объекта\nconst user = { name: \"Анна\", age: 25 };\nfor (const key in user) {\n  console.log(key, user[key]);\n  // name Анна\n  // age  25\n}</code></pre>\n\n<b>Управление циклом:</b>\n\n<pre><code class='language-javascript'>// break — прервать цикл\nfor (let i = 0; i < 10; i++) {\n  if (i === 5) break;\n  console.log(i); // 0 1 2 3 4\n}\n\n// continue — перейти к следующей итерации\nfor (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  console.log(i); // 0 1 3 4\n}\n\n// Метки (редко нужны)\nouter: for (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (j === 1) break outer; // выйти из внешнего\n  }\n}</code></pre>\n"
      },
      {
        "order": 5,
        "title": "Функции",
        "text": "<b>Функции — многократно используемый код</b>\n\n<pre><code class='language-javascript'>// Объявление функции (hoisting — доступна до объявления)\nfunction greet(name) {\n  return `Привет, ${name}!`;\n}\n\n// Функциональное выражение\nconst greet = function(name) {\n  return `Привет, ${name}!`;\n};\n\n// Стрелочная функция (arrow function)\nconst greet = (name) => `Привет, ${name}!`;\n\n// Без параметров\nconst sayHi  = () => \"Привет!\";\n\n// С несколькими строками\nconst add = (a, b) => {\n  const result = a + b;\n  return result;\n};</code></pre>\n\n<b>Параметры функций:</b>\n\n<pre><code class='language-javascript'>// Значения по умолчанию\nfunction greet(name = \"Гость\") {\n  return `Привет, ${name}!`;\n}\ngreet();        // \"Привет, Гость!\"\ngreet(\"Анна\"); // \"Привет, Анна!\"\n\n// Деструктуризация в параметрах\nfunction printUser({ name, age }) {\n  console.log(`${name}, ${age} лет`);\n}\nprintUser({ name: \"Анна\", age: 25 });\n\n// rest-параметры\nfunction sum(...numbers) {\n  return numbers.reduce((total, n) => total + n, 0);\n}\nsum(1, 2, 3, 4); // 10</code></pre>\n\n<b>Замыкания (closures):</b>\n\n<pre><code class='language-javascript'>function makeCounter() {\n  let count = 0;          // переменная в замыкании\n  return () => ++count;   // функция имеет доступ к count\n}\n\nconst counter = makeCounter();\ncounter(); // 1\ncounter(); // 2\ncounter(); // 3\n\n// Создание приватных данных\nfunction createUser(name) {\n  let _age = 0;                           // приватное\n  return {\n    getName: () => name,\n    getAge:  () => _age,\n    setAge:  (age) => { _age = age; },\n  };\n}</code></pre>\n"
      },
      {
        "order": 6,
        "title": "Массивы",
        "text": "<b>Массивы — упорядоченные коллекции данных</b>\n\n<pre><code class='language-javascript'>// Создание\nconst arr = [1, 2, 3];\nconst arr2 = new Array(3);        // [empty x 3]\nconst arr3 = Array.from(\"abc\");   // ['a','b','c']\n\n// Доступ\narr[0]     // 1 (первый)\narr.at(-1) // 3 (последний)</code></pre>\n\n<b>Методы — изменяют оригинал:</b>\n\n<pre><code class='language-javascript'>const a = [1, 2, 3];\n\na.push(4);        // добавить в конец  → [1,2,3,4]\na.pop();          // убрать из конца   → [1,2,3]\na.unshift(0);     // добавить в начало → [0,1,2,3]\na.shift();        // убрать из начала  → [1,2,3]\na.reverse();      // перевернуть       → [3,2,1]\na.sort();         // сортировать       → [1,2,3]\na.sort((x, y) => y - x); // по убыванию\n\n// splice — удалить/вставить\na.splice(1, 1);       // удалить 1 элемент с индекса 1\na.splice(1, 0, 10);   // вставить 10 после индекса 1</code></pre>\n\n<b>Методы — возвращают новый массив:</b>\n\n<pre><code class='language-javascript'>const nums = [1, 2, 3, 4, 5];\n\n// map — преобразовать каждый\nnums.map(n => n * 2)          // [2,4,6,8,10]\n\n// filter — отфильтровать\nnums.filter(n => n % 2 === 0) // [2,4]\n\n// reduce — свернуть в одно значение\nnums.reduce((sum, n) => sum + n, 0) // 15\n\n// find — найти первый\nnums.find(n => n > 3)    // 4\nnums.findIndex(n => n > 3) // 3\n\n// some / every\nnums.some(n => n > 4)   // true (хоть один)\nnums.every(n => n > 0)  // true (все)\n\n// includes\nnums.includes(3)  // true\n\n// flat / flatMap\n[[1,2],[3,4]].flat()  // [1,2,3,4]\n\n// slice — выреза\nnums.slice(1, 3)  // [2,3]\n\n// concat / spread\n[...nums, 6, 7]   // [1,2,3,4,5,6,7]\n\n// join → строка\nnums.join(\", \")   // \"1, 2, 3, 4, 5\"</code></pre>\n"
      },
      {
        "order": 7,
        "title": "Объекты",
        "text": "<b>Объекты — наборы свойств</b>\n\n<pre><code class='language-javascript'>// Создание объекта\nconst user = {\n  name: \"Анна\",\n  age: 25,\n  isAdmin: false,\n  address: {\n    city: \"Москва\",\n    street: \"Ленина, 1\",\n  },\n  greet() {            // метод объекта\n    return `Привет, я ${this.name}`;\n  },\n};\n\n// Доступ к свойствам\nuser.name          // \"Анна\"\nuser[\"name\"]       // \"Анна\"\nuser.address.city  // \"Москва\"\n\n// Изменение\nuser.age = 26;\nuser[\"email\"] = \"anna@mail.ru\";\n\n// Удаление\ndelete user.isAdmin;\n\n// Проверка наличия свойства\n\"name\" in user          // true\nuser.hasOwnProperty(\"name\") // true</code></pre>\n\n<b>Деструктуризация:</b>\n\n<pre><code class='language-javascript'>const { name, age } = user;\nconst { name: userName } = user; // другое имя переменной\nconst { name, age = 18 } = user; // значение по умолчанию\n\n// Вложенная\nconst { address: { city } } = user;\n\n// В функции\nfunction show({ name, age }) {\n  console.log(name, age);\n}</code></pre>\n\n<b>Spread и Object methods:</b>\n\n<pre><code class='language-javascript'>// Копия объекта\nconst copy = { ...user };\n\n// Слияние объектов\nconst extended = { ...user, role: \"admin\" };\n\n// Object.keys / values / entries\nObject.keys(user)    // [\"name\", \"age\", ...]\nObject.values(user)  // [\"Анна\", 25, ...]\nObject.entries(user) // [[\"name\",\"Анна\"], ...]\n\n// Перебор\nfor (const [key, val] of Object.entries(user)) {\n  console.log(key, val);\n}\n\n// Object.assign\nconst target = Object.assign({}, user, { role: \"vip\" });\n\n// Заморозка (нельзя менять)\nObject.freeze(user);</code></pre>\n"
      },
      {
        "order": 8,
        "title": "DOM — поиск элементов",
        "text": "<b>DOM (Document Object Model) — дерево HTML в JavaScript</b>\n\n<pre><code class='language-javascript'>// querySelector — первый совпадающий элемент\nconst btn  = document.querySelector(\".button\");\nconst h1   = document.querySelector(\"h1\");\nconst nav  = document.querySelector(\"#nav a\");\n\n// querySelectorAll — все совпадающие (NodeList)\nconst btns  = document.querySelectorAll(\".button\");\nconst items = document.querySelectorAll(\"li\");\n\n// Перебор NodeList\nbtns.forEach(btn => console.log(btn));\n[...btns].map(btn => btn.textContent); // в массив\n\n// Устаревшие, но работают\ndocument.getElementById(\"header\");\ndocument.getElementsByClassName(\"card\"); // HTMLCollection\ndocument.getElementsByTagName(\"p\");\n\n// Навигация по DOM\nelement.parentElement\nelement.children           // дочерние элементы\nelement.firstElementChild\nelement.lastElementChild\nelement.nextElementSibling\nelement.previousElementSibling\n\n// closest — ищет вверх по дереву\nbtn.closest(\".card\")</code></pre>\n\n<b>Чтение информации об элементе:</b>\n\n<pre><code class='language-javascript'>const el = document.querySelector(\".card\");\n\n// Содержимое\nel.textContent  // только текст\nel.innerHTML    // HTML внутри\nel.outerHTML    // HTML вместе с самим элементом\n\n// Атрибуты\nel.getAttribute(\"href\")\nel.setAttribute(\"href\", \"/new\")\nel.removeAttribute(\"disabled\")\nel.hasAttribute(\"required\")\n\n// Классы\nel.className          // строка классов\nel.classList          // DOMTokenList\nel.classList.contains(\"active\")\nel.classList.length\n\n// Размеры и позиция\nel.offsetWidth   // ширина с border\nel.offsetHeight\nel.getBoundingClientRect() // { top, left, width, height, ... }</code></pre>\n"
      },
      {
        "order": 9,
        "title": "DOM — изменение страницы",
        "text": "<b>Изменяем DOM из JavaScript</b>\n\n<pre><code class='language-javascript'>const el = document.querySelector(\".card\");\n\n// Текст и HTML\nel.textContent = \"Новый текст\";\nel.innerHTML   = \"&lt;strong&gt;Жирный&lt;/strong&gt; текст\";\n\n// Стили\nel.style.color          = \"red\";\nel.style.backgroundColor = \"#f5f5f5\";\nel.style.display        = \"none\";    // скрыть\nel.style.cssText        = \"color:red; font-size:18px;\"; // несколько\n\n// Классы\nel.classList.add(\"active\");\nel.classList.remove(\"hidden\");\nel.classList.toggle(\"dark\");         // добавить/убрать\nel.classList.replace(\"old\", \"new\");\n\n// Атрибуты\nel.setAttribute(\"data-id\", \"42\");\nel.dataset.id            // читать data-id\nel.dataset.userName      // data-user-name</code></pre>\n\n<b>Создание и добавление элементов:</b>\n\n<pre><code class='language-javascript'>// Создать элемент\nconst div = document.createElement(\"div\");\ndiv.className = \"card\";\ndiv.textContent = \"Новая карточка\";\n\n// Добавить в DOM\ndocument.body.appendChild(div);    // в конец body\ndocument.body.prepend(div);        // в начало body\nel.after(div);                     // после el\nel.before(div);                    // до el\nel.append(div);                    // в конец el\n\n// Шаблонные строки → HTML\nconst card = document.createElement(\"div\");\ncard.innerHTML = `\n  &lt;h2&gt;Заголовок&lt;/h2&gt;\n  &lt;p&gt;Описание&lt;/p&gt;\n  &lt;button class=\"btn\"&gt;Кнопка&lt;/button&gt;\n`;\ndocument.body.append(card);\n\n// Удалить\nel.remove();\nel.parentElement.removeChild(el);\n\n// Клонировать\nconst clone = el.cloneNode(true); // true = с детьми</code></pre>\n"
      },
      {
        "order": 10,
        "title": "События",
        "text": "<b>События — реакция на действия пользователя</b>\n\n<pre><code class='language-javascript'>const btn = document.querySelector(\".btn\");\n\n// Добавить обработчик\nbtn.addEventListener(\"click\", function(event) {\n  console.log(\"Клик!\", event);\n});\n\n// Стрелочная функция\nbtn.addEventListener(\"click\", (e) => {\n  console.log(\"Цель:\", e.target);\n});\n\n// Удалить обработчик (нужна ссылка на функцию)\nconst handler = () => console.log(\"клик\");\nbtn.addEventListener(\"click\", handler);\nbtn.removeEventListener(\"click\", handler);</code></pre>\n\n<b>Популярные события:</b>\n\n<pre><code class='language-javascript'>// Мышь\nel.addEventListener(\"click\",      e => {});\nel.addEventListener(\"dblclick\",   e => {});\nel.addEventListener(\"mouseenter\", e => {}); // наведение (без всплытия)\nel.addEventListener(\"mouseleave\", e => {});\nel.addEventListener(\"mousemove\",  e => { console.log(e.clientX, e.clientY); });\nel.addEventListener(\"contextmenu\",e => { e.preventDefault(); }); // ПКМ\n\n// Клавиатура\ndocument.addEventListener(\"keydown\", e => {\n  console.log(e.key, e.code);\n  if (e.key === \"Enter\") { /* ... */ }\n  if (e.ctrlKey && e.key === \"s\") { e.preventDefault(); /* сохранить */ }\n});\n\n// Форма\nform.addEventListener(\"submit\",  e => { e.preventDefault(); });\ninput.addEventListener(\"input\",  e => { console.log(e.target.value); });\ninput.addEventListener(\"change\", e => {});\ninput.addEventListener(\"focus\",  e => {});\ninput.addEventListener(\"blur\",   e => {});\n\n// Документ\ndocument.addEventListener(\"DOMContentLoaded\", () => { /* DOM готов */ });\nwindow.addEventListener(\"load\",   () => { /* всё загружено */ });\nwindow.addEventListener(\"resize\", () => { console.log(window.innerWidth); });\nwindow.addEventListener(\"scroll\", () => { console.log(window.scrollY); });</code></pre>\n\n<b>Объект события:</b>\n\n<pre><code class='language-javascript'>btn.addEventListener(\"click\", (e) => {\n  e.target          // элемент, на котором произошло событие\n  e.currentTarget   // элемент с обработчиком\n  e.preventDefault() // отменить действие по умолчанию\n  e.stopPropagation() // остановить всплытие\n  e.clientX, e.clientY // координаты мыши\n  e.key, e.code    // нажатая клавиша\n});</code></pre>\n"
      },
      {
        "order": 11,
        "title": "Делегирование событий",
        "text": "<b>Всплытие и делегирование</b>\n\n<b>Всплытие (bubbling):</b> событие сначала происходит на элементе, потом поднимается к родителям.\n\n<pre><code class='language-javascript'>// Пример всплытия\ndocument.querySelector(\".card\").addEventListener(\"click\", (e) => {\n  console.log(\"card\");   // сработает при клике на кнопку внутри\n});\ndocument.querySelector(\".btn\").addEventListener(\"click\", (e) => {\n  console.log(\"btn\");    // сработает первым\n  e.stopPropagation();   // остановить всплытие вверх\n});</code></pre>\n\n<b>Делегирование — один обработчик для многих элементов:</b>\n\n<pre><code class='language-javascript'>// ❌ Плохо — по обработчику на каждую кнопку\ndocument.querySelectorAll(\".btn-delete\").forEach(btn => {\n  btn.addEventListener(\"click\", deleteItem);\n});\n\n// ✅ Хорошо — один обработчик на родителе\nconst list = document.querySelector(\".list\");\nlist.addEventListener(\"click\", (e) => {\n  // e.target — фактически нажатый элемент\n  if (e.target.classList.contains(\"btn-delete\")) {\n    const item = e.target.closest(\".list-item\");\n    item.remove();\n  }\n  if (e.target.classList.contains(\"btn-edit\")) {\n    const id = e.target.dataset.id;\n    editItem(id);\n  }\n});</code></pre>\n\n<b>Почему делегирование лучше:</b>\n• Работает для динамически добавленных элементов\n• Экономит память (один обработчик вместо сотни)\n• Проще поддерживать код\n\n<pre><code class='language-javascript'>// Практический пример: список задач\nconst taskList = document.querySelector(\"#tasks\");\n\ntaskList.addEventListener(\"click\", (e) => {\n  const task = e.target.closest(\".task\");\n  if (!task) return;\n\n  if (e.target.matches(\".btn-done\")) {\n    task.classList.toggle(\"completed\");\n  }\n  if (e.target.matches(\".btn-delete\")) {\n    task.remove();\n  }\n});</code></pre>\n"
      },
      {
        "order": 12,
        "title": "Асинхронность и Promise",
        "text": "<b>Асинхронность в JavaScript</b>\n\nJS однопоточный — выполняет один кусок кода за раз. Но долгие операции (запросы, таймеры) не блокируют поток.\n\n<b>Callback — устаревший подход:</b>\n\n<pre><code class='language-javascript'>// Таймеры\nsetTimeout(() => console.log(\"Через 1 сек\"), 1000);\nsetInterval(() => console.log(\"Каждые 2 сек\"), 2000);\nconst id = setInterval(...);\nclearInterval(id); // остановить\n\n// Callback hell — вложенность растёт\ngetData(function(data) {\n  processData(data, function(result) {\n    saveResult(result, function() {\n      // ещё глубже...\n    });\n  });\n});</code></pre>\n\n<b>Promise — обещание будущего результата:</b>\n\n<pre><code class='language-javascript'>// Создание промиса\nconst promise = new Promise((resolve, reject) => {\n  // выполнить асинхронную операцию\n  if (success) {\n    resolve(data);   // успех\n  } else {\n    reject(error);   // ошибка\n  }\n});\n\n// Использование\npromise\n  .then(data => console.log(\"Успех:\", data))\n  .catch(err => console.error(\"Ошибка:\", err))\n  .finally(() => console.log(\"В любом случае\"));\n\n// Параллельное выполнение\nPromise.all([fetch(\"/api/1\"), fetch(\"/api/2\")])\n  .then(([res1, res2]) => { /* оба готовы */ });\n\n// Гонка — первый результат\nPromise.race([slowRequest(), fastRequest()])\n  .then(result => console.log(\"Первый:\", result));\n\n// Всегда дождаться всех\nPromise.allSettled([p1, p2, p3])\n  .then(results => results.forEach(r => console.log(r.status)));</code></pre>\n"
      },
      {
        "order": 13,
        "title": "async/await и Fetch API",
        "text": "<b>async/await — удобный синтаксис для промисов</b>\n\n<pre><code class='language-javascript'>// async — функция всегда возвращает Promise\nasync function loadUser(id) {\n  // await — ждём результата промиса\n  const response = await fetch(`/api/users/${id}`);\n  const user = await response.json();\n  return user;\n}\n\n// Обработка ошибок\nasync function loadData() {\n  try {\n    const res  = await fetch(\"/api/data\");\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error(\"Ошибка:\", err.message);\n    return null;\n  } finally {\n    console.log(\"Запрос завершён\");\n  }\n}</code></pre>\n\n<b>Fetch API — запросы к серверу:</b>\n\n<pre><code class='language-javascript'>// GET — получить данные\nconst res   = await fetch(\"https://api.example.com/posts\");\nconst posts = await res.json();\n\n// POST — отправить данные\nconst response = await fetch(\"/api/users\", {\n  method:  \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body:    JSON.stringify({ name: \"Анна\", age: 25 }),\n});\nconst newUser = await response.json();\n\n// PUT — обновить\nawait fetch(`/api/users/${id}`, {\n  method:  \"PUT\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body:    JSON.stringify({ name: \"Анна Иванова\" }),\n});\n\n// DELETE — удалить\nawait fetch(`/api/users/${id}`, { method: \"DELETE\" });\n\n// Параллельные запросы\nconst [users, posts] = await Promise.all([\n  fetch(\"/api/users\").then(r => r.json()),\n  fetch(\"/api/posts\").then(r => r.json()),\n]);</code></pre>\n\n<b>Проверка ответа:</b>\n\n<pre><code class='language-javascript'>const res = await fetch(\"/api/data\");\n\nres.ok          // true если 200-299\nres.status      // 200, 404, 500...\nres.statusText  // \"OK\", \"Not Found\"...\n\nawait res.json()   // → объект\nawait res.text()   // → строка\nawait res.blob()   // → файл</code></pre>\n"
      },
      {
        "order": 14,
        "title": "LocalStorage и современный JS",
        "text": "<b>Web Storage — хранение данных в браузере</b>\n\n<pre><code class='language-javascript'>// localStorage — постоянное (не очищается при закрытии)\nlocalStorage.setItem(\"theme\", \"dark\");\nlocalStorage.setItem(\"user\", JSON.stringify({ name: \"Анна\" }));\n\nconst theme = localStorage.getItem(\"theme\"); // \"dark\"\nconst user  = JSON.parse(localStorage.getItem(\"user\"));\n\nlocalStorage.removeItem(\"theme\");\nlocalStorage.clear(); // очистить всё\n\n// sessionStorage — только до закрытия вкладки\nsessionStorage.setItem(\"step\", \"2\");\n\n// Проверка\nif (localStorage.getItem(\"token\")) { /* авторизован */ }</code></pre>\n\n<b>Современный синтаксис ES6+:</b>\n\n<pre><code class='language-javascript'>// Деструктуризация массива\nconst [first, second, ...rest] = [1, 2, 3, 4, 5];\nconst [, , third] = [1, 2, 3]; // пропуск элементов\n\n// Spread\nconst arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]\nMath.max(...arr1);             // 3\n\nconst obj1 = { a: 1 };\nconst obj2 = { ...obj1, b: 2 }; // { a:1, b:2 }\n\n// Шаблонные строки\nconst html = `\n  &lt;div class=\"card\"&gt;\n    &lt;h2&gt;${user.name}&lt;/h2&gt;\n    &lt;p&gt;${user.age} лет&lt;/p&gt;\n  &lt;/div&gt;\n`.trim();\n\n// Computed property names\nconst key = \"name\";\nconst obj = { [key]: \"Анна\" }; // { name: \"Анна\" }\n\n// Short property names\nconst name = \"Анна\", age = 25;\nconst user = { name, age }; // { name: \"Анна\", age: 25 }\n\n// Nullish assignment\nlet x = null;\nx ??= \"по умолчанию\"; // присвоить только если null/undefined\n\n// Logical assignment\nlet a = 0;\na ||= 10; // присвоить если falsy\na &&= 20; // присвоить если truthy</code></pre>\n"
      },
      {
        "order": 15,
        "title": "Итоги: мини-приложение на JS",
        "text": "<b>Собираем всё вместе — список задач</b>\n\n<pre><code class='language-javascript'>// ── Состояние приложения ─────────────────────\nlet tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\nlet nextId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;\n\n// ── Сохранение ───────────────────────────────\nfunction save() {\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n\n// ── Рендеринг ────────────────────────────────\nfunction render() {\n  const list = document.querySelector(\"#task-list\");\n  list.innerHTML = tasks.map(task => `\n    &lt;li class=\"task ${task.done ? 'done' : ''}\" data-id=\"${task.id}\"&gt;\n      &lt;span&gt;${task.text}&lt;/span&gt;\n      &lt;button class=\"btn-done\"&gt;✓&lt;/button&gt;\n      &lt;button class=\"btn-delete\"&gt;✕&lt;/button&gt;\n    &lt;/li&gt;\n  `).join(\"\");\n}\n\n// ── Добавление задачи ────────────────────────\ndocument.querySelector(\"#task-form\")\n  .addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const input = e.target.querySelector(\"input\");\n    const text = input.value.trim();\n    if (!text) return;\n    tasks.push({ id: nextId++, text, done: false });\n    save();\n    render();\n    input.value = \"\";\n    input.focus();\n  });\n\n// ── Делегирование (done / delete) ────────────\ndocument.querySelector(\"#task-list\")\n  .addEventListener(\"click\", (e) => {\n    const li = e.target.closest(\".task\");\n    if (!li) return;\n    const id = Number(li.dataset.id);\n\n    if (e.target.matches(\".btn-done\")) {\n      tasks = tasks.map(t =>\n        t.id === id ? { ...t, done: !t.done } : t\n      );\n    }\n    if (e.target.matches(\".btn-delete\")) {\n      tasks = tasks.filter(t => t.id !== id);\n    }\n    save();\n    render();\n  });\n\n// ── Инициализация ────────────────────────────\nrender();</code></pre>\n\n<b>✅ Что ты освоил в этом курсе:</b>\n• Переменные, типы данных, операторы\n• Условия, циклы, функции, замыкания\n• Массивы и объекты (все методы)\n• DOM: поиск, изменение, создание элементов\n• События и делегирование\n• Promise, async/await, Fetch API\n• LocalStorage и современный ES6+ синтаксис\n\n🚀 Следующий шаг — <b>React</b> или <b>Node.js</b>: выбери своё направление!\n"
      }
    ]
  },
  {
    "id": 5,
    "title": "Блочная модель",
    "description": "Блочная модель в CSS — это фундаментальный курс, который объяснит, как браузер видит каждый элемент сайта в виде невидимой коробки, и научит вас управлять её размерами с помощью внутренних отступов, рамок и внешних полей.",
    "emoji": "🧱",
    "language": "HTML CSS",
    "difficulty": "hard",
    "xp_reward": 700,
    "coins_reward": 350,
    "lessons": [
      {
        "order": 1,
        "title": "Что такое JavaScript",
        "text": "<b>JavaScript — язык программирования браузера</b>\n\nJS делает сайты интерактивными: реагирует на действия пользователя, меняет контент, отправляет запросы без перезагрузки страницы.\n\n<b>Где выполняется JavaScript:</b>\n• В браузере — любой сайт\n• На сервере — Node.js\n• В мобильных приложениях — React Native\n\n<b>Подключение скриптов:</b>\n\n<pre><code class='language-html'>&lt;!-- Внутри HTML --&gt;\n&lt;script&gt;\n  console.log(\"Привет из скрипта!\");\n&lt;/script&gt;\n\n&lt;!-- Внешний файл (рекомендуется) --&gt;\n&lt;script src=\"script.js\"&gt;&lt;/script&gt;\n\n&lt;!-- defer — выполнить после загрузки HTML --&gt;\n&lt;script src=\"script.js\" defer&gt;&lt;/script&gt;\n\n&lt;!-- async — выполнить как только загрузится --&gt;\n&lt;script src=\"analytics.js\" async&gt;&lt;/script&gt;</code></pre>\n\n<b>Первые шаги:</b>\n\n<pre><code class='language-javascript'>// Вывод в консоль браузера (F12 → Console)\nconsole.log(\"Привет, мир!\");\nconsole.log(42, true, [1,2,3]);\nconsole.error(\"Ошибка!\");\nconsole.warn(\"Предупреждение\");\nconsole.table([{name: \"Анна\", age: 25}]);\n\n// Диалоговые окна браузера\nalert(\"Сообщение\");\nconst name = prompt(\"Как тебя зовут?\");\nconst ok = confirm(\"Уверен?\"); // true или false</code></pre>\n\n💡 Всегда подключай JS перед <code>&lt;/body&gt;</code> или используй атрибут <code>defer</code>, чтобы HTML загружался раньше скрипта.\n"
      },
      {
        "order": 2,
        "title": "Переменные и типы данных",
        "text": "<b>Переменные — хранилища данных</b>\n\n<pre><code class='language-javascript'>// const — нельзя переназначить (используй по умолчанию)\nconst name = \"Анна\";\nconst age  = 25;\nconst PI   = 3.14159;\n\n// let — можно переназначить\nlet score = 0;\nscore = 100;         // OK\nscore += 50;         // score = 150\n\n// var — устаревший, не используй\nvar old = \"избегай\";</code></pre>\n\n<b>Типы данных:</b>\n\n<pre><code class='language-javascript'>// string — строка\nconst str1 = \"двойные кавычки\";\nconst str2 = 'одинарные кавычки';\nconst str3 = `шаблонная строка: ${name}, ${2 + 2}`;\nconst multiline = `Строка 1\nСтрока 2`;\n\n// number — число (целые и дробные)\nconst int   = 42;\nconst float = 3.14;\nconst neg   = -100;\nconst inf   = Infinity;\nconst nan   = NaN;      // Not a Number\n\n// boolean — логический\nconst yes = true;\nconst no  = false;\n\n// null — намеренное отсутствие значения\nconst empty = null;\n\n// undefined — значение не задано\nlet notDefined;\nconsole.log(notDefined); // undefined\n\n// object — объект\nconst user = { name: \"Анна\", age: 25 };\n\n// array — массив (тоже объект)\nconst colors = [\"red\", \"green\", \"blue\"];\n\n// symbol — уникальный идентификатор\nconst id = Symbol(\"id\");</code></pre>\n\n<b>Проверка типов:</b>\n\n<pre><code class='language-javascript'>typeof \"текст\"   // \"string\"\ntypeof 42        // \"number\"\ntypeof true      // \"boolean\"\ntypeof undefined // \"undefined\"\ntypeof null      // \"object\" (историческая ошибка!)\ntypeof []        // \"object\"\ntypeof {}        // \"object\"\n\n// Правильная проверка массива\nArray.isArray([1, 2, 3])  // true\n\n// Проверка на null\nvalue === null     // true если null</code></pre>\n"
      },
      {
        "order": 3,
        "title": "Операторы и условия",
        "text": "<b>Операторы сравнения</b>\n\n<pre><code class='language-javascript'>// == сравнивает значение (с приведением типов) — ИЗБЕГАЙ\n5 == \"5\"   // true (строку привели к числу)\n\n// === сравнивает значение И тип — ИСПОЛЬЗУЙ\n5 === \"5\"  // false\n5 === 5    // true\nnull === undefined // false\n\n// Неравенство\n5 != \"5\"  // false (с приведением)\n5 !== \"5\" // true  (строго)\n\n// Числовые\n5 > 3    // true\n5 >= 5   // true\n3 < 5    // true</code></pre>\n\n<b>Логические операторы:</b>\n\n<pre><code class='language-javascript'>true && true   // true  (И)\ntrue && false  // false\ntrue || false  // true  (ИЛИ)\nfalse || false // false\n!true          // false (НЕ)\n\n// Short-circuit (ленивые вычисления)\nfalse && doSomething()  // doSomething НЕ вызовется\ntrue  || doSomething()  // doSomething НЕ вызовется\n\n// Nullish coalescing — запасное значение при null/undefined\nconst val = null ?? \"по умолчанию\"; // \"по умолчанию\"\nconst x   = 0    ?? \"по умолчанию\"; // 0 (не null!)\n\n// Optional chaining — безопасный доступ\nconst city = user?.address?.city; // не упадёт если нет address</code></pre>\n\n<b>Условные операторы:</b>\n\n<pre><code class='language-javascript'>const age = 20;\n\n// if / else if / else\nif (age >= 18) {\n  console.log(\"Совершеннолетний\");\n} else if (age >= 14) {\n  console.log(\"Подросток\");\n} else {\n  console.log(\"Ребёнок\");\n}\n\n// Тернарный оператор\nconst status = age >= 18 ? \"взрослый\" : \"ребёнок\";\n\n// Switch\nconst day = \"пн\";\nswitch (day) {\n  case \"пн\":\n  case \"вт\":\n    console.log(\"Начало недели\"); break;\n  case \"пт\":\n    console.log(\"Пятница!\"); break;\n  default:\n    console.log(\"Другой день\");\n}</code></pre>\n"
      },
      {
        "order": 4,
        "title": "Циклы",
        "text": "<b>Циклы — повторяем действия</b>\n\n<pre><code class='language-javascript'>// for — классический цикл со счётчиком\nfor (let i = 0; i < 5; i++) {\n  console.log(i); // 0 1 2 3 4\n}\n\n// Обратный отсчёт\nfor (let i = 5; i > 0; i--) {\n  console.log(i); // 5 4 3 2 1\n}\n\n// while — пока условие истинно\nlet count = 0;\nwhile (count < 3) {\n  console.log(count++); // 0 1 2\n}\n\n// do...while — выполнится хотя бы раз\nlet x = 10;\ndo {\n  console.log(x); // 10\n  x++;\n} while (x < 5);\n\n// for...of — по элементам массива/строки\nconst fruits = [\"яблоко\", \"банан\", \"груша\"];\nfor (const fruit of fruits) {\n  console.log(fruit);\n}\n\n// for...in — по ключам объекта\nconst user = { name: \"Анна\", age: 25 };\nfor (const key in user) {\n  console.log(key, user[key]);\n  // name Анна\n  // age  25\n}</code></pre>\n\n<b>Управление циклом:</b>\n\n<pre><code class='language-javascript'>// break — прервать цикл\nfor (let i = 0; i < 10; i++) {\n  if (i === 5) break;\n  console.log(i); // 0 1 2 3 4\n}\n\n// continue — перейти к следующей итерации\nfor (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  console.log(i); // 0 1 3 4\n}\n\n// Метки (редко нужны)\nouter: for (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (j === 1) break outer; // выйти из внешнего\n  }\n}</code></pre>\n"
      },
      {
        "order": 5,
        "title": "Функции",
        "text": "<b>Функции — многократно используемый код</b>\n\n<pre><code class='language-javascript'>// Объявление функции (hoisting — доступна до объявления)\nfunction greet(name) {\n  return `Привет, ${name}!`;\n}\n\n// Функциональное выражение\nconst greet = function(name) {\n  return `Привет, ${name}!`;\n};\n\n// Стрелочная функция (arrow function)\nconst greet = (name) => `Привет, ${name}!`;\n\n// Без параметров\nconst sayHi  = () => \"Привет!\";\n\n// С несколькими строками\nconst add = (a, b) => {\n  const result = a + b;\n  return result;\n};</code></pre>\n\n<b>Параметры функций:</b>\n\n<pre><code class='language-javascript'>// Значения по умолчанию\nfunction greet(name = \"Гость\") {\n  return `Привет, ${name}!`;\n}\ngreet();        // \"Привет, Гость!\"\ngreet(\"Анна\"); // \"Привет, Анна!\"\n\n// Деструктуризация в параметрах\nfunction printUser({ name, age }) {\n  console.log(`${name}, ${age} лет`);\n}\nprintUser({ name: \"Анна\", age: 25 });\n\n// rest-параметры\nfunction sum(...numbers) {\n  return numbers.reduce((total, n) => total + n, 0);\n}\nsum(1, 2, 3, 4); // 10</code></pre>\n\n<b>Замыкания (closures):</b>\n\n<pre><code class='language-javascript'>function makeCounter() {\n  let count = 0;          // переменная в замыкании\n  return () => ++count;   // функция имеет доступ к count\n}\n\nconst counter = makeCounter();\ncounter(); // 1\ncounter(); // 2\ncounter(); // 3\n\n// Создание приватных данных\nfunction createUser(name) {\n  let _age = 0;                           // приватное\n  return {\n    getName: () => name,\n    getAge:  () => _age,\n    setAge:  (age) => { _age = age; },\n  };\n}</code></pre>\n"
      },
      {
        "order": 6,
        "title": "Массивы",
        "text": "<b>Массивы — упорядоченные коллекции данных</b>\n\n<pre><code class='language-javascript'>// Создание\nconst arr = [1, 2, 3];\nconst arr2 = new Array(3);        // [empty x 3]\nconst arr3 = Array.from(\"abc\");   // ['a','b','c']\n\n// Доступ\narr[0]     // 1 (первый)\narr.at(-1) // 3 (последний)</code></pre>\n\n<b>Методы — изменяют оригинал:</b>\n\n<pre><code class='language-javascript'>const a = [1, 2, 3];\n\na.push(4);        // добавить в конец  → [1,2,3,4]\na.pop();          // убрать из конца   → [1,2,3]\na.unshift(0);     // добавить в начало → [0,1,2,3]\na.shift();        // убрать из начала  → [1,2,3]\na.reverse();      // перевернуть       → [3,2,1]\na.sort();         // сортировать       → [1,2,3]\na.sort((x, y) => y - x); // по убыванию\n\n// splice — удалить/вставить\na.splice(1, 1);       // удалить 1 элемент с индекса 1\na.splice(1, 0, 10);   // вставить 10 после индекса 1</code></pre>\n\n<b>Методы — возвращают новый массив:</b>\n\n<pre><code class='language-javascript'>const nums = [1, 2, 3, 4, 5];\n\n// map — преобразовать каждый\nnums.map(n => n * 2)          // [2,4,6,8,10]\n\n// filter — отфильтровать\nnums.filter(n => n % 2 === 0) // [2,4]\n\n// reduce — свернуть в одно значение\nnums.reduce((sum, n) => sum + n, 0) // 15\n\n// find — найти первый\nnums.find(n => n > 3)    // 4\nnums.findIndex(n => n > 3) // 3\n\n// some / every\nnums.some(n => n > 4)   // true (хоть один)\nnums.every(n => n > 0)  // true (все)\n\n// includes\nnums.includes(3)  // true\n\n// flat / flatMap\n[[1,2],[3,4]].flat()  // [1,2,3,4]\n\n// slice — выреза\nnums.slice(1, 3)  // [2,3]\n\n// concat / spread\n[...nums, 6, 7]   // [1,2,3,4,5,6,7]\n\n// join → строка\nnums.join(\", \")   // \"1, 2, 3, 4, 5\"</code></pre>\n"
      },
      {
        "order": 7,
        "title": "Объекты",
        "text": "<b>Объекты — наборы свойств</b>\n\n<pre><code class='language-javascript'>// Создание объекта\nconst user = {\n  name: \"Анна\",\n  age: 25,\n  isAdmin: false,\n  address: {\n    city: \"Москва\",\n    street: \"Ленина, 1\",\n  },\n  greet() {            // метод объекта\n    return `Привет, я ${this.name}`;\n  },\n};\n\n// Доступ к свойствам\nuser.name          // \"Анна\"\nuser[\"name\"]       // \"Анна\"\nuser.address.city  // \"Москва\"\n\n// Изменение\nuser.age = 26;\nuser[\"email\"] = \"anna@mail.ru\";\n\n// Удаление\ndelete user.isAdmin;\n\n// Проверка наличия свойства\n\"name\" in user          // true\nuser.hasOwnProperty(\"name\") // true</code></pre>\n\n<b>Деструктуризация:</b>\n\n<pre><code class='language-javascript'>const { name, age } = user;\nconst { name: userName } = user; // другое имя переменной\nconst { name, age = 18 } = user; // значение по умолчанию\n\n// Вложенная\nconst { address: { city } } = user;\n\n// В функции\nfunction show({ name, age }) {\n  console.log(name, age);\n}</code></pre>\n\n<b>Spread и Object methods:</b>\n\n<pre><code class='language-javascript'>// Копия объекта\nconst copy = { ...user };\n\n// Слияние объектов\nconst extended = { ...user, role: \"admin\" };\n\n// Object.keys / values / entries\nObject.keys(user)    // [\"name\", \"age\", ...]\nObject.values(user)  // [\"Анна\", 25, ...]\nObject.entries(user) // [[\"name\",\"Анна\"], ...]\n\n// Перебор\nfor (const [key, val] of Object.entries(user)) {\n  console.log(key, val);\n}\n\n// Object.assign\nconst target = Object.assign({}, user, { role: \"vip\" });\n\n// Заморозка (нельзя менять)\nObject.freeze(user);</code></pre>\n"
      },
      {
        "order": 8,
        "title": "DOM — поиск элементов",
        "text": "<b>DOM (Document Object Model) — дерево HTML в JavaScript</b>\n\n<pre><code class='language-javascript'>// querySelector — первый совпадающий элемент\nconst btn  = document.querySelector(\".button\");\nconst h1   = document.querySelector(\"h1\");\nconst nav  = document.querySelector(\"#nav a\");\n\n// querySelectorAll — все совпадающие (NodeList)\nconst btns  = document.querySelectorAll(\".button\");\nconst items = document.querySelectorAll(\"li\");\n\n// Перебор NodeList\nbtns.forEach(btn => console.log(btn));\n[...btns].map(btn => btn.textContent); // в массив\n\n// Устаревшие, но работают\ndocument.getElementById(\"header\");\ndocument.getElementsByClassName(\"card\"); // HTMLCollection\ndocument.getElementsByTagName(\"p\");\n\n// Навигация по DOM\nelement.parentElement\nelement.children           // дочерние элементы\nelement.firstElementChild\nelement.lastElementChild\nelement.nextElementSibling\nelement.previousElementSibling\n\n// closest — ищет вверх по дереву\nbtn.closest(\".card\")</code></pre>\n\n<b>Чтение информации об элементе:</b>\n\n<pre><code class='language-javascript'>const el = document.querySelector(\".card\");\n\n// Содержимое\nel.textContent  // только текст\nel.innerHTML    // HTML внутри\nel.outerHTML    // HTML вместе с самим элементом\n\n// Атрибуты\nel.getAttribute(\"href\")\nel.setAttribute(\"href\", \"/new\")\nel.removeAttribute(\"disabled\")\nel.hasAttribute(\"required\")\n\n// Классы\nel.className          // строка классов\nel.classList          // DOMTokenList\nel.classList.contains(\"active\")\nel.classList.length\n\n// Размеры и позиция\nel.offsetWidth   // ширина с border\nel.offsetHeight\nel.getBoundingClientRect() // { top, left, width, height, ... }</code></pre>\n"
      },
      {
        "order": 9,
        "title": "DOM — изменение страницы",
        "text": "<b>Изменяем DOM из JavaScript</b>\n\n<pre><code class='language-javascript'>const el = document.querySelector(\".card\");\n\n// Текст и HTML\nel.textContent = \"Новый текст\";\nel.innerHTML   = \"&lt;strong&gt;Жирный&lt;/strong&gt; текст\";\n\n// Стили\nel.style.color          = \"red\";\nel.style.backgroundColor = \"#f5f5f5\";\nel.style.display        = \"none\";    // скрыть\nel.style.cssText        = \"color:red; font-size:18px;\"; // несколько\n\n// Классы\nel.classList.add(\"active\");\nel.classList.remove(\"hidden\");\nel.classList.toggle(\"dark\");         // добавить/убрать\nel.classList.replace(\"old\", \"new\");\n\n// Атрибуты\nel.setAttribute(\"data-id\", \"42\");\nel.dataset.id            // читать data-id\nel.dataset.userName      // data-user-name</code></pre>\n\n<b>Создание и добавление элементов:</b>\n\n<pre><code class='language-javascript'>// Создать элемент\nconst div = document.createElement(\"div\");\ndiv.className = \"card\";\ndiv.textContent = \"Новая карточка\";\n\n// Добавить в DOM\ndocument.body.appendChild(div);    // в конец body\ndocument.body.prepend(div);        // в начало body\nel.after(div);                     // после el\nel.before(div);                    // до el\nel.append(div);                    // в конец el\n\n// Шаблонные строки → HTML\nconst card = document.createElement(\"div\");\ncard.innerHTML = `\n  &lt;h2&gt;Заголовок&lt;/h2&gt;\n  &lt;p&gt;Описание&lt;/p&gt;\n  &lt;button class=\"btn\"&gt;Кнопка&lt;/button&gt;\n`;\ndocument.body.append(card);\n\n// Удалить\nel.remove();\nel.parentElement.removeChild(el);\n\n// Клонировать\nconst clone = el.cloneNode(true); // true = с детьми</code></pre>\n"
      },
      {
        "order": 10,
        "title": "События",
        "text": "<b>События — реакция на действия пользователя</b>\n\n<pre><code class='language-javascript'>const btn = document.querySelector(\".btn\");\n\n// Добавить обработчик\nbtn.addEventListener(\"click\", function(event) {\n  console.log(\"Клик!\", event);\n});\n\n// Стрелочная функция\nbtn.addEventListener(\"click\", (e) => {\n  console.log(\"Цель:\", e.target);\n});\n\n// Удалить обработчик (нужна ссылка на функцию)\nconst handler = () => console.log(\"клик\");\nbtn.addEventListener(\"click\", handler);\nbtn.removeEventListener(\"click\", handler);</code></pre>\n\n<b>Популярные события:</b>\n\n<pre><code class='language-javascript'>// Мышь\nel.addEventListener(\"click\",      e => {});\nel.addEventListener(\"dblclick\",   e => {});\nel.addEventListener(\"mouseenter\", e => {}); // наведение (без всплытия)\nel.addEventListener(\"mouseleave\", e => {});\nel.addEventListener(\"mousemove\",  e => { console.log(e.clientX, e.clientY); });\nel.addEventListener(\"contextmenu\",e => { e.preventDefault(); }); // ПКМ\n\n// Клавиатура\ndocument.addEventListener(\"keydown\", e => {\n  console.log(e.key, e.code);\n  if (e.key === \"Enter\") { /* ... */ }\n  if (e.ctrlKey && e.key === \"s\") { e.preventDefault(); /* сохранить */ }\n});\n\n// Форма\nform.addEventListener(\"submit\",  e => { e.preventDefault(); });\ninput.addEventListener(\"input\",  e => { console.log(e.target.value); });\ninput.addEventListener(\"change\", e => {});\ninput.addEventListener(\"focus\",  e => {});\ninput.addEventListener(\"blur\",   e => {});\n\n// Документ\ndocument.addEventListener(\"DOMContentLoaded\", () => { /* DOM готов */ });\nwindow.addEventListener(\"load\",   () => { /* всё загружено */ });\nwindow.addEventListener(\"resize\", () => { console.log(window.innerWidth); });\nwindow.addEventListener(\"scroll\", () => { console.log(window.scrollY); });</code></pre>\n\n<b>Объект события:</b>\n\n<pre><code class='language-javascript'>btn.addEventListener(\"click\", (e) => {\n  e.target          // элемент, на котором произошло событие\n  e.currentTarget   // элемент с обработчиком\n  e.preventDefault() // отменить действие по умолчанию\n  e.stopPropagation() // остановить всплытие\n  e.clientX, e.clientY // координаты мыши\n  e.key, e.code    // нажатая клавиша\n});</code></pre>\n"
      },
      {
        "order": 11,
        "title": "Делегирование событий",
        "text": "<b>Всплытие и делегирование</b>\n\n<b>Всплытие (bubbling):</b> событие сначала происходит на элементе, потом поднимается к родителям.\n\n<pre><code class='language-javascript'>// Пример всплытия\ndocument.querySelector(\".card\").addEventListener(\"click\", (e) => {\n  console.log(\"card\");   // сработает при клике на кнопку внутри\n});\ndocument.querySelector(\".btn\").addEventListener(\"click\", (e) => {\n  console.log(\"btn\");    // сработает первым\n  e.stopPropagation();   // остановить всплытие вверх\n});</code></pre>\n\n<b>Делегирование — один обработчик для многих элементов:</b>\n\n<pre><code class='language-javascript'>// ❌ Плохо — по обработчику на каждую кнопку\ndocument.querySelectorAll(\".btn-delete\").forEach(btn => {\n  btn.addEventListener(\"click\", deleteItem);\n});\n\n// ✅ Хорошо — один обработчик на родителе\nconst list = document.querySelector(\".list\");\nlist.addEventListener(\"click\", (e) => {\n  // e.target — фактически нажатый элемент\n  if (e.target.classList.contains(\"btn-delete\")) {\n    const item = e.target.closest(\".list-item\");\n    item.remove();\n  }\n  if (e.target.classList.contains(\"btn-edit\")) {\n    const id = e.target.dataset.id;\n    editItem(id);\n  }\n});</code></pre>\n\n<b>Почему делегирование лучше:</b>\n• Работает для динамически добавленных элементов\n• Экономит память (один обработчик вместо сотни)\n• Проще поддерживать код\n\n<pre><code class='language-javascript'>// Практический пример: список задач\nconst taskList = document.querySelector(\"#tasks\");\n\ntaskList.addEventListener(\"click\", (e) => {\n  const task = e.target.closest(\".task\");\n  if (!task) return;\n\n  if (e.target.matches(\".btn-done\")) {\n    task.classList.toggle(\"completed\");\n  }\n  if (e.target.matches(\".btn-delete\")) {\n    task.remove();\n  }\n});</code></pre>\n"
      },
      {
        "order": 12,
        "title": "Асинхронность и Promise",
        "text": "<b>Асинхронность в JavaScript</b>\n\nJS однопоточный — выполняет один кусок кода за раз. Но долгие операции (запросы, таймеры) не блокируют поток.\n\n<b>Callback — устаревший подход:</b>\n\n<pre><code class='language-javascript'>// Таймеры\nsetTimeout(() => console.log(\"Через 1 сек\"), 1000);\nsetInterval(() => console.log(\"Каждые 2 сек\"), 2000);\nconst id = setInterval(...);\nclearInterval(id); // остановить\n\n// Callback hell — вложенность растёт\ngetData(function(data) {\n  processData(data, function(result) {\n    saveResult(result, function() {\n      // ещё глубже...\n    });\n  });\n});</code></pre>\n\n<b>Promise — обещание будущего результата:</b>\n\n<pre><code class='language-javascript'>// Создание промиса\nconst promise = new Promise((resolve, reject) => {\n  // выполнить асинхронную операцию\n  if (success) {\n    resolve(data);   // успех\n  } else {\n    reject(error);   // ошибка\n  }\n});\n\n// Использование\npromise\n  .then(data => console.log(\"Успех:\", data))\n  .catch(err => console.error(\"Ошибка:\", err))\n  .finally(() => console.log(\"В любом случае\"));\n\n// Параллельное выполнение\nPromise.all([fetch(\"/api/1\"), fetch(\"/api/2\")])\n  .then(([res1, res2]) => { /* оба готовы */ });\n\n// Гонка — первый результат\nPromise.race([slowRequest(), fastRequest()])\n  .then(result => console.log(\"Первый:\", result));\n\n// Всегда дождаться всех\nPromise.allSettled([p1, p2, p3])\n  .then(results => results.forEach(r => console.log(r.status)));</code></pre>\n"
      },
      {
        "order": 13,
        "title": "async/await и Fetch API",
        "text": "<b>async/await — удобный синтаксис для промисов</b>\n\n<pre><code class='language-javascript'>// async — функция всегда возвращает Promise\nasync function loadUser(id) {\n  // await — ждём результата промиса\n  const response = await fetch(`/api/users/${id}`);\n  const user = await response.json();\n  return user;\n}\n\n// Обработка ошибок\nasync function loadData() {\n  try {\n    const res  = await fetch(\"/api/data\");\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error(\"Ошибка:\", err.message);\n    return null;\n  } finally {\n    console.log(\"Запрос завершён\");\n  }\n}</code></pre>\n\n<b>Fetch API — запросы к серверу:</b>\n\n<pre><code class='language-javascript'>// GET — получить данные\nconst res   = await fetch(\"https://api.example.com/posts\");\nconst posts = await res.json();\n\n// POST — отправить данные\nconst response = await fetch(\"/api/users\", {\n  method:  \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body:    JSON.stringify({ name: \"Анна\", age: 25 }),\n});\nconst newUser = await response.json();\n\n// PUT — обновить\nawait fetch(`/api/users/${id}`, {\n  method:  \"PUT\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body:    JSON.stringify({ name: \"Анна Иванова\" }),\n});\n\n// DELETE — удалить\nawait fetch(`/api/users/${id}`, { method: \"DELETE\" });\n\n// Параллельные запросы\nconst [users, posts] = await Promise.all([\n  fetch(\"/api/users\").then(r => r.json()),\n  fetch(\"/api/posts\").then(r => r.json()),\n]);</code></pre>\n\n<b>Проверка ответа:</b>\n\n<pre><code class='language-javascript'>const res = await fetch(\"/api/data\");\n\nres.ok          // true если 200-299\nres.status      // 200, 404, 500...\nres.statusText  // \"OK\", \"Not Found\"...\n\nawait res.json()   // → объект\nawait res.text()   // → строка\nawait res.blob()   // → файл</code></pre>\n"
      },
      {
        "order": 14,
        "title": "LocalStorage и современный JS",
        "text": "<b>Web Storage — хранение данных в браузере</b>\n\n<pre><code class='language-javascript'>// localStorage — постоянное (не очищается при закрытии)\nlocalStorage.setItem(\"theme\", \"dark\");\nlocalStorage.setItem(\"user\", JSON.stringify({ name: \"Анна\" }));\n\nconst theme = localStorage.getItem(\"theme\"); // \"dark\"\nconst user  = JSON.parse(localStorage.getItem(\"user\"));\n\nlocalStorage.removeItem(\"theme\");\nlocalStorage.clear(); // очистить всё\n\n// sessionStorage — только до закрытия вкладки\nsessionStorage.setItem(\"step\", \"2\");\n\n// Проверка\nif (localStorage.getItem(\"token\")) { /* авторизован */ }</code></pre>\n\n<b>Современный синтаксис ES6+:</b>\n\n<pre><code class='language-javascript'>// Деструктуризация массива\nconst [first, second, ...rest] = [1, 2, 3, 4, 5];\nconst [, , third] = [1, 2, 3]; // пропуск элементов\n\n// Spread\nconst arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]\nMath.max(...arr1);             // 3\n\nconst obj1 = { a: 1 };\nconst obj2 = { ...obj1, b: 2 }; // { a:1, b:2 }\n\n// Шаблонные строки\nconst html = `\n  &lt;div class=\"card\"&gt;\n    &lt;h2&gt;${user.name}&lt;/h2&gt;\n    &lt;p&gt;${user.age} лет&lt;/p&gt;\n  &lt;/div&gt;\n`.trim();\n\n// Computed property names\nconst key = \"name\";\nconst obj = { [key]: \"Анна\" }; // { name: \"Анна\" }\n\n// Short property names\nconst name = \"Анна\", age = 25;\nconst user = { name, age }; // { name: \"Анна\", age: 25 }\n\n// Nullish assignment\nlet x = null;\nx ??= \"по умолчанию\"; // присвоить только если null/undefined\n\n// Logical assignment\nlet a = 0;\na ||= 10; // присвоить если falsy\na &&= 20; // присвоить если truthy</code></pre>\n"
      },
      {
        "order": 15,
        "title": "Итоги: мини-приложение на JS",
        "text": "<b>Собираем всё вместе — список задач</b>\n\n<pre><code class='language-javascript'>// ── Состояние приложения ─────────────────────\nlet tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\nlet nextId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;\n\n// ── Сохранение ───────────────────────────────\nfunction save() {\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n\n// ── Рендеринг ────────────────────────────────\nfunction render() {\n  const list = document.querySelector(\"#task-list\");\n  list.innerHTML = tasks.map(task => `\n    &lt;li class=\"task ${task.done ? 'done' : ''}\" data-id=\"${task.id}\"&gt;\n      &lt;span&gt;${task.text}&lt;/span&gt;\n      &lt;button class=\"btn-done\"&gt;✓&lt;/button&gt;\n      &lt;button class=\"btn-delete\"&gt;✕&lt;/button&gt;\n    &lt;/li&gt;\n  `).join(\"\");\n}\n\n// ── Добавление задачи ────────────────────────\ndocument.querySelector(\"#task-form\")\n  .addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const input = e.target.querySelector(\"input\");\n    const text = input.value.trim();\n    if (!text) return;\n    tasks.push({ id: nextId++, text, done: false });\n    save();\n    render();\n    input.value = \"\";\n    input.focus();\n  });\n\n// ── Делегирование (done / delete) ────────────\ndocument.querySelector(\"#task-list\")\n  .addEventListener(\"click\", (e) => {\n    const li = e.target.closest(\".task\");\n    if (!li) return;\n    const id = Number(li.dataset.id);\n\n    if (e.target.matches(\".btn-done\")) {\n      tasks = tasks.map(t =>\n        t.id === id ? { ...t, done: !t.done } : t\n      );\n    }\n    if (e.target.matches(\".btn-delete\")) {\n      tasks = tasks.filter(t => t.id !== id);\n    }\n    save();\n    render();\n  });\n\n// ── Инициализация ────────────────────────────\nrender();</code></pre>\n\n<b>✅ Что ты освоил в этом курсе:</b>\n• Переменные, типы данных, операторы\n• Условия, циклы, функции, замыкания\n• Массивы и объекты (все методы)\n• DOM: поиск, изменение, создание элементов\n• События и делегирование\n• Promise, async/await, Fetch API\n• LocalStorage и современный ES6+ синтаксис\n\n🚀 Следующий шаг — <b>React</b> или <b>Node.js</b>: выбери своё направление!\n"
      }
    ]
  },
  {
    "id": 6,
    "title": "Позиционирование",
    "description": "Позиционирование элементов в CSS — это практический курс, который научит вас управлять точным расположением блоков на экране, позволяя закреплять меню при прокрутке, накладывать элементы друг на друга или размещать их в любой точке страницы.",
    "emoji": "🎯",
    "language": "HTML CSS",
    "difficulty": "hard",
    "xp_reward": 700,
    "coins_reward": 350,
    "lessons": [
      {
        "order": 1,
        "title": "Что такое JavaScript",
        "text": "<b>JavaScript — язык программирования браузера</b>\n\nJS делает сайты интерактивными: реагирует на действия пользователя, меняет контент, отправляет запросы без перезагрузки страницы.\n\n<b>Где выполняется JavaScript:</b>\n• В браузере — любой сайт\n• На сервере — Node.js\n• В мобильных приложениях — React Native\n\n<b>Подключение скриптов:</b>\n\n<pre><code class='language-html'>&lt;!-- Внутри HTML --&gt;\n&lt;script&gt;\n  console.log(\"Привет из скрипта!\");\n&lt;/script&gt;\n\n&lt;!-- Внешний файл (рекомендуется) --&gt;\n&lt;script src=\"script.js\"&gt;&lt;/script&gt;\n\n&lt;!-- defer — выполнить после загрузки HTML --&gt;\n&lt;script src=\"script.js\" defer&gt;&lt;/script&gt;\n\n&lt;!-- async — выполнить как только загрузится --&gt;\n&lt;script src=\"analytics.js\" async&gt;&lt;/script&gt;</code></pre>\n\n<b>Первые шаги:</b>\n\n<pre><code class='language-javascript'>// Вывод в консоль браузера (F12 → Console)\nconsole.log(\"Привет, мир!\");\nconsole.log(42, true, [1,2,3]);\nconsole.error(\"Ошибка!\");\nconsole.warn(\"Предупреждение\");\nconsole.table([{name: \"Анна\", age: 25}]);\n\n// Диалоговые окна браузера\nalert(\"Сообщение\");\nconst name = prompt(\"Как тебя зовут?\");\nconst ok = confirm(\"Уверен?\"); // true или false</code></pre>\n\n💡 Всегда подключай JS перед <code>&lt;/body&gt;</code> или используй атрибут <code>defer</code>, чтобы HTML загружался раньше скрипта.\n"
      },
      {
        "order": 2,
        "title": "Переменные и типы данных",
        "text": "<b>Переменные — хранилища данных</b>\n\n<pre><code class='language-javascript'>// const — нельзя переназначить (используй по умолчанию)\nconst name = \"Анна\";\nconst age  = 25;\nconst PI   = 3.14159;\n\n// let — можно переназначить\nlet score = 0;\nscore = 100;         // OK\nscore += 50;         // score = 150\n\n// var — устаревший, не используй\nvar old = \"избегай\";</code></pre>\n\n<b>Типы данных:</b>\n\n<pre><code class='language-javascript'>// string — строка\nconst str1 = \"двойные кавычки\";\nconst str2 = 'одинарные кавычки';\nconst str3 = `шаблонная строка: ${name}, ${2 + 2}`;\nconst multiline = `Строка 1\nСтрока 2`;\n\n// number — число (целые и дробные)\nconst int   = 42;\nconst float = 3.14;\nconst neg   = -100;\nconst inf   = Infinity;\nconst nan   = NaN;      // Not a Number\n\n// boolean — логический\nconst yes = true;\nconst no  = false;\n\n// null — намеренное отсутствие значения\nconst empty = null;\n\n// undefined — значение не задано\nlet notDefined;\nconsole.log(notDefined); // undefined\n\n// object — объект\nconst user = { name: \"Анна\", age: 25 };\n\n// array — массив (тоже объект)\nconst colors = [\"red\", \"green\", \"blue\"];\n\n// symbol — уникальный идентификатор\nconst id = Symbol(\"id\");</code></pre>\n\n<b>Проверка типов:</b>\n\n<pre><code class='language-javascript'>typeof \"текст\"   // \"string\"\ntypeof 42        // \"number\"\ntypeof true      // \"boolean\"\ntypeof undefined // \"undefined\"\ntypeof null      // \"object\" (историческая ошибка!)\ntypeof []        // \"object\"\ntypeof {}        // \"object\"\n\n// Правильная проверка массива\nArray.isArray([1, 2, 3])  // true\n\n// Проверка на null\nvalue === null     // true если null</code></pre>\n"
      },
      {
        "order": 3,
        "title": "Операторы и условия",
        "text": "<b>Операторы сравнения</b>\n\n<pre><code class='language-javascript'>// == сравнивает значение (с приведением типов) — ИЗБЕГАЙ\n5 == \"5\"   // true (строку привели к числу)\n\n// === сравнивает значение И тип — ИСПОЛЬЗУЙ\n5 === \"5\"  // false\n5 === 5    // true\nnull === undefined // false\n\n// Неравенство\n5 != \"5\"  // false (с приведением)\n5 !== \"5\" // true  (строго)\n\n// Числовые\n5 > 3    // true\n5 >= 5   // true\n3 < 5    // true</code></pre>\n\n<b>Логические операторы:</b>\n\n<pre><code class='language-javascript'>true && true   // true  (И)\ntrue && false  // false\ntrue || false  // true  (ИЛИ)\nfalse || false // false\n!true          // false (НЕ)\n\n// Short-circuit (ленивые вычисления)\nfalse && doSomething()  // doSomething НЕ вызовется\ntrue  || doSomething()  // doSomething НЕ вызовется\n\n// Nullish coalescing — запасное значение при null/undefined\nconst val = null ?? \"по умолчанию\"; // \"по умолчанию\"\nconst x   = 0    ?? \"по умолчанию\"; // 0 (не null!)\n\n// Optional chaining — безопасный доступ\nconst city = user?.address?.city; // не упадёт если нет address</code></pre>\n\n<b>Условные операторы:</b>\n\n<pre><code class='language-javascript'>const age = 20;\n\n// if / else if / else\nif (age >= 18) {\n  console.log(\"Совершеннолетний\");\n} else if (age >= 14) {\n  console.log(\"Подросток\");\n} else {\n  console.log(\"Ребёнок\");\n}\n\n// Тернарный оператор\nconst status = age >= 18 ? \"взрослый\" : \"ребёнок\";\n\n// Switch\nconst day = \"пн\";\nswitch (day) {\n  case \"пн\":\n  case \"вт\":\n    console.log(\"Начало недели\"); break;\n  case \"пт\":\n    console.log(\"Пятница!\"); break;\n  default:\n    console.log(\"Другой день\");\n}</code></pre>\n"
      },
      {
        "order": 4,
        "title": "Циклы",
        "text": "<b>Циклы — повторяем действия</b>\n\n<pre><code class='language-javascript'>// for — классический цикл со счётчиком\nfor (let i = 0; i < 5; i++) {\n  console.log(i); // 0 1 2 3 4\n}\n\n// Обратный отсчёт\nfor (let i = 5; i > 0; i--) {\n  console.log(i); // 5 4 3 2 1\n}\n\n// while — пока условие истинно\nlet count = 0;\nwhile (count < 3) {\n  console.log(count++); // 0 1 2\n}\n\n// do...while — выполнится хотя бы раз\nlet x = 10;\ndo {\n  console.log(x); // 10\n  x++;\n} while (x < 5);\n\n// for...of — по элементам массива/строки\nconst fruits = [\"яблоко\", \"банан\", \"груша\"];\nfor (const fruit of fruits) {\n  console.log(fruit);\n}\n\n// for...in — по ключам объекта\nconst user = { name: \"Анна\", age: 25 };\nfor (const key in user) {\n  console.log(key, user[key]);\n  // name Анна\n  // age  25\n}</code></pre>\n\n<b>Управление циклом:</b>\n\n<pre><code class='language-javascript'>// break — прервать цикл\nfor (let i = 0; i < 10; i++) {\n  if (i === 5) break;\n  console.log(i); // 0 1 2 3 4\n}\n\n// continue — перейти к следующей итерации\nfor (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  console.log(i); // 0 1 3 4\n}\n\n// Метки (редко нужны)\nouter: for (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (j === 1) break outer; // выйти из внешнего\n  }\n}</code></pre>\n"
      },
      {
        "order": 5,
        "title": "Функции",
        "text": "<b>Функции — многократно используемый код</b>\n\n<pre><code class='language-javascript'>// Объявление функции (hoisting — доступна до объявления)\nfunction greet(name) {\n  return `Привет, ${name}!`;\n}\n\n// Функциональное выражение\nconst greet = function(name) {\n  return `Привет, ${name}!`;\n};\n\n// Стрелочная функция (arrow function)\nconst greet = (name) => `Привет, ${name}!`;\n\n// Без параметров\nconst sayHi  = () => \"Привет!\";\n\n// С несколькими строками\nconst add = (a, b) => {\n  const result = a + b;\n  return result;\n};</code></pre>\n\n<b>Параметры функций:</b>\n\n<pre><code class='language-javascript'>// Значения по умолчанию\nfunction greet(name = \"Гость\") {\n  return `Привет, ${name}!`;\n}\ngreet();        // \"Привет, Гость!\"\ngreet(\"Анна\"); // \"Привет, Анна!\"\n\n// Деструктуризация в параметрах\nfunction printUser({ name, age }) {\n  console.log(`${name}, ${age} лет`);\n}\nprintUser({ name: \"Анна\", age: 25 });\n\n// rest-параметры\nfunction sum(...numbers) {\n  return numbers.reduce((total, n) => total + n, 0);\n}\nsum(1, 2, 3, 4); // 10</code></pre>\n\n<b>Замыкания (closures):</b>\n\n<pre><code class='language-javascript'>function makeCounter() {\n  let count = 0;          // переменная в замыкании\n  return () => ++count;   // функция имеет доступ к count\n}\n\nconst counter = makeCounter();\ncounter(); // 1\ncounter(); // 2\ncounter(); // 3\n\n// Создание приватных данных\nfunction createUser(name) {\n  let _age = 0;                           // приватное\n  return {\n    getName: () => name,\n    getAge:  () => _age,\n    setAge:  (age) => { _age = age; },\n  };\n}</code></pre>\n"
      },
      {
        "order": 6,
        "title": "Массивы",
        "text": "<b>Массивы — упорядоченные коллекции данных</b>\n\n<pre><code class='language-javascript'>// Создание\nconst arr = [1, 2, 3];\nconst arr2 = new Array(3);        // [empty x 3]\nconst arr3 = Array.from(\"abc\");   // ['a','b','c']\n\n// Доступ\narr[0]     // 1 (первый)\narr.at(-1) // 3 (последний)</code></pre>\n\n<b>Методы — изменяют оригинал:</b>\n\n<pre><code class='language-javascript'>const a = [1, 2, 3];\n\na.push(4);        // добавить в конец  → [1,2,3,4]\na.pop();          // убрать из конца   → [1,2,3]\na.unshift(0);     // добавить в начало → [0,1,2,3]\na.shift();        // убрать из начала  → [1,2,3]\na.reverse();      // перевернуть       → [3,2,1]\na.sort();         // сортировать       → [1,2,3]\na.sort((x, y) => y - x); // по убыванию\n\n// splice — удалить/вставить\na.splice(1, 1);       // удалить 1 элемент с индекса 1\na.splice(1, 0, 10);   // вставить 10 после индекса 1</code></pre>\n\n<b>Методы — возвращают новый массив:</b>\n\n<pre><code class='language-javascript'>const nums = [1, 2, 3, 4, 5];\n\n// map — преобразовать каждый\nnums.map(n => n * 2)          // [2,4,6,8,10]\n\n// filter — отфильтровать\nnums.filter(n => n % 2 === 0) // [2,4]\n\n// reduce — свернуть в одно значение\nnums.reduce((sum, n) => sum + n, 0) // 15\n\n// find — найти первый\nnums.find(n => n > 3)    // 4\nnums.findIndex(n => n > 3) // 3\n\n// some / every\nnums.some(n => n > 4)   // true (хоть один)\nnums.every(n => n > 0)  // true (все)\n\n// includes\nnums.includes(3)  // true\n\n// flat / flatMap\n[[1,2],[3,4]].flat()  // [1,2,3,4]\n\n// slice — выреза\nnums.slice(1, 3)  // [2,3]\n\n// concat / spread\n[...nums, 6, 7]   // [1,2,3,4,5,6,7]\n\n// join → строка\nnums.join(\", \")   // \"1, 2, 3, 4, 5\"</code></pre>\n"
      },
      {
        "order": 7,
        "title": "Объекты",
        "text": "<b>Объекты — наборы свойств</b>\n\n<pre><code class='language-javascript'>// Создание объекта\nconst user = {\n  name: \"Анна\",\n  age: 25,\n  isAdmin: false,\n  address: {\n    city: \"Москва\",\n    street: \"Ленина, 1\",\n  },\n  greet() {            // метод объекта\n    return `Привет, я ${this.name}`;\n  },\n};\n\n// Доступ к свойствам\nuser.name          // \"Анна\"\nuser[\"name\"]       // \"Анна\"\nuser.address.city  // \"Москва\"\n\n// Изменение\nuser.age = 26;\nuser[\"email\"] = \"anna@mail.ru\";\n\n// Удаление\ndelete user.isAdmin;\n\n// Проверка наличия свойства\n\"name\" in user          // true\nuser.hasOwnProperty(\"name\") // true</code></pre>\n\n<b>Деструктуризация:</b>\n\n<pre><code class='language-javascript'>const { name, age } = user;\nconst { name: userName } = user; // другое имя переменной\nconst { name, age = 18 } = user; // значение по умолчанию\n\n// Вложенная\nconst { address: { city } } = user;\n\n// В функции\nfunction show({ name, age }) {\n  console.log(name, age);\n}</code></pre>\n\n<b>Spread и Object methods:</b>\n\n<pre><code class='language-javascript'>// Копия объекта\nconst copy = { ...user };\n\n// Слияние объектов\nconst extended = { ...user, role: \"admin\" };\n\n// Object.keys / values / entries\nObject.keys(user)    // [\"name\", \"age\", ...]\nObject.values(user)  // [\"Анна\", 25, ...]\nObject.entries(user) // [[\"name\",\"Анна\"], ...]\n\n// Перебор\nfor (const [key, val] of Object.entries(user)) {\n  console.log(key, val);\n}\n\n// Object.assign\nconst target = Object.assign({}, user, { role: \"vip\" });\n\n// Заморозка (нельзя менять)\nObject.freeze(user);</code></pre>\n"
      },
      {
        "order": 8,
        "title": "DOM — поиск элементов",
        "text": "<b>DOM (Document Object Model) — дерево HTML в JavaScript</b>\n\n<pre><code class='language-javascript'>// querySelector — первый совпадающий элемент\nconst btn  = document.querySelector(\".button\");\nconst h1   = document.querySelector(\"h1\");\nconst nav  = document.querySelector(\"#nav a\");\n\n// querySelectorAll — все совпадающие (NodeList)\nconst btns  = document.querySelectorAll(\".button\");\nconst items = document.querySelectorAll(\"li\");\n\n// Перебор NodeList\nbtns.forEach(btn => console.log(btn));\n[...btns].map(btn => btn.textContent); // в массив\n\n// Устаревшие, но работают\ndocument.getElementById(\"header\");\ndocument.getElementsByClassName(\"card\"); // HTMLCollection\ndocument.getElementsByTagName(\"p\");\n\n// Навигация по DOM\nelement.parentElement\nelement.children           // дочерние элементы\nelement.firstElementChild\nelement.lastElementChild\nelement.nextElementSibling\nelement.previousElementSibling\n\n// closest — ищет вверх по дереву\nbtn.closest(\".card\")</code></pre>\n\n<b>Чтение информации об элементе:</b>\n\n<pre><code class='language-javascript'>const el = document.querySelector(\".card\");\n\n// Содержимое\nel.textContent  // только текст\nel.innerHTML    // HTML внутри\nel.outerHTML    // HTML вместе с самим элементом\n\n// Атрибуты\nel.getAttribute(\"href\")\nel.setAttribute(\"href\", \"/new\")\nel.removeAttribute(\"disabled\")\nel.hasAttribute(\"required\")\n\n// Классы\nel.className          // строка классов\nel.classList          // DOMTokenList\nel.classList.contains(\"active\")\nel.classList.length\n\n// Размеры и позиция\nel.offsetWidth   // ширина с border\nel.offsetHeight\nel.getBoundingClientRect() // { top, left, width, height, ... }</code></pre>\n"
      },
      {
        "order": 9,
        "title": "DOM — изменение страницы",
        "text": "<b>Изменяем DOM из JavaScript</b>\n\n<pre><code class='language-javascript'>const el = document.querySelector(\".card\");\n\n// Текст и HTML\nel.textContent = \"Новый текст\";\nel.innerHTML   = \"&lt;strong&gt;Жирный&lt;/strong&gt; текст\";\n\n// Стили\nel.style.color          = \"red\";\nel.style.backgroundColor = \"#f5f5f5\";\nel.style.display        = \"none\";    // скрыть\nel.style.cssText        = \"color:red; font-size:18px;\"; // несколько\n\n// Классы\nel.classList.add(\"active\");\nel.classList.remove(\"hidden\");\nel.classList.toggle(\"dark\");         // добавить/убрать\nel.classList.replace(\"old\", \"new\");\n\n// Атрибуты\nel.setAttribute(\"data-id\", \"42\");\nel.dataset.id            // читать data-id\nel.dataset.userName      // data-user-name</code></pre>\n\n<b>Создание и добавление элементов:</b>\n\n<pre><code class='language-javascript'>// Создать элемент\nconst div = document.createElement(\"div\");\ndiv.className = \"card\";\ndiv.textContent = \"Новая карточка\";\n\n// Добавить в DOM\ndocument.body.appendChild(div);    // в конец body\ndocument.body.prepend(div);        // в начало body\nel.after(div);                     // после el\nel.before(div);                    // до el\nel.append(div);                    // в конец el\n\n// Шаблонные строки → HTML\nconst card = document.createElement(\"div\");\ncard.innerHTML = `\n  &lt;h2&gt;Заголовок&lt;/h2&gt;\n  &lt;p&gt;Описание&lt;/p&gt;\n  &lt;button class=\"btn\"&gt;Кнопка&lt;/button&gt;\n`;\ndocument.body.append(card);\n\n// Удалить\nel.remove();\nel.parentElement.removeChild(el);\n\n// Клонировать\nconst clone = el.cloneNode(true); // true = с детьми</code></pre>\n"
      },
      {
        "order": 10,
        "title": "События",
        "text": "<b>События — реакция на действия пользователя</b>\n\n<pre><code class='language-javascript'>const btn = document.querySelector(\".btn\");\n\n// Добавить обработчик\nbtn.addEventListener(\"click\", function(event) {\n  console.log(\"Клик!\", event);\n});\n\n// Стрелочная функция\nbtn.addEventListener(\"click\", (e) => {\n  console.log(\"Цель:\", e.target);\n});\n\n// Удалить обработчик (нужна ссылка на функцию)\nconst handler = () => console.log(\"клик\");\nbtn.addEventListener(\"click\", handler);\nbtn.removeEventListener(\"click\", handler);</code></pre>\n\n<b>Популярные события:</b>\n\n<pre><code class='language-javascript'>// Мышь\nel.addEventListener(\"click\",      e => {});\nel.addEventListener(\"dblclick\",   e => {});\nel.addEventListener(\"mouseenter\", e => {}); // наведение (без всплытия)\nel.addEventListener(\"mouseleave\", e => {});\nel.addEventListener(\"mousemove\",  e => { console.log(e.clientX, e.clientY); });\nel.addEventListener(\"contextmenu\",e => { e.preventDefault(); }); // ПКМ\n\n// Клавиатура\ndocument.addEventListener(\"keydown\", e => {\n  console.log(e.key, e.code);\n  if (e.key === \"Enter\") { /* ... */ }\n  if (e.ctrlKey && e.key === \"s\") { e.preventDefault(); /* сохранить */ }\n});\n\n// Форма\nform.addEventListener(\"submit\",  e => { e.preventDefault(); });\ninput.addEventListener(\"input\",  e => { console.log(e.target.value); });\ninput.addEventListener(\"change\", e => {});\ninput.addEventListener(\"focus\",  e => {});\ninput.addEventListener(\"blur\",   e => {});\n\n// Документ\ndocument.addEventListener(\"DOMContentLoaded\", () => { /* DOM готов */ });\nwindow.addEventListener(\"load\",   () => { /* всё загружено */ });\nwindow.addEventListener(\"resize\", () => { console.log(window.innerWidth); });\nwindow.addEventListener(\"scroll\", () => { console.log(window.scrollY); });</code></pre>\n\n<b>Объект события:</b>\n\n<pre><code class='language-javascript'>btn.addEventListener(\"click\", (e) => {\n  e.target          // элемент, на котором произошло событие\n  e.currentTarget   // элемент с обработчиком\n  e.preventDefault() // отменить действие по умолчанию\n  e.stopPropagation() // остановить всплытие\n  e.clientX, e.clientY // координаты мыши\n  e.key, e.code    // нажатая клавиша\n});</code></pre>\n"
      },
      {
        "order": 11,
        "title": "Делегирование событий",
        "text": "<b>Всплытие и делегирование</b>\n\n<b>Всплытие (bubbling):</b> событие сначала происходит на элементе, потом поднимается к родителям.\n\n<pre><code class='language-javascript'>// Пример всплытия\ndocument.querySelector(\".card\").addEventListener(\"click\", (e) => {\n  console.log(\"card\");   // сработает при клике на кнопку внутри\n});\ndocument.querySelector(\".btn\").addEventListener(\"click\", (e) => {\n  console.log(\"btn\");    // сработает первым\n  e.stopPropagation();   // остановить всплытие вверх\n});</code></pre>\n\n<b>Делегирование — один обработчик для многих элементов:</b>\n\n<pre><code class='language-javascript'>// ❌ Плохо — по обработчику на каждую кнопку\ndocument.querySelectorAll(\".btn-delete\").forEach(btn => {\n  btn.addEventListener(\"click\", deleteItem);\n});\n\n// ✅ Хорошо — один обработчик на родителе\nconst list = document.querySelector(\".list\");\nlist.addEventListener(\"click\", (e) => {\n  // e.target — фактически нажатый элемент\n  if (e.target.classList.contains(\"btn-delete\")) {\n    const item = e.target.closest(\".list-item\");\n    item.remove();\n  }\n  if (e.target.classList.contains(\"btn-edit\")) {\n    const id = e.target.dataset.id;\n    editItem(id);\n  }\n});</code></pre>\n\n<b>Почему делегирование лучше:</b>\n• Работает для динамически добавленных элементов\n• Экономит память (один обработчик вместо сотни)\n• Проще поддерживать код\n\n<pre><code class='language-javascript'>// Практический пример: список задач\nconst taskList = document.querySelector(\"#tasks\");\n\ntaskList.addEventListener(\"click\", (e) => {\n  const task = e.target.closest(\".task\");\n  if (!task) return;\n\n  if (e.target.matches(\".btn-done\")) {\n    task.classList.toggle(\"completed\");\n  }\n  if (e.target.matches(\".btn-delete\")) {\n    task.remove();\n  }\n});</code></pre>\n"
      },
      {
        "order": 12,
        "title": "Асинхронность и Promise",
        "text": "<b>Асинхронность в JavaScript</b>\n\nJS однопоточный — выполняет один кусок кода за раз. Но долгие операции (запросы, таймеры) не блокируют поток.\n\n<b>Callback — устаревший подход:</b>\n\n<pre><code class='language-javascript'>// Таймеры\nsetTimeout(() => console.log(\"Через 1 сек\"), 1000);\nsetInterval(() => console.log(\"Каждые 2 сек\"), 2000);\nconst id = setInterval(...);\nclearInterval(id); // остановить\n\n// Callback hell — вложенность растёт\ngetData(function(data) {\n  processData(data, function(result) {\n    saveResult(result, function() {\n      // ещё глубже...\n    });\n  });\n});</code></pre>\n\n<b>Promise — обещание будущего результата:</b>\n\n<pre><code class='language-javascript'>// Создание промиса\nconst promise = new Promise((resolve, reject) => {\n  // выполнить асинхронную операцию\n  if (success) {\n    resolve(data);   // успех\n  } else {\n    reject(error);   // ошибка\n  }\n});\n\n// Использование\npromise\n  .then(data => console.log(\"Успех:\", data))\n  .catch(err => console.error(\"Ошибка:\", err))\n  .finally(() => console.log(\"В любом случае\"));\n\n// Параллельное выполнение\nPromise.all([fetch(\"/api/1\"), fetch(\"/api/2\")])\n  .then(([res1, res2]) => { /* оба готовы */ });\n\n// Гонка — первый результат\nPromise.race([slowRequest(), fastRequest()])\n  .then(result => console.log(\"Первый:\", result));\n\n// Всегда дождаться всех\nPromise.allSettled([p1, p2, p3])\n  .then(results => results.forEach(r => console.log(r.status)));</code></pre>\n"
      },
      {
        "order": 13,
        "title": "async/await и Fetch API",
        "text": "<b>async/await — удобный синтаксис для промисов</b>\n\n<pre><code class='language-javascript'>// async — функция всегда возвращает Promise\nasync function loadUser(id) {\n  // await — ждём результата промиса\n  const response = await fetch(`/api/users/${id}`);\n  const user = await response.json();\n  return user;\n}\n\n// Обработка ошибок\nasync function loadData() {\n  try {\n    const res  = await fetch(\"/api/data\");\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error(\"Ошибка:\", err.message);\n    return null;\n  } finally {\n    console.log(\"Запрос завершён\");\n  }\n}</code></pre>\n\n<b>Fetch API — запросы к серверу:</b>\n\n<pre><code class='language-javascript'>// GET — получить данные\nconst res   = await fetch(\"https://api.example.com/posts\");\nconst posts = await res.json();\n\n// POST — отправить данные\nconst response = await fetch(\"/api/users\", {\n  method:  \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body:    JSON.stringify({ name: \"Анна\", age: 25 }),\n});\nconst newUser = await response.json();\n\n// PUT — обновить\nawait fetch(`/api/users/${id}`, {\n  method:  \"PUT\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body:    JSON.stringify({ name: \"Анна Иванова\" }),\n});\n\n// DELETE — удалить\nawait fetch(`/api/users/${id}`, { method: \"DELETE\" });\n\n// Параллельные запросы\nconst [users, posts] = await Promise.all([\n  fetch(\"/api/users\").then(r => r.json()),\n  fetch(\"/api/posts\").then(r => r.json()),\n]);</code></pre>\n\n<b>Проверка ответа:</b>\n\n<pre><code class='language-javascript'>const res = await fetch(\"/api/data\");\n\nres.ok          // true если 200-299\nres.status      // 200, 404, 500...\nres.statusText  // \"OK\", \"Not Found\"...\n\nawait res.json()   // → объект\nawait res.text()   // → строка\nawait res.blob()   // → файл</code></pre>\n"
      },
      {
        "order": 14,
        "title": "LocalStorage и современный JS",
        "text": "<b>Web Storage — хранение данных в браузере</b>\n\n<pre><code class='language-javascript'>// localStorage — постоянное (не очищается при закрытии)\nlocalStorage.setItem(\"theme\", \"dark\");\nlocalStorage.setItem(\"user\", JSON.stringify({ name: \"Анна\" }));\n\nconst theme = localStorage.getItem(\"theme\"); // \"dark\"\nconst user  = JSON.parse(localStorage.getItem(\"user\"));\n\nlocalStorage.removeItem(\"theme\");\nlocalStorage.clear(); // очистить всё\n\n// sessionStorage — только до закрытия вкладки\nsessionStorage.setItem(\"step\", \"2\");\n\n// Проверка\nif (localStorage.getItem(\"token\")) { /* авторизован */ }</code></pre>\n\n<b>Современный синтаксис ES6+:</b>\n\n<pre><code class='language-javascript'>// Деструктуризация массива\nconst [first, second, ...rest] = [1, 2, 3, 4, 5];\nconst [, , third] = [1, 2, 3]; // пропуск элементов\n\n// Spread\nconst arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]\nMath.max(...arr1);             // 3\n\nconst obj1 = { a: 1 };\nconst obj2 = { ...obj1, b: 2 }; // { a:1, b:2 }\n\n// Шаблонные строки\nconst html = `\n  &lt;div class=\"card\"&gt;\n    &lt;h2&gt;${user.name}&lt;/h2&gt;\n    &lt;p&gt;${user.age} лет&lt;/p&gt;\n  &lt;/div&gt;\n`.trim();\n\n// Computed property names\nconst key = \"name\";\nconst obj = { [key]: \"Анна\" }; // { name: \"Анна\" }\n\n// Short property names\nconst name = \"Анна\", age = 25;\nconst user = { name, age }; // { name: \"Анна\", age: 25 }\n\n// Nullish assignment\nlet x = null;\nx ??= \"по умолчанию\"; // присвоить только если null/undefined\n\n// Logical assignment\nlet a = 0;\na ||= 10; // присвоить если falsy\na &&= 20; // присвоить если truthy</code></pre>\n"
      },
      {
        "order": 15,
        "title": "Итоги: мини-приложение на JS",
        "text": "<b>Собираем всё вместе — список задач</b>\n\n<pre><code class='language-javascript'>// ── Состояние приложения ─────────────────────\nlet tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\nlet nextId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;\n\n// ── Сохранение ───────────────────────────────\nfunction save() {\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n\n// ── Рендеринг ────────────────────────────────\nfunction render() {\n  const list = document.querySelector(\"#task-list\");\n  list.innerHTML = tasks.map(task => `\n    &lt;li class=\"task ${task.done ? 'done' : ''}\" data-id=\"${task.id}\"&gt;\n      &lt;span&gt;${task.text}&lt;/span&gt;\n      &lt;button class=\"btn-done\"&gt;✓&lt;/button&gt;\n      &lt;button class=\"btn-delete\"&gt;✕&lt;/button&gt;\n    &lt;/li&gt;\n  `).join(\"\");\n}\n\n// ── Добавление задачи ────────────────────────\ndocument.querySelector(\"#task-form\")\n  .addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const input = e.target.querySelector(\"input\");\n    const text = input.value.trim();\n    if (!text) return;\n    tasks.push({ id: nextId++, text, done: false });\n    save();\n    render();\n    input.value = \"\";\n    input.focus();\n  });\n\n// ── Делегирование (done / delete) ────────────\ndocument.querySelector(\"#task-list\")\n  .addEventListener(\"click\", (e) => {\n    const li = e.target.closest(\".task\");\n    if (!li) return;\n    const id = Number(li.dataset.id);\n\n    if (e.target.matches(\".btn-done\")) {\n      tasks = tasks.map(t =>\n        t.id === id ? { ...t, done: !t.done } : t\n      );\n    }\n    if (e.target.matches(\".btn-delete\")) {\n      tasks = tasks.filter(t => t.id !== id);\n    }\n    save();\n    render();\n  });\n\n// ── Инициализация ────────────────────────────\nrender();</code></pre>\n\n<b>✅ Что ты освоил в этом курсе:</b>\n• Переменные, типы данных, операторы\n• Условия, циклы, функции, замыкания\n• Массивы и объекты (все методы)\n• DOM: поиск, изменение, создание элементов\n• События и делегирование\n• Promise, async/await, Fetch API\n• LocalStorage и современный ES6+ синтаксис\n\n🚀 Следующий шаг — <b>React</b> или <b>Node.js</b>: выбери своё направление!\n"
      }
    ]
  },
  {
    "id": 7,
    "title": "Флоаты",
    "description": "Флоаты (Обтекание элементов в CSS) — это курс, который познакомит вас со свойством float и научит заставлять текст красиво обтекать картинки, а также покажет, как раньше с помощью этого инструмента верстали колонки сайтов и как правильно бороться с его «капризами».",
    "emoji": "🌊",
    "language": "HTML CSS",
    "difficulty": "hard",
    "xp_reward": 700,
    "coins_reward": 350,
    "lessons": [
      {
        "order": 1,
        "title": "Что такое JavaScript",
        "text": "<b>JavaScript — язык программирования браузера</b>\n\nJS делает сайты интерактивными: реагирует на действия пользователя, меняет контент, отправляет запросы без перезагрузки страницы.\n\n<b>Где выполняется JavaScript:</b>\n• В браузере — любой сайт\n• На сервере — Node.js\n• В мобильных приложениях — React Native\n\n<b>Подключение скриптов:</b>\n\n<pre><code class='language-html'>&lt;!-- Внутри HTML --&gt;\n&lt;script&gt;\n  console.log(\"Привет из скрипта!\");\n&lt;/script&gt;\n\n&lt;!-- Внешний файл (рекомендуется) --&gt;\n&lt;script src=\"script.js\"&gt;&lt;/script&gt;\n\n&lt;!-- defer — выполнить после загрузки HTML --&gt;\n&lt;script src=\"script.js\" defer&gt;&lt;/script&gt;\n\n&lt;!-- async — выполнить как только загрузится --&gt;\n&lt;script src=\"analytics.js\" async&gt;&lt;/script&gt;</code></pre>\n\n<b>Первые шаги:</b>\n\n<pre><code class='language-javascript'>// Вывод в консоль браузера (F12 → Console)\nconsole.log(\"Привет, мир!\");\nconsole.log(42, true, [1,2,3]);\nconsole.error(\"Ошибка!\");\nconsole.warn(\"Предупреждение\");\nconsole.table([{name: \"Анна\", age: 25}]);\n\n// Диалоговые окна браузера\nalert(\"Сообщение\");\nconst name = prompt(\"Как тебя зовут?\");\nconst ok = confirm(\"Уверен?\"); // true или false</code></pre>\n\n💡 Всегда подключай JS перед <code>&lt;/body&gt;</code> или используй атрибут <code>defer</code>, чтобы HTML загружался раньше скрипта.\n"
      },
      {
        "order": 2,
        "title": "Переменные и типы данных",
        "text": "<b>Переменные — хранилища данных</b>\n\n<pre><code class='language-javascript'>// const — нельзя переназначить (используй по умолчанию)\nconst name = \"Анна\";\nconst age  = 25;\nconst PI   = 3.14159;\n\n// let — можно переназначить\nlet score = 0;\nscore = 100;         // OK\nscore += 50;         // score = 150\n\n// var — устаревший, не используй\nvar old = \"избегай\";</code></pre>\n\n<b>Типы данных:</b>\n\n<pre><code class='language-javascript'>// string — строка\nconst str1 = \"двойные кавычки\";\nconst str2 = 'одинарные кавычки';\nconst str3 = `шаблонная строка: ${name}, ${2 + 2}`;\nconst multiline = `Строка 1\nСтрока 2`;\n\n// number — число (целые и дробные)\nconst int   = 42;\nconst float = 3.14;\nconst neg   = -100;\nconst inf   = Infinity;\nconst nan   = NaN;      // Not a Number\n\n// boolean — логический\nconst yes = true;\nconst no  = false;\n\n// null — намеренное отсутствие значения\nconst empty = null;\n\n// undefined — значение не задано\nlet notDefined;\nconsole.log(notDefined); // undefined\n\n// object — объект\nconst user = { name: \"Анна\", age: 25 };\n\n// array — массив (тоже объект)\nconst colors = [\"red\", \"green\", \"blue\"];\n\n// symbol — уникальный идентификатор\nconst id = Symbol(\"id\");</code></pre>\n\n<b>Проверка типов:</b>\n\n<pre><code class='language-javascript'>typeof \"текст\"   // \"string\"\ntypeof 42        // \"number\"\ntypeof true      // \"boolean\"\ntypeof undefined // \"undefined\"\ntypeof null      // \"object\" (историческая ошибка!)\ntypeof []        // \"object\"\ntypeof {}        // \"object\"\n\n// Правильная проверка массива\nArray.isArray([1, 2, 3])  // true\n\n// Проверка на null\nvalue === null     // true если null</code></pre>\n"
      },
      {
        "order": 3,
        "title": "Операторы и условия",
        "text": "<b>Операторы сравнения</b>\n\n<pre><code class='language-javascript'>// == сравнивает значение (с приведением типов) — ИЗБЕГАЙ\n5 == \"5\"   // true (строку привели к числу)\n\n// === сравнивает значение И тип — ИСПОЛЬЗУЙ\n5 === \"5\"  // false\n5 === 5    // true\nnull === undefined // false\n\n// Неравенство\n5 != \"5\"  // false (с приведением)\n5 !== \"5\" // true  (строго)\n\n// Числовые\n5 > 3    // true\n5 >= 5   // true\n3 < 5    // true</code></pre>\n\n<b>Логические операторы:</b>\n\n<pre><code class='language-javascript'>true && true   // true  (И)\ntrue && false  // false\ntrue || false  // true  (ИЛИ)\nfalse || false // false\n!true          // false (НЕ)\n\n// Short-circuit (ленивые вычисления)\nfalse && doSomething()  // doSomething НЕ вызовется\ntrue  || doSomething()  // doSomething НЕ вызовется\n\n// Nullish coalescing — запасное значение при null/undefined\nconst val = null ?? \"по умолчанию\"; // \"по умолчанию\"\nconst x   = 0    ?? \"по умолчанию\"; // 0 (не null!)\n\n// Optional chaining — безопасный доступ\nconst city = user?.address?.city; // не упадёт если нет address</code></pre>\n\n<b>Условные операторы:</b>\n\n<pre><code class='language-javascript'>const age = 20;\n\n// if / else if / else\nif (age >= 18) {\n  console.log(\"Совершеннолетний\");\n} else if (age >= 14) {\n  console.log(\"Подросток\");\n} else {\n  console.log(\"Ребёнок\");\n}\n\n// Тернарный оператор\nconst status = age >= 18 ? \"взрослый\" : \"ребёнок\";\n\n// Switch\nconst day = \"пн\";\nswitch (day) {\n  case \"пн\":\n  case \"вт\":\n    console.log(\"Начало недели\"); break;\n  case \"пт\":\n    console.log(\"Пятница!\"); break;\n  default:\n    console.log(\"Другой день\");\n}</code></pre>\n"
      },
      {
        "order": 4,
        "title": "Циклы",
        "text": "<b>Циклы — повторяем действия</b>\n\n<pre><code class='language-javascript'>// for — классический цикл со счётчиком\nfor (let i = 0; i < 5; i++) {\n  console.log(i); // 0 1 2 3 4\n}\n\n// Обратный отсчёт\nfor (let i = 5; i > 0; i--) {\n  console.log(i); // 5 4 3 2 1\n}\n\n// while — пока условие истинно\nlet count = 0;\nwhile (count < 3) {\n  console.log(count++); // 0 1 2\n}\n\n// do...while — выполнится хотя бы раз\nlet x = 10;\ndo {\n  console.log(x); // 10\n  x++;\n} while (x < 5);\n\n// for...of — по элементам массива/строки\nconst fruits = [\"яблоко\", \"банан\", \"груша\"];\nfor (const fruit of fruits) {\n  console.log(fruit);\n}\n\n// for...in — по ключам объекта\nconst user = { name: \"Анна\", age: 25 };\nfor (const key in user) {\n  console.log(key, user[key]);\n  // name Анна\n  // age  25\n}</code></pre>\n\n<b>Управление циклом:</b>\n\n<pre><code class='language-javascript'>// break — прервать цикл\nfor (let i = 0; i < 10; i++) {\n  if (i === 5) break;\n  console.log(i); // 0 1 2 3 4\n}\n\n// continue — перейти к следующей итерации\nfor (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  console.log(i); // 0 1 3 4\n}\n\n// Метки (редко нужны)\nouter: for (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (j === 1) break outer; // выйти из внешнего\n  }\n}</code></pre>\n"
      },
      {
        "order": 5,
        "title": "Функции",
        "text": "<b>Функции — многократно используемый код</b>\n\n<pre><code class='language-javascript'>// Объявление функции (hoisting — доступна до объявления)\nfunction greet(name) {\n  return `Привет, ${name}!`;\n}\n\n// Функциональное выражение\nconst greet = function(name) {\n  return `Привет, ${name}!`;\n};\n\n// Стрелочная функция (arrow function)\nconst greet = (name) => `Привет, ${name}!`;\n\n// Без параметров\nconst sayHi  = () => \"Привет!\";\n\n// С несколькими строками\nconst add = (a, b) => {\n  const result = a + b;\n  return result;\n};</code></pre>\n\n<b>Параметры функций:</b>\n\n<pre><code class='language-javascript'>// Значения по умолчанию\nfunction greet(name = \"Гость\") {\n  return `Привет, ${name}!`;\n}\ngreet();        // \"Привет, Гость!\"\ngreet(\"Анна\"); // \"Привет, Анна!\"\n\n// Деструктуризация в параметрах\nfunction printUser({ name, age }) {\n  console.log(`${name}, ${age} лет`);\n}\nprintUser({ name: \"Анна\", age: 25 });\n\n// rest-параметры\nfunction sum(...numbers) {\n  return numbers.reduce((total, n) => total + n, 0);\n}\nsum(1, 2, 3, 4); // 10</code></pre>\n\n<b>Замыкания (closures):</b>\n\n<pre><code class='language-javascript'>function makeCounter() {\n  let count = 0;          // переменная в замыкании\n  return () => ++count;   // функция имеет доступ к count\n}\n\nconst counter = makeCounter();\ncounter(); // 1\ncounter(); // 2\ncounter(); // 3\n\n// Создание приватных данных\nfunction createUser(name) {\n  let _age = 0;                           // приватное\n  return {\n    getName: () => name,\n    getAge:  () => _age,\n    setAge:  (age) => { _age = age; },\n  };\n}</code></pre>\n"
      },
      {
        "order": 6,
        "title": "Массивы",
        "text": "<b>Массивы — упорядоченные коллекции данных</b>\n\n<pre><code class='language-javascript'>// Создание\nconst arr = [1, 2, 3];\nconst arr2 = new Array(3);        // [empty x 3]\nconst arr3 = Array.from(\"abc\");   // ['a','b','c']\n\n// Доступ\narr[0]     // 1 (первый)\narr.at(-1) // 3 (последний)</code></pre>\n\n<b>Методы — изменяют оригинал:</b>\n\n<pre><code class='language-javascript'>const a = [1, 2, 3];\n\na.push(4);        // добавить в конец  → [1,2,3,4]\na.pop();          // убрать из конца   → [1,2,3]\na.unshift(0);     // добавить в начало → [0,1,2,3]\na.shift();        // убрать из начала  → [1,2,3]\na.reverse();      // перевернуть       → [3,2,1]\na.sort();         // сортировать       → [1,2,3]\na.sort((x, y) => y - x); // по убыванию\n\n// splice — удалить/вставить\na.splice(1, 1);       // удалить 1 элемент с индекса 1\na.splice(1, 0, 10);   // вставить 10 после индекса 1</code></pre>\n\n<b>Методы — возвращают новый массив:</b>\n\n<pre><code class='language-javascript'>const nums = [1, 2, 3, 4, 5];\n\n// map — преобразовать каждый\nnums.map(n => n * 2)          // [2,4,6,8,10]\n\n// filter — отфильтровать\nnums.filter(n => n % 2 === 0) // [2,4]\n\n// reduce — свернуть в одно значение\nnums.reduce((sum, n) => sum + n, 0) // 15\n\n// find — найти первый\nnums.find(n => n > 3)    // 4\nnums.findIndex(n => n > 3) // 3\n\n// some / every\nnums.some(n => n > 4)   // true (хоть один)\nnums.every(n => n > 0)  // true (все)\n\n// includes\nnums.includes(3)  // true\n\n// flat / flatMap\n[[1,2],[3,4]].flat()  // [1,2,3,4]\n\n// slice — выреза\nnums.slice(1, 3)  // [2,3]\n\n// concat / spread\n[...nums, 6, 7]   // [1,2,3,4,5,6,7]\n\n// join → строка\nnums.join(\", \")   // \"1, 2, 3, 4, 5\"</code></pre>\n"
      },
      {
        "order": 7,
        "title": "Объекты",
        "text": "<b>Объекты — наборы свойств</b>\n\n<pre><code class='language-javascript'>// Создание объекта\nconst user = {\n  name: \"Анна\",\n  age: 25,\n  isAdmin: false,\n  address: {\n    city: \"Москва\",\n    street: \"Ленина, 1\",\n  },\n  greet() {            // метод объекта\n    return `Привет, я ${this.name}`;\n  },\n};\n\n// Доступ к свойствам\nuser.name          // \"Анна\"\nuser[\"name\"]       // \"Анна\"\nuser.address.city  // \"Москва\"\n\n// Изменение\nuser.age = 26;\nuser[\"email\"] = \"anna@mail.ru\";\n\n// Удаление\ndelete user.isAdmin;\n\n// Проверка наличия свойства\n\"name\" in user          // true\nuser.hasOwnProperty(\"name\") // true</code></pre>\n\n<b>Деструктуризация:</b>\n\n<pre><code class='language-javascript'>const { name, age } = user;\nconst { name: userName } = user; // другое имя переменной\nconst { name, age = 18 } = user; // значение по умолчанию\n\n// Вложенная\nconst { address: { city } } = user;\n\n// В функции\nfunction show({ name, age }) {\n  console.log(name, age);\n}</code></pre>\n\n<b>Spread и Object methods:</b>\n\n<pre><code class='language-javascript'>// Копия объекта\nconst copy = { ...user };\n\n// Слияние объектов\nconst extended = { ...user, role: \"admin\" };\n\n// Object.keys / values / entries\nObject.keys(user)    // [\"name\", \"age\", ...]\nObject.values(user)  // [\"Анна\", 25, ...]\nObject.entries(user) // [[\"name\",\"Анна\"], ...]\n\n// Перебор\nfor (const [key, val] of Object.entries(user)) {\n  console.log(key, val);\n}\n\n// Object.assign\nconst target = Object.assign({}, user, { role: \"vip\" });\n\n// Заморозка (нельзя менять)\nObject.freeze(user);</code></pre>\n"
      },
      {
        "order": 8,
        "title": "DOM — поиск элементов",
        "text": "<b>DOM (Document Object Model) — дерево HTML в JavaScript</b>\n\n<pre><code class='language-javascript'>// querySelector — первый совпадающий элемент\nconst btn  = document.querySelector(\".button\");\nconst h1   = document.querySelector(\"h1\");\nconst nav  = document.querySelector(\"#nav a\");\n\n// querySelectorAll — все совпадающие (NodeList)\nconst btns  = document.querySelectorAll(\".button\");\nconst items = document.querySelectorAll(\"li\");\n\n// Перебор NodeList\nbtns.forEach(btn => console.log(btn));\n[...btns].map(btn => btn.textContent); // в массив\n\n// Устаревшие, но работают\ndocument.getElementById(\"header\");\ndocument.getElementsByClassName(\"card\"); // HTMLCollection\ndocument.getElementsByTagName(\"p\");\n\n// Навигация по DOM\nelement.parentElement\nelement.children           // дочерние элементы\nelement.firstElementChild\nelement.lastElementChild\nelement.nextElementSibling\nelement.previousElementSibling\n\n// closest — ищет вверх по дереву\nbtn.closest(\".card\")</code></pre>\n\n<b>Чтение информации об элементе:</b>\n\n<pre><code class='language-javascript'>const el = document.querySelector(\".card\");\n\n// Содержимое\nel.textContent  // только текст\nel.innerHTML    // HTML внутри\nel.outerHTML    // HTML вместе с самим элементом\n\n// Атрибуты\nel.getAttribute(\"href\")\nel.setAttribute(\"href\", \"/new\")\nel.removeAttribute(\"disabled\")\nel.hasAttribute(\"required\")\n\n// Классы\nel.className          // строка классов\nel.classList          // DOMTokenList\nel.classList.contains(\"active\")\nel.classList.length\n\n// Размеры и позиция\nel.offsetWidth   // ширина с border\nel.offsetHeight\nel.getBoundingClientRect() // { top, left, width, height, ... }</code></pre>\n"
      },
      {
        "order": 9,
        "title": "DOM — изменение страницы",
        "text": "<b>Изменяем DOM из JavaScript</b>\n\n<pre><code class='language-javascript'>const el = document.querySelector(\".card\");\n\n// Текст и HTML\nel.textContent = \"Новый текст\";\nel.innerHTML   = \"&lt;strong&gt;Жирный&lt;/strong&gt; текст\";\n\n// Стили\nel.style.color          = \"red\";\nel.style.backgroundColor = \"#f5f5f5\";\nel.style.display        = \"none\";    // скрыть\nel.style.cssText        = \"color:red; font-size:18px;\"; // несколько\n\n// Классы\nel.classList.add(\"active\");\nel.classList.remove(\"hidden\");\nel.classList.toggle(\"dark\");         // добавить/убрать\nel.classList.replace(\"old\", \"new\");\n\n// Атрибуты\nel.setAttribute(\"data-id\", \"42\");\nel.dataset.id            // читать data-id\nel.dataset.userName      // data-user-name</code></pre>\n\n<b>Создание и добавление элементов:</b>\n\n<pre><code class='language-javascript'>// Создать элемент\nconst div = document.createElement(\"div\");\ndiv.className = \"card\";\ndiv.textContent = \"Новая карточка\";\n\n// Добавить в DOM\ndocument.body.appendChild(div);    // в конец body\ndocument.body.prepend(div);        // в начало body\nel.after(div);                     // после el\nel.before(div);                    // до el\nel.append(div);                    // в конец el\n\n// Шаблонные строки → HTML\nconst card = document.createElement(\"div\");\ncard.innerHTML = `\n  &lt;h2&gt;Заголовок&lt;/h2&gt;\n  &lt;p&gt;Описание&lt;/p&gt;\n  &lt;button class=\"btn\"&gt;Кнопка&lt;/button&gt;\n`;\ndocument.body.append(card);\n\n// Удалить\nel.remove();\nel.parentElement.removeChild(el);\n\n// Клонировать\nconst clone = el.cloneNode(true); // true = с детьми</code></pre>\n"
      },
      {
        "order": 10,
        "title": "События",
        "text": "<b>События — реакция на действия пользователя</b>\n\n<pre><code class='language-javascript'>const btn = document.querySelector(\".btn\");\n\n// Добавить обработчик\nbtn.addEventListener(\"click\", function(event) {\n  console.log(\"Клик!\", event);\n});\n\n// Стрелочная функция\nbtn.addEventListener(\"click\", (e) => {\n  console.log(\"Цель:\", e.target);\n});\n\n// Удалить обработчик (нужна ссылка на функцию)\nconst handler = () => console.log(\"клик\");\nbtn.addEventListener(\"click\", handler);\nbtn.removeEventListener(\"click\", handler);</code></pre>\n\n<b>Популярные события:</b>\n\n<pre><code class='language-javascript'>// Мышь\nel.addEventListener(\"click\",      e => {});\nel.addEventListener(\"dblclick\",   e => {});\nel.addEventListener(\"mouseenter\", e => {}); // наведение (без всплытия)\nel.addEventListener(\"mouseleave\", e => {});\nel.addEventListener(\"mousemove\",  e => { console.log(e.clientX, e.clientY); });\nel.addEventListener(\"contextmenu\",e => { e.preventDefault(); }); // ПКМ\n\n// Клавиатура\ndocument.addEventListener(\"keydown\", e => {\n  console.log(e.key, e.code);\n  if (e.key === \"Enter\") { /* ... */ }\n  if (e.ctrlKey && e.key === \"s\") { e.preventDefault(); /* сохранить */ }\n});\n\n// Форма\nform.addEventListener(\"submit\",  e => { e.preventDefault(); });\ninput.addEventListener(\"input\",  e => { console.log(e.target.value); });\ninput.addEventListener(\"change\", e => {});\ninput.addEventListener(\"focus\",  e => {});\ninput.addEventListener(\"blur\",   e => {});\n\n// Документ\ndocument.addEventListener(\"DOMContentLoaded\", () => { /* DOM готов */ });\nwindow.addEventListener(\"load\",   () => { /* всё загружено */ });\nwindow.addEventListener(\"resize\", () => { console.log(window.innerWidth); });\nwindow.addEventListener(\"scroll\", () => { console.log(window.scrollY); });</code></pre>\n\n<b>Объект события:</b>\n\n<pre><code class='language-javascript'>btn.addEventListener(\"click\", (e) => {\n  e.target          // элемент, на котором произошло событие\n  e.currentTarget   // элемент с обработчиком\n  e.preventDefault() // отменить действие по умолчанию\n  e.stopPropagation() // остановить всплытие\n  e.clientX, e.clientY // координаты мыши\n  e.key, e.code    // нажатая клавиша\n});</code></pre>\n"
      },
      {
        "order": 11,
        "title": "Делегирование событий",
        "text": "<b>Всплытие и делегирование</b>\n\n<b>Всплытие (bubbling):</b> событие сначала происходит на элементе, потом поднимается к родителям.\n\n<pre><code class='language-javascript'>// Пример всплытия\ndocument.querySelector(\".card\").addEventListener(\"click\", (e) => {\n  console.log(\"card\");   // сработает при клике на кнопку внутри\n});\ndocument.querySelector(\".btn\").addEventListener(\"click\", (e) => {\n  console.log(\"btn\");    // сработает первым\n  e.stopPropagation();   // остановить всплытие вверх\n});</code></pre>\n\n<b>Делегирование — один обработчик для многих элементов:</b>\n\n<pre><code class='language-javascript'>// ❌ Плохо — по обработчику на каждую кнопку\ndocument.querySelectorAll(\".btn-delete\").forEach(btn => {\n  btn.addEventListener(\"click\", deleteItem);\n});\n\n// ✅ Хорошо — один обработчик на родителе\nconst list = document.querySelector(\".list\");\nlist.addEventListener(\"click\", (e) => {\n  // e.target — фактически нажатый элемент\n  if (e.target.classList.contains(\"btn-delete\")) {\n    const item = e.target.closest(\".list-item\");\n    item.remove();\n  }\n  if (e.target.classList.contains(\"btn-edit\")) {\n    const id = e.target.dataset.id;\n    editItem(id);\n  }\n});</code></pre>\n\n<b>Почему делегирование лучше:</b>\n• Работает для динамически добавленных элементов\n• Экономит память (один обработчик вместо сотни)\n• Проще поддерживать код\n\n<pre><code class='language-javascript'>// Практический пример: список задач\nconst taskList = document.querySelector(\"#tasks\");\n\ntaskList.addEventListener(\"click\", (e) => {\n  const task = e.target.closest(\".task\");\n  if (!task) return;\n\n  if (e.target.matches(\".btn-done\")) {\n    task.classList.toggle(\"completed\");\n  }\n  if (e.target.matches(\".btn-delete\")) {\n    task.remove();\n  }\n});</code></pre>\n"
      },
      {
        "order": 12,
        "title": "Асинхронность и Promise",
        "text": "<b>Асинхронность в JavaScript</b>\n\nJS однопоточный — выполняет один кусок кода за раз. Но долгие операции (запросы, таймеры) не блокируют поток.\n\n<b>Callback — устаревший подход:</b>\n\n<pre><code class='language-javascript'>// Таймеры\nsetTimeout(() => console.log(\"Через 1 сек\"), 1000);\nsetInterval(() => console.log(\"Каждые 2 сек\"), 2000);\nconst id = setInterval(...);\nclearInterval(id); // остановить\n\n// Callback hell — вложенность растёт\ngetData(function(data) {\n  processData(data, function(result) {\n    saveResult(result, function() {\n      // ещё глубже...\n    });\n  });\n});</code></pre>\n\n<b>Promise — обещание будущего результата:</b>\n\n<pre><code class='language-javascript'>// Создание промиса\nconst promise = new Promise((resolve, reject) => {\n  // выполнить асинхронную операцию\n  if (success) {\n    resolve(data);   // успех\n  } else {\n    reject(error);   // ошибка\n  }\n});\n\n// Использование\npromise\n  .then(data => console.log(\"Успех:\", data))\n  .catch(err => console.error(\"Ошибка:\", err))\n  .finally(() => console.log(\"В любом случае\"));\n\n// Параллельное выполнение\nPromise.all([fetch(\"/api/1\"), fetch(\"/api/2\")])\n  .then(([res1, res2]) => { /* оба готовы */ });\n\n// Гонка — первый результат\nPromise.race([slowRequest(), fastRequest()])\n  .then(result => console.log(\"Первый:\", result));\n\n// Всегда дождаться всех\nPromise.allSettled([p1, p2, p3])\n  .then(results => results.forEach(r => console.log(r.status)));</code></pre>\n"
      },
      {
        "order": 13,
        "title": "async/await и Fetch API",
        "text": "<b>async/await — удобный синтаксис для промисов</b>\n\n<pre><code class='language-javascript'>// async — функция всегда возвращает Promise\nasync function loadUser(id) {\n  // await — ждём результата промиса\n  const response = await fetch(`/api/users/${id}`);\n  const user = await response.json();\n  return user;\n}\n\n// Обработка ошибок\nasync function loadData() {\n  try {\n    const res  = await fetch(\"/api/data\");\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error(\"Ошибка:\", err.message);\n    return null;\n  } finally {\n    console.log(\"Запрос завершён\");\n  }\n}</code></pre>\n\n<b>Fetch API — запросы к серверу:</b>\n\n<pre><code class='language-javascript'>// GET — получить данные\nconst res   = await fetch(\"https://api.example.com/posts\");\nconst posts = await res.json();\n\n// POST — отправить данные\nconst response = await fetch(\"/api/users\", {\n  method:  \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body:    JSON.stringify({ name: \"Анна\", age: 25 }),\n});\nconst newUser = await response.json();\n\n// PUT — обновить\nawait fetch(`/api/users/${id}`, {\n  method:  \"PUT\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body:    JSON.stringify({ name: \"Анна Иванова\" }),\n});\n\n// DELETE — удалить\nawait fetch(`/api/users/${id}`, { method: \"DELETE\" });\n\n// Параллельные запросы\nconst [users, posts] = await Promise.all([\n  fetch(\"/api/users\").then(r => r.json()),\n  fetch(\"/api/posts\").then(r => r.json()),\n]);</code></pre>\n\n<b>Проверка ответа:</b>\n\n<pre><code class='language-javascript'>const res = await fetch(\"/api/data\");\n\nres.ok          // true если 200-299\nres.status      // 200, 404, 500...\nres.statusText  // \"OK\", \"Not Found\"...\n\nawait res.json()   // → объект\nawait res.text()   // → строка\nawait res.blob()   // → файл</code></pre>\n"
      },
      {
        "order": 14,
        "title": "LocalStorage и современный JS",
        "text": "<b>Web Storage — хранение данных в браузере</b>\n\n<pre><code class='language-javascript'>// localStorage — постоянное (не очищается при закрытии)\nlocalStorage.setItem(\"theme\", \"dark\");\nlocalStorage.setItem(\"user\", JSON.stringify({ name: \"Анна\" }));\n\nconst theme = localStorage.getItem(\"theme\"); // \"dark\"\nconst user  = JSON.parse(localStorage.getItem(\"user\"));\n\nlocalStorage.removeItem(\"theme\");\nlocalStorage.clear(); // очистить всё\n\n// sessionStorage — только до закрытия вкладки\nsessionStorage.setItem(\"step\", \"2\");\n\n// Проверка\nif (localStorage.getItem(\"token\")) { /* авторизован */ }</code></pre>\n\n<b>Современный синтаксис ES6+:</b>\n\n<pre><code class='language-javascript'>// Деструктуризация массива\nconst [first, second, ...rest] = [1, 2, 3, 4, 5];\nconst [, , third] = [1, 2, 3]; // пропуск элементов\n\n// Spread\nconst arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]\nMath.max(...arr1);             // 3\n\nconst obj1 = { a: 1 };\nconst obj2 = { ...obj1, b: 2 }; // { a:1, b:2 }\n\n// Шаблонные строки\nconst html = `\n  &lt;div class=\"card\"&gt;\n    &lt;h2&gt;${user.name}&lt;/h2&gt;\n    &lt;p&gt;${user.age} лет&lt;/p&gt;\n  &lt;/div&gt;\n`.trim();\n\n// Computed property names\nconst key = \"name\";\nconst obj = { [key]: \"Анна\" }; // { name: \"Анна\" }\n\n// Short property names\nconst name = \"Анна\", age = 25;\nconst user = { name, age }; // { name: \"Анна\", age: 25 }\n\n// Nullish assignment\nlet x = null;\nx ??= \"по умолчанию\"; // присвоить только если null/undefined\n\n// Logical assignment\nlet a = 0;\na ||= 10; // присвоить если falsy\na &&= 20; // присвоить если truthy</code></pre>\n"
      },
      {
        "order": 15,
        "title": "Итоги: мини-приложение на JS",
        "text": "<b>Собираем всё вместе — список задач</b>\n\n<pre><code class='language-javascript'>// ── Состояние приложения ─────────────────────\nlet tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\nlet nextId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;\n\n// ── Сохранение ───────────────────────────────\nfunction save() {\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n\n// ── Рендеринг ────────────────────────────────\nfunction render() {\n  const list = document.querySelector(\"#task-list\");\n  list.innerHTML = tasks.map(task => `\n    &lt;li class=\"task ${task.done ? 'done' : ''}\" data-id=\"${task.id}\"&gt;\n      &lt;span&gt;${task.text}&lt;/span&gt;\n      &lt;button class=\"btn-done\"&gt;✓&lt;/button&gt;\n      &lt;button class=\"btn-delete\"&gt;✕&lt;/button&gt;\n    &lt;/li&gt;\n  `).join(\"\");\n}\n\n// ── Добавление задачи ────────────────────────\ndocument.querySelector(\"#task-form\")\n  .addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const input = e.target.querySelector(\"input\");\n    const text = input.value.trim();\n    if (!text) return;\n    tasks.push({ id: nextId++, text, done: false });\n    save();\n    render();\n    input.value = \"\";\n    input.focus();\n  });\n\n// ── Делегирование (done / delete) ────────────\ndocument.querySelector(\"#task-list\")\n  .addEventListener(\"click\", (e) => {\n    const li = e.target.closest(\".task\");\n    if (!li) return;\n    const id = Number(li.dataset.id);\n\n    if (e.target.matches(\".btn-done\")) {\n      tasks = tasks.map(t =>\n        t.id === id ? { ...t, done: !t.done } : t\n      );\n    }\n    if (e.target.matches(\".btn-delete\")) {\n      tasks = tasks.filter(t => t.id !== id);\n    }\n    save();\n    render();\n  });\n\n// ── Инициализация ────────────────────────────\nrender();</code></pre>\n\n<b>✅ Что ты освоил в этом курсе:</b>\n• Переменные, типы данных, операторы\n• Условия, циклы, функции, замыкания\n• Массивы и объекты (все методы)\n• DOM: поиск, изменение, создание элементов\n• События и делегирование\n• Promise, async/await, Fetch API\n• LocalStorage и современный ES6+ синтаксис\n\n🚀 Следующий шаг — <b>React</b> или <b>Node.js</b>: выбери своё направление!\n"
      }
    ]
  },
  {
    "id": 8,
    "title": "Флексы",
    "description": "Флексы (Flexbox в CSS) — это современный практический курс, который научит вас легко выравнивать элементы и распределять свободное пространство на странице, позволяя буквально в пару строчек кода создавать гибкие и адаптивные меню, сетки и блоки под любые экраны.",
    "emoji": "🧩",
    "language": "HTML CSS",
    "difficulty": "hard",
    "xp_reward": 700,
    "coins_reward": 350,
    "lessons": [
      {
        "order": 1,
        "title": "Что такое JavaScript",
        "text": "<b>JavaScript — язык программирования браузера</b>\n\nJS делает сайты интерактивными: реагирует на действия пользователя, меняет контент, отправляет запросы без перезагрузки страницы.\n\n<b>Где выполняется JavaScript:</b>\n• В браузере — любой сайт\n• На сервере — Node.js\n• В мобильных приложениях — React Native\n\n<b>Подключение скриптов:</b>\n\n<pre><code class='language-html'>&lt;!-- Внутри HTML --&gt;\n&lt;script&gt;\n  console.log(\"Привет из скрипта!\");\n&lt;/script&gt;\n\n&lt;!-- Внешний файл (рекомендуется) --&gt;\n&lt;script src=\"script.js\"&gt;&lt;/script&gt;\n\n&lt;!-- defer — выполнить после загрузки HTML --&gt;\n&lt;script src=\"script.js\" defer&gt;&lt;/script&gt;\n\n&lt;!-- async — выполнить как только загрузится --&gt;\n&lt;script src=\"analytics.js\" async&gt;&lt;/script&gt;</code></pre>\n\n<b>Первые шаги:</b>\n\n<pre><code class='language-javascript'>// Вывод в консоль браузера (F12 → Console)\nconsole.log(\"Привет, мир!\");\nconsole.log(42, true, [1,2,3]);\nconsole.error(\"Ошибка!\");\nconsole.warn(\"Предупреждение\");\nconsole.table([{name: \"Анна\", age: 25}]);\n\n// Диалоговые окна браузера\nalert(\"Сообщение\");\nconst name = prompt(\"Как тебя зовут?\");\nconst ok = confirm(\"Уверен?\"); // true или false</code></pre>\n\n💡 Всегда подключай JS перед <code>&lt;/body&gt;</code> или используй атрибут <code>defer</code>, чтобы HTML загружался раньше скрипта.\n"
      },
      {
        "order": 2,
        "title": "Переменные и типы данных",
        "text": "<b>Переменные — хранилища данных</b>\n\n<pre><code class='language-javascript'>// const — нельзя переназначить (используй по умолчанию)\nconst name = \"Анна\";\nconst age  = 25;\nconst PI   = 3.14159;\n\n// let — можно переназначить\nlet score = 0;\nscore = 100;         // OK\nscore += 50;         // score = 150\n\n// var — устаревший, не используй\nvar old = \"избегай\";</code></pre>\n\n<b>Типы данных:</b>\n\n<pre><code class='language-javascript'>// string — строка\nconst str1 = \"двойные кавычки\";\nconst str2 = 'одинарные кавычки';\nconst str3 = `шаблонная строка: ${name}, ${2 + 2}`;\nconst multiline = `Строка 1\nСтрока 2`;\n\n// number — число (целые и дробные)\nconst int   = 42;\nconst float = 3.14;\nconst neg   = -100;\nconst inf   = Infinity;\nconst nan   = NaN;      // Not a Number\n\n// boolean — логический\nconst yes = true;\nconst no  = false;\n\n// null — намеренное отсутствие значения\nconst empty = null;\n\n// undefined — значение не задано\nlet notDefined;\nconsole.log(notDefined); // undefined\n\n// object — объект\nconst user = { name: \"Анна\", age: 25 };\n\n// array — массив (тоже объект)\nconst colors = [\"red\", \"green\", \"blue\"];\n\n// symbol — уникальный идентификатор\nconst id = Symbol(\"id\");</code></pre>\n\n<b>Проверка типов:</b>\n\n<pre><code class='language-javascript'>typeof \"текст\"   // \"string\"\ntypeof 42        // \"number\"\ntypeof true      // \"boolean\"\ntypeof undefined // \"undefined\"\ntypeof null      // \"object\" (историческая ошибка!)\ntypeof []        // \"object\"\ntypeof {}        // \"object\"\n\n// Правильная проверка массива\nArray.isArray([1, 2, 3])  // true\n\n// Проверка на null\nvalue === null     // true если null</code></pre>\n"
      },
      {
        "order": 3,
        "title": "Операторы и условия",
        "text": "<b>Операторы сравнения</b>\n\n<pre><code class='language-javascript'>// == сравнивает значение (с приведением типов) — ИЗБЕГАЙ\n5 == \"5\"   // true (строку привели к числу)\n\n// === сравнивает значение И тип — ИСПОЛЬЗУЙ\n5 === \"5\"  // false\n5 === 5    // true\nnull === undefined // false\n\n// Неравенство\n5 != \"5\"  // false (с приведением)\n5 !== \"5\" // true  (строго)\n\n// Числовые\n5 > 3    // true\n5 >= 5   // true\n3 < 5    // true</code></pre>\n\n<b>Логические операторы:</b>\n\n<pre><code class='language-javascript'>true && true   // true  (И)\ntrue && false  // false\ntrue || false  // true  (ИЛИ)\nfalse || false // false\n!true          // false (НЕ)\n\n// Short-circuit (ленивые вычисления)\nfalse && doSomething()  // doSomething НЕ вызовется\ntrue  || doSomething()  // doSomething НЕ вызовется\n\n// Nullish coalescing — запасное значение при null/undefined\nconst val = null ?? \"по умолчанию\"; // \"по умолчанию\"\nconst x   = 0    ?? \"по умолчанию\"; // 0 (не null!)\n\n// Optional chaining — безопасный доступ\nconst city = user?.address?.city; // не упадёт если нет address</code></pre>\n\n<b>Условные операторы:</b>\n\n<pre><code class='language-javascript'>const age = 20;\n\n// if / else if / else\nif (age >= 18) {\n  console.log(\"Совершеннолетний\");\n} else if (age >= 14) {\n  console.log(\"Подросток\");\n} else {\n  console.log(\"Ребёнок\");\n}\n\n// Тернарный оператор\nconst status = age >= 18 ? \"взрослый\" : \"ребёнок\";\n\n// Switch\nconst day = \"пн\";\nswitch (day) {\n  case \"пн\":\n  case \"вт\":\n    console.log(\"Начало недели\"); break;\n  case \"пт\":\n    console.log(\"Пятница!\"); break;\n  default:\n    console.log(\"Другой день\");\n}</code></pre>\n"
      },
      {
        "order": 4,
        "title": "Циклы",
        "text": "<b>Циклы — повторяем действия</b>\n\n<pre><code class='language-javascript'>// for — классический цикл со счётчиком\nfor (let i = 0; i < 5; i++) {\n  console.log(i); // 0 1 2 3 4\n}\n\n// Обратный отсчёт\nfor (let i = 5; i > 0; i--) {\n  console.log(i); // 5 4 3 2 1\n}\n\n// while — пока условие истинно\nlet count = 0;\nwhile (count < 3) {\n  console.log(count++); // 0 1 2\n}\n\n// do...while — выполнится хотя бы раз\nlet x = 10;\ndo {\n  console.log(x); // 10\n  x++;\n} while (x < 5);\n\n// for...of — по элементам массива/строки\nconst fruits = [\"яблоко\", \"банан\", \"груша\"];\nfor (const fruit of fruits) {\n  console.log(fruit);\n}\n\n// for...in — по ключам объекта\nconst user = { name: \"Анна\", age: 25 };\nfor (const key in user) {\n  console.log(key, user[key]);\n  // name Анна\n  // age  25\n}</code></pre>\n\n<b>Управление циклом:</b>\n\n<pre><code class='language-javascript'>// break — прервать цикл\nfor (let i = 0; i < 10; i++) {\n  if (i === 5) break;\n  console.log(i); // 0 1 2 3 4\n}\n\n// continue — перейти к следующей итерации\nfor (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  console.log(i); // 0 1 3 4\n}\n\n// Метки (редко нужны)\nouter: for (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (j === 1) break outer; // выйти из внешнего\n  }\n}</code></pre>\n"
      },
      {
        "order": 5,
        "title": "Функции",
        "text": "<b>Функции — многократно используемый код</b>\n\n<pre><code class='language-javascript'>// Объявление функции (hoisting — доступна до объявления)\nfunction greet(name) {\n  return `Привет, ${name}!`;\n}\n\n// Функциональное выражение\nconst greet = function(name) {\n  return `Привет, ${name}!`;\n};\n\n// Стрелочная функция (arrow function)\nconst greet = (name) => `Привет, ${name}!`;\n\n// Без параметров\nconst sayHi  = () => \"Привет!\";\n\n// С несколькими строками\nconst add = (a, b) => {\n  const result = a + b;\n  return result;\n};</code></pre>\n\n<b>Параметры функций:</b>\n\n<pre><code class='language-javascript'>// Значения по умолчанию\nfunction greet(name = \"Гость\") {\n  return `Привет, ${name}!`;\n}\ngreet();        // \"Привет, Гость!\"\ngreet(\"Анна\"); // \"Привет, Анна!\"\n\n// Деструктуризация в параметрах\nfunction printUser({ name, age }) {\n  console.log(`${name}, ${age} лет`);\n}\nprintUser({ name: \"Анна\", age: 25 });\n\n// rest-параметры\nfunction sum(...numbers) {\n  return numbers.reduce((total, n) => total + n, 0);\n}\nsum(1, 2, 3, 4); // 10</code></pre>\n\n<b>Замыкания (closures):</b>\n\n<pre><code class='language-javascript'>function makeCounter() {\n  let count = 0;          // переменная в замыкании\n  return () => ++count;   // функция имеет доступ к count\n}\n\nconst counter = makeCounter();\ncounter(); // 1\ncounter(); // 2\ncounter(); // 3\n\n// Создание приватных данных\nfunction createUser(name) {\n  let _age = 0;                           // приватное\n  return {\n    getName: () => name,\n    getAge:  () => _age,\n    setAge:  (age) => { _age = age; },\n  };\n}</code></pre>\n"
      },
      {
        "order": 6,
        "title": "Массивы",
        "text": "<b>Массивы — упорядоченные коллекции данных</b>\n\n<pre><code class='language-javascript'>// Создание\nconst arr = [1, 2, 3];\nconst arr2 = new Array(3);        // [empty x 3]\nconst arr3 = Array.from(\"abc\");   // ['a','b','c']\n\n// Доступ\narr[0]     // 1 (первый)\narr.at(-1) // 3 (последний)</code></pre>\n\n<b>Методы — изменяют оригинал:</b>\n\n<pre><code class='language-javascript'>const a = [1, 2, 3];\n\na.push(4);        // добавить в конец  → [1,2,3,4]\na.pop();          // убрать из конца   → [1,2,3]\na.unshift(0);     // добавить в начало → [0,1,2,3]\na.shift();        // убрать из начала  → [1,2,3]\na.reverse();      // перевернуть       → [3,2,1]\na.sort();         // сортировать       → [1,2,3]\na.sort((x, y) => y - x); // по убыванию\n\n// splice — удалить/вставить\na.splice(1, 1);       // удалить 1 элемент с индекса 1\na.splice(1, 0, 10);   // вставить 10 после индекса 1</code></pre>\n\n<b>Методы — возвращают новый массив:</b>\n\n<pre><code class='language-javascript'>const nums = [1, 2, 3, 4, 5];\n\n// map — преобразовать каждый\nnums.map(n => n * 2)          // [2,4,6,8,10]\n\n// filter — отфильтровать\nnums.filter(n => n % 2 === 0) // [2,4]\n\n// reduce — свернуть в одно значение\nnums.reduce((sum, n) => sum + n, 0) // 15\n\n// find — найти первый\nnums.find(n => n > 3)    // 4\nnums.findIndex(n => n > 3) // 3\n\n// some / every\nnums.some(n => n > 4)   // true (хоть один)\nnums.every(n => n > 0)  // true (все)\n\n// includes\nnums.includes(3)  // true\n\n// flat / flatMap\n[[1,2],[3,4]].flat()  // [1,2,3,4]\n\n// slice — выреза\nnums.slice(1, 3)  // [2,3]\n\n// concat / spread\n[...nums, 6, 7]   // [1,2,3,4,5,6,7]\n\n// join → строка\nnums.join(\", \")   // \"1, 2, 3, 4, 5\"</code></pre>\n"
      },
      {
        "order": 7,
        "title": "Объекты",
        "text": "<b>Объекты — наборы свойств</b>\n\n<pre><code class='language-javascript'>// Создание объекта\nconst user = {\n  name: \"Анна\",\n  age: 25,\n  isAdmin: false,\n  address: {\n    city: \"Москва\",\n    street: \"Ленина, 1\",\n  },\n  greet() {            // метод объекта\n    return `Привет, я ${this.name}`;\n  },\n};\n\n// Доступ к свойствам\nuser.name          // \"Анна\"\nuser[\"name\"]       // \"Анна\"\nuser.address.city  // \"Москва\"\n\n// Изменение\nuser.age = 26;\nuser[\"email\"] = \"anna@mail.ru\";\n\n// Удаление\ndelete user.isAdmin;\n\n// Проверка наличия свойства\n\"name\" in user          // true\nuser.hasOwnProperty(\"name\") // true</code></pre>\n\n<b>Деструктуризация:</b>\n\n<pre><code class='language-javascript'>const { name, age } = user;\nconst { name: userName } = user; // другое имя переменной\nconst { name, age = 18 } = user; // значение по умолчанию\n\n// Вложенная\nconst { address: { city } } = user;\n\n// В функции\nfunction show({ name, age }) {\n  console.log(name, age);\n}</code></pre>\n\n<b>Spread и Object methods:</b>\n\n<pre><code class='language-javascript'>// Копия объекта\nconst copy = { ...user };\n\n// Слияние объектов\nconst extended = { ...user, role: \"admin\" };\n\n// Object.keys / values / entries\nObject.keys(user)    // [\"name\", \"age\", ...]\nObject.values(user)  // [\"Анна\", 25, ...]\nObject.entries(user) // [[\"name\",\"Анна\"], ...]\n\n// Перебор\nfor (const [key, val] of Object.entries(user)) {\n  console.log(key, val);\n}\n\n// Object.assign\nconst target = Object.assign({}, user, { role: \"vip\" });\n\n// Заморозка (нельзя менять)\nObject.freeze(user);</code></pre>\n"
      },
      {
        "order": 8,
        "title": "DOM — поиск элементов",
        "text": "<b>DOM (Document Object Model) — дерево HTML в JavaScript</b>\n\n<pre><code class='language-javascript'>// querySelector — первый совпадающий элемент\nconst btn  = document.querySelector(\".button\");\nconst h1   = document.querySelector(\"h1\");\nconst nav  = document.querySelector(\"#nav a\");\n\n// querySelectorAll — все совпадающие (NodeList)\nconst btns  = document.querySelectorAll(\".button\");\nconst items = document.querySelectorAll(\"li\");\n\n// Перебор NodeList\nbtns.forEach(btn => console.log(btn));\n[...btns].map(btn => btn.textContent); // в массив\n\n// Устаревшие, но работают\ndocument.getElementById(\"header\");\ndocument.getElementsByClassName(\"card\"); // HTMLCollection\ndocument.getElementsByTagName(\"p\");\n\n// Навигация по DOM\nelement.parentElement\nelement.children           // дочерние элементы\nelement.firstElementChild\nelement.lastElementChild\nelement.nextElementSibling\nelement.previousElementSibling\n\n// closest — ищет вверх по дереву\nbtn.closest(\".card\")</code></pre>\n\n<b>Чтение информации об элементе:</b>\n\n<pre><code class='language-javascript'>const el = document.querySelector(\".card\");\n\n// Содержимое\nel.textContent  // только текст\nel.innerHTML    // HTML внутри\nel.outerHTML    // HTML вместе с самим элементом\n\n// Атрибуты\nel.getAttribute(\"href\")\nel.setAttribute(\"href\", \"/new\")\nel.removeAttribute(\"disabled\")\nel.hasAttribute(\"required\")\n\n// Классы\nel.className          // строка классов\nel.classList          // DOMTokenList\nel.classList.contains(\"active\")\nel.classList.length\n\n// Размеры и позиция\nel.offsetWidth   // ширина с border\nel.offsetHeight\nel.getBoundingClientRect() // { top, left, width, height, ... }</code></pre>\n"
      },
      {
        "order": 9,
        "title": "DOM — изменение страницы",
        "text": "<b>Изменяем DOM из JavaScript</b>\n\n<pre><code class='language-javascript'>const el = document.querySelector(\".card\");\n\n// Текст и HTML\nel.textContent = \"Новый текст\";\nel.innerHTML   = \"&lt;strong&gt;Жирный&lt;/strong&gt; текст\";\n\n// Стили\nel.style.color          = \"red\";\nel.style.backgroundColor = \"#f5f5f5\";\nel.style.display        = \"none\";    // скрыть\nel.style.cssText        = \"color:red; font-size:18px;\"; // несколько\n\n// Классы\nel.classList.add(\"active\");\nel.classList.remove(\"hidden\");\nel.classList.toggle(\"dark\");         // добавить/убрать\nel.classList.replace(\"old\", \"new\");\n\n// Атрибуты\nel.setAttribute(\"data-id\", \"42\");\nel.dataset.id            // читать data-id\nel.dataset.userName      // data-user-name</code></pre>\n\n<b>Создание и добавление элементов:</b>\n\n<pre><code class='language-javascript'>// Создать элемент\nconst div = document.createElement(\"div\");\ndiv.className = \"card\";\ndiv.textContent = \"Новая карточка\";\n\n// Добавить в DOM\ndocument.body.appendChild(div);    // в конец body\ndocument.body.prepend(div);        // в начало body\nel.after(div);                     // после el\nel.before(div);                    // до el\nel.append(div);                    // в конец el\n\n// Шаблонные строки → HTML\nconst card = document.createElement(\"div\");\ncard.innerHTML = `\n  &lt;h2&gt;Заголовок&lt;/h2&gt;\n  &lt;p&gt;Описание&lt;/p&gt;\n  &lt;button class=\"btn\"&gt;Кнопка&lt;/button&gt;\n`;\ndocument.body.append(card);\n\n// Удалить\nel.remove();\nel.parentElement.removeChild(el);\n\n// Клонировать\nconst clone = el.cloneNode(true); // true = с детьми</code></pre>\n"
      },
      {
        "order": 10,
        "title": "События",
        "text": "<b>События — реакция на действия пользователя</b>\n\n<pre><code class='language-javascript'>const btn = document.querySelector(\".btn\");\n\n// Добавить обработчик\nbtn.addEventListener(\"click\", function(event) {\n  console.log(\"Клик!\", event);\n});\n\n// Стрелочная функция\nbtn.addEventListener(\"click\", (e) => {\n  console.log(\"Цель:\", e.target);\n});\n\n// Удалить обработчик (нужна ссылка на функцию)\nconst handler = () => console.log(\"клик\");\nbtn.addEventListener(\"click\", handler);\nbtn.removeEventListener(\"click\", handler);</code></pre>\n\n<b>Популярные события:</b>\n\n<pre><code class='language-javascript'>// Мышь\nel.addEventListener(\"click\",      e => {});\nel.addEventListener(\"dblclick\",   e => {});\nel.addEventListener(\"mouseenter\", e => {}); // наведение (без всплытия)\nel.addEventListener(\"mouseleave\", e => {});\nel.addEventListener(\"mousemove\",  e => { console.log(e.clientX, e.clientY); });\nel.addEventListener(\"contextmenu\",e => { e.preventDefault(); }); // ПКМ\n\n// Клавиатура\ndocument.addEventListener(\"keydown\", e => {\n  console.log(e.key, e.code);\n  if (e.key === \"Enter\") { /* ... */ }\n  if (e.ctrlKey && e.key === \"s\") { e.preventDefault(); /* сохранить */ }\n});\n\n// Форма\nform.addEventListener(\"submit\",  e => { e.preventDefault(); });\ninput.addEventListener(\"input\",  e => { console.log(e.target.value); });\ninput.addEventListener(\"change\", e => {});\ninput.addEventListener(\"focus\",  e => {});\ninput.addEventListener(\"blur\",   e => {});\n\n// Документ\ndocument.addEventListener(\"DOMContentLoaded\", () => { /* DOM готов */ });\nwindow.addEventListener(\"load\",   () => { /* всё загружено */ });\nwindow.addEventListener(\"resize\", () => { console.log(window.innerWidth); });\nwindow.addEventListener(\"scroll\", () => { console.log(window.scrollY); });</code></pre>\n\n<b>Объект события:</b>\n\n<pre><code class='language-javascript'>btn.addEventListener(\"click\", (e) => {\n  e.target          // элемент, на котором произошло событие\n  e.currentTarget   // элемент с обработчиком\n  e.preventDefault() // отменить действие по умолчанию\n  e.stopPropagation() // остановить всплытие\n  e.clientX, e.clientY // координаты мыши\n  e.key, e.code    // нажатая клавиша\n});</code></pre>\n"
      },
      {
        "order": 11,
        "title": "Делегирование событий",
        "text": "<b>Всплытие и делегирование</b>\n\n<b>Всплытие (bubbling):</b> событие сначала происходит на элементе, потом поднимается к родителям.\n\n<pre><code class='language-javascript'>// Пример всплытия\ndocument.querySelector(\".card\").addEventListener(\"click\", (e) => {\n  console.log(\"card\");   // сработает при клике на кнопку внутри\n});\ndocument.querySelector(\".btn\").addEventListener(\"click\", (e) => {\n  console.log(\"btn\");    // сработает первым\n  e.stopPropagation();   // остановить всплытие вверх\n});</code></pre>\n\n<b>Делегирование — один обработчик для многих элементов:</b>\n\n<pre><code class='language-javascript'>// ❌ Плохо — по обработчику на каждую кнопку\ndocument.querySelectorAll(\".btn-delete\").forEach(btn => {\n  btn.addEventListener(\"click\", deleteItem);\n});\n\n// ✅ Хорошо — один обработчик на родителе\nconst list = document.querySelector(\".list\");\nlist.addEventListener(\"click\", (e) => {\n  // e.target — фактически нажатый элемент\n  if (e.target.classList.contains(\"btn-delete\")) {\n    const item = e.target.closest(\".list-item\");\n    item.remove();\n  }\n  if (e.target.classList.contains(\"btn-edit\")) {\n    const id = e.target.dataset.id;\n    editItem(id);\n  }\n});</code></pre>\n\n<b>Почему делегирование лучше:</b>\n• Работает для динамически добавленных элементов\n• Экономит память (один обработчик вместо сотни)\n• Проще поддерживать код\n\n<pre><code class='language-javascript'>// Практический пример: список задач\nconst taskList = document.querySelector(\"#tasks\");\n\ntaskList.addEventListener(\"click\", (e) => {\n  const task = e.target.closest(\".task\");\n  if (!task) return;\n\n  if (e.target.matches(\".btn-done\")) {\n    task.classList.toggle(\"completed\");\n  }\n  if (e.target.matches(\".btn-delete\")) {\n    task.remove();\n  }\n});</code></pre>\n"
      },
      {
        "order": 12,
        "title": "Асинхронность и Promise",
        "text": "<b>Асинхронность в JavaScript</b>\n\nJS однопоточный — выполняет один кусок кода за раз. Но долгие операции (запросы, таймеры) не блокируют поток.\n\n<b>Callback — устаревший подход:</b>\n\n<pre><code class='language-javascript'>// Таймеры\nsetTimeout(() => console.log(\"Через 1 сек\"), 1000);\nsetInterval(() => console.log(\"Каждые 2 сек\"), 2000);\nconst id = setInterval(...);\nclearInterval(id); // остановить\n\n// Callback hell — вложенность растёт\ngetData(function(data) {\n  processData(data, function(result) {\n    saveResult(result, function() {\n      // ещё глубже...\n    });\n  });\n});</code></pre>\n\n<b>Promise — обещание будущего результата:</b>\n\n<pre><code class='language-javascript'>// Создание промиса\nconst promise = new Promise((resolve, reject) => {\n  // выполнить асинхронную операцию\n  if (success) {\n    resolve(data);   // успех\n  } else {\n    reject(error);   // ошибка\n  }\n});\n\n// Использование\npromise\n  .then(data => console.log(\"Успех:\", data))\n  .catch(err => console.error(\"Ошибка:\", err))\n  .finally(() => console.log(\"В любом случае\"));\n\n// Параллельное выполнение\nPromise.all([fetch(\"/api/1\"), fetch(\"/api/2\")])\n  .then(([res1, res2]) => { /* оба готовы */ });\n\n// Гонка — первый результат\nPromise.race([slowRequest(), fastRequest()])\n  .then(result => console.log(\"Первый:\", result));\n\n// Всегда дождаться всех\nPromise.allSettled([p1, p2, p3])\n  .then(results => results.forEach(r => console.log(r.status)));</code></pre>\n"
      },
      {
        "order": 13,
        "title": "async/await и Fetch API",
        "text": "<b>async/await — удобный синтаксис для промисов</b>\n\n<pre><code class='language-javascript'>// async — функция всегда возвращает Promise\nasync function loadUser(id) {\n  // await — ждём результата промиса\n  const response = await fetch(`/api/users/${id}`);\n  const user = await response.json();\n  return user;\n}\n\n// Обработка ошибок\nasync function loadData() {\n  try {\n    const res  = await fetch(\"/api/data\");\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error(\"Ошибка:\", err.message);\n    return null;\n  } finally {\n    console.log(\"Запрос завершён\");\n  }\n}</code></pre>\n\n<b>Fetch API — запросы к серверу:</b>\n\n<pre><code class='language-javascript'>// GET — получить данные\nconst res   = await fetch(\"https://api.example.com/posts\");\nconst posts = await res.json();\n\n// POST — отправить данные\nconst response = await fetch(\"/api/users\", {\n  method:  \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body:    JSON.stringify({ name: \"Анна\", age: 25 }),\n});\nconst newUser = await response.json();\n\n// PUT — обновить\nawait fetch(`/api/users/${id}`, {\n  method:  \"PUT\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body:    JSON.stringify({ name: \"Анна Иванова\" }),\n});\n\n// DELETE — удалить\nawait fetch(`/api/users/${id}`, { method: \"DELETE\" });\n\n// Параллельные запросы\nconst [users, posts] = await Promise.all([\n  fetch(\"/api/users\").then(r => r.json()),\n  fetch(\"/api/posts\").then(r => r.json()),\n]);</code></pre>\n\n<b>Проверка ответа:</b>\n\n<pre><code class='language-javascript'>const res = await fetch(\"/api/data\");\n\nres.ok          // true если 200-299\nres.status      // 200, 404, 500...\nres.statusText  // \"OK\", \"Not Found\"...\n\nawait res.json()   // → объект\nawait res.text()   // → строка\nawait res.blob()   // → файл</code></pre>\n"
      },
      {
        "order": 14,
        "title": "LocalStorage и современный JS",
        "text": "<b>Web Storage — хранение данных в браузере</b>\n\n<pre><code class='language-javascript'>// localStorage — постоянное (не очищается при закрытии)\nlocalStorage.setItem(\"theme\", \"dark\");\nlocalStorage.setItem(\"user\", JSON.stringify({ name: \"Анна\" }));\n\nconst theme = localStorage.getItem(\"theme\"); // \"dark\"\nconst user  = JSON.parse(localStorage.getItem(\"user\"));\n\nlocalStorage.removeItem(\"theme\");\nlocalStorage.clear(); // очистить всё\n\n// sessionStorage — только до закрытия вкладки\nsessionStorage.setItem(\"step\", \"2\");\n\n// Проверка\nif (localStorage.getItem(\"token\")) { /* авторизован */ }</code></pre>\n\n<b>Современный синтаксис ES6+:</b>\n\n<pre><code class='language-javascript'>// Деструктуризация массива\nconst [first, second, ...rest] = [1, 2, 3, 4, 5];\nconst [, , third] = [1, 2, 3]; // пропуск элементов\n\n// Spread\nconst arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]\nMath.max(...arr1);             // 3\n\nconst obj1 = { a: 1 };\nconst obj2 = { ...obj1, b: 2 }; // { a:1, b:2 }\n\n// Шаблонные строки\nconst html = `\n  &lt;div class=\"card\"&gt;\n    &lt;h2&gt;${user.name}&lt;/h2&gt;\n    &lt;p&gt;${user.age} лет&lt;/p&gt;\n  &lt;/div&gt;\n`.trim();\n\n// Computed property names\nconst key = \"name\";\nconst obj = { [key]: \"Анна\" }; // { name: \"Анна\" }\n\n// Short property names\nconst name = \"Анна\", age = 25;\nconst user = { name, age }; // { name: \"Анна\", age: 25 }\n\n// Nullish assignment\nlet x = null;\nx ??= \"по умолчанию\"; // присвоить только если null/undefined\n\n// Logical assignment\nlet a = 0;\na ||= 10; // присвоить если falsy\na &&= 20; // присвоить если truthy</code></pre>\n"
      },
      {
        "order": 15,
        "title": "Итоги: мини-приложение на JS",
        "text": "<b>Собираем всё вместе — список задач</b>\n\n<pre><code class='language-javascript'>// ── Состояние приложения ─────────────────────\nlet tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\nlet nextId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;\n\n// ── Сохранение ───────────────────────────────\nfunction save() {\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n\n// ── Рендеринг ────────────────────────────────\nfunction render() {\n  const list = document.querySelector(\"#task-list\");\n  list.innerHTML = tasks.map(task => `\n    &lt;li class=\"task ${task.done ? 'done' : ''}\" data-id=\"${task.id}\"&gt;\n      &lt;span&gt;${task.text}&lt;/span&gt;\n      &lt;button class=\"btn-done\"&gt;✓&lt;/button&gt;\n      &lt;button class=\"btn-delete\"&gt;✕&lt;/button&gt;\n    &lt;/li&gt;\n  `).join(\"\");\n}\n\n// ── Добавление задачи ────────────────────────\ndocument.querySelector(\"#task-form\")\n  .addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const input = e.target.querySelector(\"input\");\n    const text = input.value.trim();\n    if (!text) return;\n    tasks.push({ id: nextId++, text, done: false });\n    save();\n    render();\n    input.value = \"\";\n    input.focus();\n  });\n\n// ── Делегирование (done / delete) ────────────\ndocument.querySelector(\"#task-list\")\n  .addEventListener(\"click\", (e) => {\n    const li = e.target.closest(\".task\");\n    if (!li) return;\n    const id = Number(li.dataset.id);\n\n    if (e.target.matches(\".btn-done\")) {\n      tasks = tasks.map(t =>\n        t.id === id ? { ...t, done: !t.done } : t\n      );\n    }\n    if (e.target.matches(\".btn-delete\")) {\n      tasks = tasks.filter(t => t.id !== id);\n    }\n    save();\n    render();\n  });\n\n// ── Инициализация ────────────────────────────\nrender();</code></pre>\n\n<b>✅ Что ты освоил в этом курсе:</b>\n• Переменные, типы данных, операторы\n• Условия, циклы, функции, замыкания\n• Массивы и объекты (все методы)\n• DOM: поиск, изменение, создание элементов\n• События и делегирование\n• Promise, async/await, Fetch API\n• LocalStorage и современный ES6+ синтаксис\n\n🚀 Следующий шаг — <b>React</b> или <b>Node.js</b>: выбери своё направление!\n"
      }
    ]
  },
  {
    "id": 9,
    "title": "Гриды",
    "description": "Гриды (CSS Grid Layout) — курс по верстке, который научит вас создавать полноценные двухмерные сетки (из строк и колонок) любой сложности, позволяя легко проектировать дизайн целых страниц и гибко расставлять крупные блоки сайта без лишних костылей.",
    "emoji": "🔳",
    "language": "HTML CSS",
    "difficulty": "hard",
    "xp_reward": 700,
    "coins_reward": 350,
    "lessons": [
      {
        "order": 1,
        "title": "Что такое JavaScript",
        "text": "<b>JavaScript — язык программирования браузера</b>\n\nJS делает сайты интерактивными: реагирует на действия пользователя, меняет контент, отправляет запросы без перезагрузки страницы.\n\n<b>Где выполняется JavaScript:</b>\n• В браузере — любой сайт\n• На сервере — Node.js\n• В мобильных приложениях — React Native\n\n<b>Подключение скриптов:</b>\n\n<pre><code class='language-html'>&lt;!-- Внутри HTML --&gt;\n&lt;script&gt;\n  console.log(\"Привет из скрипта!\");\n&lt;/script&gt;\n\n&lt;!-- Внешний файл (рекомендуется) --&gt;\n&lt;script src=\"script.js\"&gt;&lt;/script&gt;\n\n&lt;!-- defer — выполнить после загрузки HTML --&gt;\n&lt;script src=\"script.js\" defer&gt;&lt;/script&gt;\n\n&lt;!-- async — выполнить как только загрузится --&gt;\n&lt;script src=\"analytics.js\" async&gt;&lt;/script&gt;</code></pre>\n\n<b>Первые шаги:</b>\n\n<pre><code class='language-javascript'>// Вывод в консоль браузера (F12 → Console)\nconsole.log(\"Привет, мир!\");\nconsole.log(42, true, [1,2,3]);\nconsole.error(\"Ошибка!\");\nconsole.warn(\"Предупреждение\");\nconsole.table([{name: \"Анна\", age: 25}]);\n\n// Диалоговые окна браузера\nalert(\"Сообщение\");\nconst name = prompt(\"Как тебя зовут?\");\nconst ok = confirm(\"Уверен?\"); // true или false</code></pre>\n\n💡 Всегда подключай JS перед <code>&lt;/body&gt;</code> или используй атрибут <code>defer</code>, чтобы HTML загружался раньше скрипта.\n"
      },
      {
        "order": 2,
        "title": "Переменные и типы данных",
        "text": "<b>Переменные — хранилища данных</b>\n\n<pre><code class='language-javascript'>// const — нельзя переназначить (используй по умолчанию)\nconst name = \"Анна\";\nconst age  = 25;\nconst PI   = 3.14159;\n\n// let — можно переназначить\nlet score = 0;\nscore = 100;         // OK\nscore += 50;         // score = 150\n\n// var — устаревший, не используй\nvar old = \"избегай\";</code></pre>\n\n<b>Типы данных:</b>\n\n<pre><code class='language-javascript'>// string — строка\nconst str1 = \"двойные кавычки\";\nconst str2 = 'одинарные кавычки';\nconst str3 = `шаблонная строка: ${name}, ${2 + 2}`;\nconst multiline = `Строка 1\nСтрока 2`;\n\n// number — число (целые и дробные)\nconst int   = 42;\nconst float = 3.14;\nconst neg   = -100;\nconst inf   = Infinity;\nconst nan   = NaN;      // Not a Number\n\n// boolean — логический\nconst yes = true;\nconst no  = false;\n\n// null — намеренное отсутствие значения\nconst empty = null;\n\n// undefined — значение не задано\nlet notDefined;\nconsole.log(notDefined); // undefined\n\n// object — объект\nconst user = { name: \"Анна\", age: 25 };\n\n// array — массив (тоже объект)\nconst colors = [\"red\", \"green\", \"blue\"];\n\n// symbol — уникальный идентификатор\nconst id = Symbol(\"id\");</code></pre>\n\n<b>Проверка типов:</b>\n\n<pre><code class='language-javascript'>typeof \"текст\"   // \"string\"\ntypeof 42        // \"number\"\ntypeof true      // \"boolean\"\ntypeof undefined // \"undefined\"\ntypeof null      // \"object\" (историческая ошибка!)\ntypeof []        // \"object\"\ntypeof {}        // \"object\"\n\n// Правильная проверка массива\nArray.isArray([1, 2, 3])  // true\n\n// Проверка на null\nvalue === null     // true если null</code></pre>\n"
      },
      {
        "order": 3,
        "title": "Операторы и условия",
        "text": "<b>Операторы сравнения</b>\n\n<pre><code class='language-javascript'>// == сравнивает значение (с приведением типов) — ИЗБЕГАЙ\n5 == \"5\"   // true (строку привели к числу)\n\n// === сравнивает значение И тип — ИСПОЛЬЗУЙ\n5 === \"5\"  // false\n5 === 5    // true\nnull === undefined // false\n\n// Неравенство\n5 != \"5\"  // false (с приведением)\n5 !== \"5\" // true  (строго)\n\n// Числовые\n5 > 3    // true\n5 >= 5   // true\n3 < 5    // true</code></pre>\n\n<b>Логические операторы:</b>\n\n<pre><code class='language-javascript'>true && true   // true  (И)\ntrue && false  // false\ntrue || false  // true  (ИЛИ)\nfalse || false // false\n!true          // false (НЕ)\n\n// Short-circuit (ленивые вычисления)\nfalse && doSomething()  // doSomething НЕ вызовется\ntrue  || doSomething()  // doSomething НЕ вызовется\n\n// Nullish coalescing — запасное значение при null/undefined\nconst val = null ?? \"по умолчанию\"; // \"по умолчанию\"\nconst x   = 0    ?? \"по умолчанию\"; // 0 (не null!)\n\n// Optional chaining — безопасный доступ\nconst city = user?.address?.city; // не упадёт если нет address</code></pre>\n\n<b>Условные операторы:</b>\n\n<pre><code class='language-javascript'>const age = 20;\n\n// if / else if / else\nif (age >= 18) {\n  console.log(\"Совершеннолетний\");\n} else if (age >= 14) {\n  console.log(\"Подросток\");\n} else {\n  console.log(\"Ребёнок\");\n}\n\n// Тернарный оператор\nconst status = age >= 18 ? \"взрослый\" : \"ребёнок\";\n\n// Switch\nconst day = \"пн\";\nswitch (day) {\n  case \"пн\":\n  case \"вт\":\n    console.log(\"Начало недели\"); break;\n  case \"пт\":\n    console.log(\"Пятница!\"); break;\n  default:\n    console.log(\"Другой день\");\n}</code></pre>\n"
      },
      {
        "order": 4,
        "title": "Циклы",
        "text": "<b>Циклы — повторяем действия</b>\n\n<pre><code class='language-javascript'>// for — классический цикл со счётчиком\nfor (let i = 0; i < 5; i++) {\n  console.log(i); // 0 1 2 3 4\n}\n\n// Обратный отсчёт\nfor (let i = 5; i > 0; i--) {\n  console.log(i); // 5 4 3 2 1\n}\n\n// while — пока условие истинно\nlet count = 0;\nwhile (count < 3) {\n  console.log(count++); // 0 1 2\n}\n\n// do...while — выполнится хотя бы раз\nlet x = 10;\ndo {\n  console.log(x); // 10\n  x++;\n} while (x < 5);\n\n// for...of — по элементам массива/строки\nconst fruits = [\"яблоко\", \"банан\", \"груша\"];\nfor (const fruit of fruits) {\n  console.log(fruit);\n}\n\n// for...in — по ключам объекта\nconst user = { name: \"Анна\", age: 25 };\nfor (const key in user) {\n  console.log(key, user[key]);\n  // name Анна\n  // age  25\n}</code></pre>\n\n<b>Управление циклом:</b>\n\n<pre><code class='language-javascript'>// break — прервать цикл\nfor (let i = 0; i < 10; i++) {\n  if (i === 5) break;\n  console.log(i); // 0 1 2 3 4\n}\n\n// continue — перейти к следующей итерации\nfor (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  console.log(i); // 0 1 3 4\n}\n\n// Метки (редко нужны)\nouter: for (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (j === 1) break outer; // выйти из внешнего\n  }\n}</code></pre>\n"
      },
      {
        "order": 5,
        "title": "Функции",
        "text": "<b>Функции — многократно используемый код</b>\n\n<pre><code class='language-javascript'>// Объявление функции (hoisting — доступна до объявления)\nfunction greet(name) {\n  return `Привет, ${name}!`;\n}\n\n// Функциональное выражение\nconst greet = function(name) {\n  return `Привет, ${name}!`;\n};\n\n// Стрелочная функция (arrow function)\nconst greet = (name) => `Привет, ${name}!`;\n\n// Без параметров\nconst sayHi  = () => \"Привет!\";\n\n// С несколькими строками\nconst add = (a, b) => {\n  const result = a + b;\n  return result;\n};</code></pre>\n\n<b>Параметры функций:</b>\n\n<pre><code class='language-javascript'>// Значения по умолчанию\nfunction greet(name = \"Гость\") {\n  return `Привет, ${name}!`;\n}\ngreet();        // \"Привет, Гость!\"\ngreet(\"Анна\"); // \"Привет, Анна!\"\n\n// Деструктуризация в параметрах\nfunction printUser({ name, age }) {\n  console.log(`${name}, ${age} лет`);\n}\nprintUser({ name: \"Анна\", age: 25 });\n\n// rest-параметры\nfunction sum(...numbers) {\n  return numbers.reduce((total, n) => total + n, 0);\n}\nsum(1, 2, 3, 4); // 10</code></pre>\n\n<b>Замыкания (closures):</b>\n\n<pre><code class='language-javascript'>function makeCounter() {\n  let count = 0;          // переменная в замыкании\n  return () => ++count;   // функция имеет доступ к count\n}\n\nconst counter = makeCounter();\ncounter(); // 1\ncounter(); // 2\ncounter(); // 3\n\n// Создание приватных данных\nfunction createUser(name) {\n  let _age = 0;                           // приватное\n  return {\n    getName: () => name,\n    getAge:  () => _age,\n    setAge:  (age) => { _age = age; },\n  };\n}</code></pre>\n"
      },
      {
        "order": 6,
        "title": "Массивы",
        "text": "<b>Массивы — упорядоченные коллекции данных</b>\n\n<pre><code class='language-javascript'>// Создание\nconst arr = [1, 2, 3];\nconst arr2 = new Array(3);        // [empty x 3]\nconst arr3 = Array.from(\"abc\");   // ['a','b','c']\n\n// Доступ\narr[0]     // 1 (первый)\narr.at(-1) // 3 (последний)</code></pre>\n\n<b>Методы — изменяют оригинал:</b>\n\n<pre><code class='language-javascript'>const a = [1, 2, 3];\n\na.push(4);        // добавить в конец  → [1,2,3,4]\na.pop();          // убрать из конца   → [1,2,3]\na.unshift(0);     // добавить в начало → [0,1,2,3]\na.shift();        // убрать из начала  → [1,2,3]\na.reverse();      // перевернуть       → [3,2,1]\na.sort();         // сортировать       → [1,2,3]\na.sort((x, y) => y - x); // по убыванию\n\n// splice — удалить/вставить\na.splice(1, 1);       // удалить 1 элемент с индекса 1\na.splice(1, 0, 10);   // вставить 10 после индекса 1</code></pre>\n\n<b>Методы — возвращают новый массив:</b>\n\n<pre><code class='language-javascript'>const nums = [1, 2, 3, 4, 5];\n\n// map — преобразовать каждый\nnums.map(n => n * 2)          // [2,4,6,8,10]\n\n// filter — отфильтровать\nnums.filter(n => n % 2 === 0) // [2,4]\n\n// reduce — свернуть в одно значение\nnums.reduce((sum, n) => sum + n, 0) // 15\n\n// find — найти первый\nnums.find(n => n > 3)    // 4\nnums.findIndex(n => n > 3) // 3\n\n// some / every\nnums.some(n => n > 4)   // true (хоть один)\nnums.every(n => n > 0)  // true (все)\n\n// includes\nnums.includes(3)  // true\n\n// flat / flatMap\n[[1,2],[3,4]].flat()  // [1,2,3,4]\n\n// slice — выреза\nnums.slice(1, 3)  // [2,3]\n\n// concat / spread\n[...nums, 6, 7]   // [1,2,3,4,5,6,7]\n\n// join → строка\nnums.join(\", \")   // \"1, 2, 3, 4, 5\"</code></pre>\n"
      },
      {
        "order": 7,
        "title": "Объекты",
        "text": "<b>Объекты — наборы свойств</b>\n\n<pre><code class='language-javascript'>// Создание объекта\nconst user = {\n  name: \"Анна\",\n  age: 25,\n  isAdmin: false,\n  address: {\n    city: \"Москва\",\n    street: \"Ленина, 1\",\n  },\n  greet() {            // метод объекта\n    return `Привет, я ${this.name}`;\n  },\n};\n\n// Доступ к свойствам\nuser.name          // \"Анна\"\nuser[\"name\"]       // \"Анна\"\nuser.address.city  // \"Москва\"\n\n// Изменение\nuser.age = 26;\nuser[\"email\"] = \"anna@mail.ru\";\n\n// Удаление\ndelete user.isAdmin;\n\n// Проверка наличия свойства\n\"name\" in user          // true\nuser.hasOwnProperty(\"name\") // true</code></pre>\n\n<b>Деструктуризация:</b>\n\n<pre><code class='language-javascript'>const { name, age } = user;\nconst { name: userName } = user; // другое имя переменной\nconst { name, age = 18 } = user; // значение по умолчанию\n\n// Вложенная\nconst { address: { city } } = user;\n\n// В функции\nfunction show({ name, age }) {\n  console.log(name, age);\n}</code></pre>\n\n<b>Spread и Object methods:</b>\n\n<pre><code class='language-javascript'>// Копия объекта\nconst copy = { ...user };\n\n// Слияние объектов\nconst extended = { ...user, role: \"admin\" };\n\n// Object.keys / values / entries\nObject.keys(user)    // [\"name\", \"age\", ...]\nObject.values(user)  // [\"Анна\", 25, ...]\nObject.entries(user) // [[\"name\",\"Анна\"], ...]\n\n// Перебор\nfor (const [key, val] of Object.entries(user)) {\n  console.log(key, val);\n}\n\n// Object.assign\nconst target = Object.assign({}, user, { role: \"vip\" });\n\n// Заморозка (нельзя менять)\nObject.freeze(user);</code></pre>\n"
      },
      {
        "order": 8,
        "title": "DOM — поиск элементов",
        "text": "<b>DOM (Document Object Model) — дерево HTML в JavaScript</b>\n\n<pre><code class='language-javascript'>// querySelector — первый совпадающий элемент\nconst btn  = document.querySelector(\".button\");\nconst h1   = document.querySelector(\"h1\");\nconst nav  = document.querySelector(\"#nav a\");\n\n// querySelectorAll — все совпадающие (NodeList)\nconst btns  = document.querySelectorAll(\".button\");\nconst items = document.querySelectorAll(\"li\");\n\n// Перебор NodeList\nbtns.forEach(btn => console.log(btn));\n[...btns].map(btn => btn.textContent); // в массив\n\n// Устаревшие, но работают\ndocument.getElementById(\"header\");\ndocument.getElementsByClassName(\"card\"); // HTMLCollection\ndocument.getElementsByTagName(\"p\");\n\n// Навигация по DOM\nelement.parentElement\nelement.children           // дочерние элементы\nelement.firstElementChild\nelement.lastElementChild\nelement.nextElementSibling\nelement.previousElementSibling\n\n// closest — ищет вверх по дереву\nbtn.closest(\".card\")</code></pre>\n\n<b>Чтение информации об элементе:</b>\n\n<pre><code class='language-javascript'>const el = document.querySelector(\".card\");\n\n// Содержимое\nel.textContent  // только текст\nel.innerHTML    // HTML внутри\nel.outerHTML    // HTML вместе с самим элементом\n\n// Атрибуты\nel.getAttribute(\"href\")\nel.setAttribute(\"href\", \"/new\")\nel.removeAttribute(\"disabled\")\nel.hasAttribute(\"required\")\n\n// Классы\nel.className          // строка классов\nel.classList          // DOMTokenList\nel.classList.contains(\"active\")\nel.classList.length\n\n// Размеры и позиция\nel.offsetWidth   // ширина с border\nel.offsetHeight\nel.getBoundingClientRect() // { top, left, width, height, ... }</code></pre>\n"
      },
      {
        "order": 9,
        "title": "DOM — изменение страницы",
        "text": "<b>Изменяем DOM из JavaScript</b>\n\n<pre><code class='language-javascript'>const el = document.querySelector(\".card\");\n\n// Текст и HTML\nel.textContent = \"Новый текст\";\nel.innerHTML   = \"&lt;strong&gt;Жирный&lt;/strong&gt; текст\";\n\n// Стили\nel.style.color          = \"red\";\nel.style.backgroundColor = \"#f5f5f5\";\nel.style.display        = \"none\";    // скрыть\nel.style.cssText        = \"color:red; font-size:18px;\"; // несколько\n\n// Классы\nel.classList.add(\"active\");\nel.classList.remove(\"hidden\");\nel.classList.toggle(\"dark\");         // добавить/убрать\nel.classList.replace(\"old\", \"new\");\n\n// Атрибуты\nel.setAttribute(\"data-id\", \"42\");\nel.dataset.id            // читать data-id\nel.dataset.userName      // data-user-name</code></pre>\n\n<b>Создание и добавление элементов:</b>\n\n<pre><code class='language-javascript'>// Создать элемент\nconst div = document.createElement(\"div\");\ndiv.className = \"card\";\ndiv.textContent = \"Новая карточка\";\n\n// Добавить в DOM\ndocument.body.appendChild(div);    // в конец body\ndocument.body.prepend(div);        // в начало body\nel.after(div);                     // после el\nel.before(div);                    // до el\nel.append(div);                    // в конец el\n\n// Шаблонные строки → HTML\nconst card = document.createElement(\"div\");\ncard.innerHTML = `\n  &lt;h2&gt;Заголовок&lt;/h2&gt;\n  &lt;p&gt;Описание&lt;/p&gt;\n  &lt;button class=\"btn\"&gt;Кнопка&lt;/button&gt;\n`;\ndocument.body.append(card);\n\n// Удалить\nel.remove();\nel.parentElement.removeChild(el);\n\n// Клонировать\nconst clone = el.cloneNode(true); // true = с детьми</code></pre>\n"
      },
      {
        "order": 10,
        "title": "События",
        "text": "<b>События — реакция на действия пользователя</b>\n\n<pre><code class='language-javascript'>const btn = document.querySelector(\".btn\");\n\n// Добавить обработчик\nbtn.addEventListener(\"click\", function(event) {\n  console.log(\"Клик!\", event);\n});\n\n// Стрелочная функция\nbtn.addEventListener(\"click\", (e) => {\n  console.log(\"Цель:\", e.target);\n});\n\n// Удалить обработчик (нужна ссылка на функцию)\nconst handler = () => console.log(\"клик\");\nbtn.addEventListener(\"click\", handler);\nbtn.removeEventListener(\"click\", handler);</code></pre>\n\n<b>Популярные события:</b>\n\n<pre><code class='language-javascript'>// Мышь\nel.addEventListener(\"click\",      e => {});\nel.addEventListener(\"dblclick\",   e => {});\nel.addEventListener(\"mouseenter\", e => {}); // наведение (без всплытия)\nel.addEventListener(\"mouseleave\", e => {});\nel.addEventListener(\"mousemove\",  e => { console.log(e.clientX, e.clientY); });\nel.addEventListener(\"contextmenu\",e => { e.preventDefault(); }); // ПКМ\n\n// Клавиатура\ndocument.addEventListener(\"keydown\", e => {\n  console.log(e.key, e.code);\n  if (e.key === \"Enter\") { /* ... */ }\n  if (e.ctrlKey && e.key === \"s\") { e.preventDefault(); /* сохранить */ }\n});\n\n// Форма\nform.addEventListener(\"submit\",  e => { e.preventDefault(); });\ninput.addEventListener(\"input\",  e => { console.log(e.target.value); });\ninput.addEventListener(\"change\", e => {});\ninput.addEventListener(\"focus\",  e => {});\ninput.addEventListener(\"blur\",   e => {});\n\n// Документ\ndocument.addEventListener(\"DOMContentLoaded\", () => { /* DOM готов */ });\nwindow.addEventListener(\"load\",   () => { /* всё загружено */ });\nwindow.addEventListener(\"resize\", () => { console.log(window.innerWidth); });\nwindow.addEventListener(\"scroll\", () => { console.log(window.scrollY); });</code></pre>\n\n<b>Объект события:</b>\n\n<pre><code class='language-javascript'>btn.addEventListener(\"click\", (e) => {\n  e.target          // элемент, на котором произошло событие\n  e.currentTarget   // элемент с обработчиком\n  e.preventDefault() // отменить действие по умолчанию\n  e.stopPropagation() // остановить всплытие\n  e.clientX, e.clientY // координаты мыши\n  e.key, e.code    // нажатая клавиша\n});</code></pre>\n"
      },
      {
        "order": 11,
        "title": "Делегирование событий",
        "text": "<b>Всплытие и делегирование</b>\n\n<b>Всплытие (bubbling):</b> событие сначала происходит на элементе, потом поднимается к родителям.\n\n<pre><code class='language-javascript'>// Пример всплытия\ndocument.querySelector(\".card\").addEventListener(\"click\", (e) => {\n  console.log(\"card\");   // сработает при клике на кнопку внутри\n});\ndocument.querySelector(\".btn\").addEventListener(\"click\", (e) => {\n  console.log(\"btn\");    // сработает первым\n  e.stopPropagation();   // остановить всплытие вверх\n});</code></pre>\n\n<b>Делегирование — один обработчик для многих элементов:</b>\n\n<pre><code class='language-javascript'>// ❌ Плохо — по обработчику на каждую кнопку\ndocument.querySelectorAll(\".btn-delete\").forEach(btn => {\n  btn.addEventListener(\"click\", deleteItem);\n});\n\n// ✅ Хорошо — один обработчик на родителе\nconst list = document.querySelector(\".list\");\nlist.addEventListener(\"click\", (e) => {\n  // e.target — фактически нажатый элемент\n  if (e.target.classList.contains(\"btn-delete\")) {\n    const item = e.target.closest(\".list-item\");\n    item.remove();\n  }\n  if (e.target.classList.contains(\"btn-edit\")) {\n    const id = e.target.dataset.id;\n    editItem(id);\n  }\n});</code></pre>\n\n<b>Почему делегирование лучше:</b>\n• Работает для динамически добавленных элементов\n• Экономит память (один обработчик вместо сотни)\n• Проще поддерживать код\n\n<pre><code class='language-javascript'>// Практический пример: список задач\nconst taskList = document.querySelector(\"#tasks\");\n\ntaskList.addEventListener(\"click\", (e) => {\n  const task = e.target.closest(\".task\");\n  if (!task) return;\n\n  if (e.target.matches(\".btn-done\")) {\n    task.classList.toggle(\"completed\");\n  }\n  if (e.target.matches(\".btn-delete\")) {\n    task.remove();\n  }\n});</code></pre>\n"
      },
      {
        "order": 12,
        "title": "Асинхронность и Promise",
        "text": "<b>Асинхронность в JavaScript</b>\n\nJS однопоточный — выполняет один кусок кода за раз. Но долгие операции (запросы, таймеры) не блокируют поток.\n\n<b>Callback — устаревший подход:</b>\n\n<pre><code class='language-javascript'>// Таймеры\nsetTimeout(() => console.log(\"Через 1 сек\"), 1000);\nsetInterval(() => console.log(\"Каждые 2 сек\"), 2000);\nconst id = setInterval(...);\nclearInterval(id); // остановить\n\n// Callback hell — вложенность растёт\ngetData(function(data) {\n  processData(data, function(result) {\n    saveResult(result, function() {\n      // ещё глубже...\n    });\n  });\n});</code></pre>\n\n<b>Promise — обещание будущего результата:</b>\n\n<pre><code class='language-javascript'>// Создание промиса\nconst promise = new Promise((resolve, reject) => {\n  // выполнить асинхронную операцию\n  if (success) {\n    resolve(data);   // успех\n  } else {\n    reject(error);   // ошибка\n  }\n});\n\n// Использование\npromise\n  .then(data => console.log(\"Успех:\", data))\n  .catch(err => console.error(\"Ошибка:\", err))\n  .finally(() => console.log(\"В любом случае\"));\n\n// Параллельное выполнение\nPromise.all([fetch(\"/api/1\"), fetch(\"/api/2\")])\n  .then(([res1, res2]) => { /* оба готовы */ });\n\n// Гонка — первый результат\nPromise.race([slowRequest(), fastRequest()])\n  .then(result => console.log(\"Первый:\", result));\n\n// Всегда дождаться всех\nPromise.allSettled([p1, p2, p3])\n  .then(results => results.forEach(r => console.log(r.status)));</code></pre>\n"
      },
      {
        "order": 13,
        "title": "async/await и Fetch API",
        "text": "<b>async/await — удобный синтаксис для промисов</b>\n\n<pre><code class='language-javascript'>// async — функция всегда возвращает Promise\nasync function loadUser(id) {\n  // await — ждём результата промиса\n  const response = await fetch(`/api/users/${id}`);\n  const user = await response.json();\n  return user;\n}\n\n// Обработка ошибок\nasync function loadData() {\n  try {\n    const res  = await fetch(\"/api/data\");\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error(\"Ошибка:\", err.message);\n    return null;\n  } finally {\n    console.log(\"Запрос завершён\");\n  }\n}</code></pre>\n\n<b>Fetch API — запросы к серверу:</b>\n\n<pre><code class='language-javascript'>// GET — получить данные\nconst res   = await fetch(\"https://api.example.com/posts\");\nconst posts = await res.json();\n\n// POST — отправить данные\nconst response = await fetch(\"/api/users\", {\n  method:  \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body:    JSON.stringify({ name: \"Анна\", age: 25 }),\n});\nconst newUser = await response.json();\n\n// PUT — обновить\nawait fetch(`/api/users/${id}`, {\n  method:  \"PUT\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body:    JSON.stringify({ name: \"Анна Иванова\" }),\n});\n\n// DELETE — удалить\nawait fetch(`/api/users/${id}`, { method: \"DELETE\" });\n\n// Параллельные запросы\nconst [users, posts] = await Promise.all([\n  fetch(\"/api/users\").then(r => r.json()),\n  fetch(\"/api/posts\").then(r => r.json()),\n]);</code></pre>\n\n<b>Проверка ответа:</b>\n\n<pre><code class='language-javascript'>const res = await fetch(\"/api/data\");\n\nres.ok          // true если 200-299\nres.status      // 200, 404, 500...\nres.statusText  // \"OK\", \"Not Found\"...\n\nawait res.json()   // → объект\nawait res.text()   // → строка\nawait res.blob()   // → файл</code></pre>\n"
      },
      {
        "order": 14,
        "title": "LocalStorage и современный JS",
        "text": "<b>Web Storage — хранение данных в браузере</b>\n\n<pre><code class='language-javascript'>// localStorage — постоянное (не очищается при закрытии)\nlocalStorage.setItem(\"theme\", \"dark\");\nlocalStorage.setItem(\"user\", JSON.stringify({ name: \"Анна\" }));\n\nconst theme = localStorage.getItem(\"theme\"); // \"dark\"\nconst user  = JSON.parse(localStorage.getItem(\"user\"));\n\nlocalStorage.removeItem(\"theme\");\nlocalStorage.clear(); // очистить всё\n\n// sessionStorage — только до закрытия вкладки\nsessionStorage.setItem(\"step\", \"2\");\n\n// Проверка\nif (localStorage.getItem(\"token\")) { /* авторизован */ }</code></pre>\n\n<b>Современный синтаксис ES6+:</b>\n\n<pre><code class='language-javascript'>// Деструктуризация массива\nconst [first, second, ...rest] = [1, 2, 3, 4, 5];\nconst [, , third] = [1, 2, 3]; // пропуск элементов\n\n// Spread\nconst arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]\nMath.max(...arr1);             // 3\n\nconst obj1 = { a: 1 };\nconst obj2 = { ...obj1, b: 2 }; // { a:1, b:2 }\n\n// Шаблонные строки\nconst html = `\n  &lt;div class=\"card\"&gt;\n    &lt;h2&gt;${user.name}&lt;/h2&gt;\n    &lt;p&gt;${user.age} лет&lt;/p&gt;\n  &lt;/div&gt;\n`.trim();\n\n// Computed property names\nconst key = \"name\";\nconst obj = { [key]: \"Анна\" }; // { name: \"Анна\" }\n\n// Short property names\nconst name = \"Анна\", age = 25;\nconst user = { name, age }; // { name: \"Анна\", age: 25 }\n\n// Nullish assignment\nlet x = null;\nx ??= \"по умолчанию\"; // присвоить только если null/undefined\n\n// Logical assignment\nlet a = 0;\na ||= 10; // присвоить если falsy\na &&= 20; // присвоить если truthy</code></pre>\n"
      },
      {
        "order": 15,
        "title": "Итоги: мини-приложение на JS",
        "text": "<b>Собираем всё вместе — список задач</b>\n\n<pre><code class='language-javascript'>// ── Состояние приложения ─────────────────────\nlet tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\nlet nextId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;\n\n// ── Сохранение ───────────────────────────────\nfunction save() {\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n\n// ── Рендеринг ────────────────────────────────\nfunction render() {\n  const list = document.querySelector(\"#task-list\");\n  list.innerHTML = tasks.map(task => `\n    &lt;li class=\"task ${task.done ? 'done' : ''}\" data-id=\"${task.id}\"&gt;\n      &lt;span&gt;${task.text}&lt;/span&gt;\n      &lt;button class=\"btn-done\"&gt;✓&lt;/button&gt;\n      &lt;button class=\"btn-delete\"&gt;✕&lt;/button&gt;\n    &lt;/li&gt;\n  `).join(\"\");\n}\n\n// ── Добавление задачи ────────────────────────\ndocument.querySelector(\"#task-form\")\n  .addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const input = e.target.querySelector(\"input\");\n    const text = input.value.trim();\n    if (!text) return;\n    tasks.push({ id: nextId++, text, done: false });\n    save();\n    render();\n    input.value = \"\";\n    input.focus();\n  });\n\n// ── Делегирование (done / delete) ────────────\ndocument.querySelector(\"#task-list\")\n  .addEventListener(\"click\", (e) => {\n    const li = e.target.closest(\".task\");\n    if (!li) return;\n    const id = Number(li.dataset.id);\n\n    if (e.target.matches(\".btn-done\")) {\n      tasks = tasks.map(t =>\n        t.id === id ? { ...t, done: !t.done } : t\n      );\n    }\n    if (e.target.matches(\".btn-delete\")) {\n      tasks = tasks.filter(t => t.id !== id);\n    }\n    save();\n    render();\n  });\n\n// ── Инициализация ────────────────────────────\nrender();</code></pre>\n\n<b>✅ Что ты освоил в этом курсе:</b>\n• Переменные, типы данных, операторы\n• Условия, циклы, функции, замыкания\n• Массивы и объекты (все методы)\n• DOM: поиск, изменение, создание элементов\n• События и делегирование\n• Promise, async/await, Fetch API\n• LocalStorage и современный ES6+ синтаксис\n\n🚀 Следующий шаг — <b>React</b> или <b>Node.js</b>: выбери своё направление!\n"
      }
    ]
  },
  {
    "id": 10,
    "title": "Макеты",
    "description": "Макеты страниц (Layouts) — это итоговый практический курс, который объединит все ваши знания по флексам, гридам и блочной модели, чтобы научить вас собирать полноценные, живые структуры сайтов (с шапкой, боковыми панелями, контентом и футером) по реальным дизайн-макетам.",
    "emoji": "🖼️",
    "language": "HTML CSS",
    "difficulty": "hard",
    "xp_reward": 700,
    "coins_reward": 350,
    "lessons": [
      {
        "order": 1,
        "title": "Что такое JavaScript",
        "text": "<b>JavaScript — язык программирования браузера</b>\n\nJS делает сайты интерактивными: реагирует на действия пользователя, меняет контент, отправляет запросы без перезагрузки страницы.\n\n<b>Где выполняется JavaScript:</b>\n• В браузере — любой сайт\n• На сервере — Node.js\n• В мобильных приложениях — React Native\n\n<b>Подключение скриптов:</b>\n\n<pre><code class='language-html'>&lt;!-- Внутри HTML --&gt;\n&lt;script&gt;\n  console.log(\"Привет из скрипта!\");\n&lt;/script&gt;\n\n&lt;!-- Внешний файл (рекомендуется) --&gt;\n&lt;script src=\"script.js\"&gt;&lt;/script&gt;\n\n&lt;!-- defer — выполнить после загрузки HTML --&gt;\n&lt;script src=\"script.js\" defer&gt;&lt;/script&gt;\n\n&lt;!-- async — выполнить как только загрузится --&gt;\n&lt;script src=\"analytics.js\" async&gt;&lt;/script&gt;</code></pre>\n\n<b>Первые шаги:</b>\n\n<pre><code class='language-javascript'>// Вывод в консоль браузера (F12 → Console)\nconsole.log(\"Привет, мир!\");\nconsole.log(42, true, [1,2,3]);\nconsole.error(\"Ошибка!\");\nconsole.warn(\"Предупреждение\");\nconsole.table([{name: \"Анна\", age: 25}]);\n\n// Диалоговые окна браузера\nalert(\"Сообщение\");\nconst name = prompt(\"Как тебя зовут?\");\nconst ok = confirm(\"Уверен?\"); // true или false</code></pre>\n\n💡 Всегда подключай JS перед <code>&lt;/body&gt;</code> или используй атрибут <code>defer</code>, чтобы HTML загружался раньше скрипта.\n"
      },
      {
        "order": 2,
        "title": "Переменные и типы данных",
        "text": "<b>Переменные — хранилища данных</b>\n\n<pre><code class='language-javascript'>// const — нельзя переназначить (используй по умолчанию)\nconst name = \"Анна\";\nconst age  = 25;\nconst PI   = 3.14159;\n\n// let — можно переназначить\nlet score = 0;\nscore = 100;         // OK\nscore += 50;         // score = 150\n\n// var — устаревший, не используй\nvar old = \"избегай\";</code></pre>\n\n<b>Типы данных:</b>\n\n<pre><code class='language-javascript'>// string — строка\nconst str1 = \"двойные кавычки\";\nconst str2 = 'одинарные кавычки';\nconst str3 = `шаблонная строка: ${name}, ${2 + 2}`;\nconst multiline = `Строка 1\nСтрока 2`;\n\n// number — число (целые и дробные)\nconst int   = 42;\nconst float = 3.14;\nconst neg   = -100;\nconst inf   = Infinity;\nconst nan   = NaN;      // Not a Number\n\n// boolean — логический\nconst yes = true;\nconst no  = false;\n\n// null — намеренное отсутствие значения\nconst empty = null;\n\n// undefined — значение не задано\nlet notDefined;\nconsole.log(notDefined); // undefined\n\n// object — объект\nconst user = { name: \"Анна\", age: 25 };\n\n// array — массив (тоже объект)\nconst colors = [\"red\", \"green\", \"blue\"];\n\n// symbol — уникальный идентификатор\nconst id = Symbol(\"id\");</code></pre>\n\n<b>Проверка типов:</b>\n\n<pre><code class='language-javascript'>typeof \"текст\"   // \"string\"\ntypeof 42        // \"number\"\ntypeof true      // \"boolean\"\ntypeof undefined // \"undefined\"\ntypeof null      // \"object\" (историческая ошибка!)\ntypeof []        // \"object\"\ntypeof {}        // \"object\"\n\n// Правильная проверка массива\nArray.isArray([1, 2, 3])  // true\n\n// Проверка на null\nvalue === null     // true если null</code></pre>\n"
      },
      {
        "order": 3,
        "title": "Операторы и условия",
        "text": "<b>Операторы сравнения</b>\n\n<pre><code class='language-javascript'>// == сравнивает значение (с приведением типов) — ИЗБЕГАЙ\n5 == \"5\"   // true (строку привели к числу)\n\n// === сравнивает значение И тип — ИСПОЛЬЗУЙ\n5 === \"5\"  // false\n5 === 5    // true\nnull === undefined // false\n\n// Неравенство\n5 != \"5\"  // false (с приведением)\n5 !== \"5\" // true  (строго)\n\n// Числовые\n5 > 3    // true\n5 >= 5   // true\n3 < 5    // true</code></pre>\n\n<b>Логические операторы:</b>\n\n<pre><code class='language-javascript'>true && true   // true  (И)\ntrue && false  // false\ntrue || false  // true  (ИЛИ)\nfalse || false // false\n!true          // false (НЕ)\n\n// Short-circuit (ленивые вычисления)\nfalse && doSomething()  // doSomething НЕ вызовется\ntrue  || doSomething()  // doSomething НЕ вызовется\n\n// Nullish coalescing — запасное значение при null/undefined\nconst val = null ?? \"по умолчанию\"; // \"по умолчанию\"\nconst x   = 0    ?? \"по умолчанию\"; // 0 (не null!)\n\n// Optional chaining — безопасный доступ\nconst city = user?.address?.city; // не упадёт если нет address</code></pre>\n\n<b>Условные операторы:</b>\n\n<pre><code class='language-javascript'>const age = 20;\n\n// if / else if / else\nif (age >= 18) {\n  console.log(\"Совершеннолетний\");\n} else if (age >= 14) {\n  console.log(\"Подросток\");\n} else {\n  console.log(\"Ребёнок\");\n}\n\n// Тернарный оператор\nconst status = age >= 18 ? \"взрослый\" : \"ребёнок\";\n\n// Switch\nconst day = \"пн\";\nswitch (day) {\n  case \"пн\":\n  case \"вт\":\n    console.log(\"Начало недели\"); break;\n  case \"пт\":\n    console.log(\"Пятница!\"); break;\n  default:\n    console.log(\"Другой день\");\n}</code></pre>\n"
      },
      {
        "order": 4,
        "title": "Циклы",
        "text": "<b>Циклы — повторяем действия</b>\n\n<pre><code class='language-javascript'>// for — классический цикл со счётчиком\nfor (let i = 0; i < 5; i++) {\n  console.log(i); // 0 1 2 3 4\n}\n\n// Обратный отсчёт\nfor (let i = 5; i > 0; i--) {\n  console.log(i); // 5 4 3 2 1\n}\n\n// while — пока условие истинно\nlet count = 0;\nwhile (count < 3) {\n  console.log(count++); // 0 1 2\n}\n\n// do...while — выполнится хотя бы раз\nlet x = 10;\ndo {\n  console.log(x); // 10\n  x++;\n} while (x < 5);\n\n// for...of — по элементам массива/строки\nconst fruits = [\"яблоко\", \"банан\", \"груша\"];\nfor (const fruit of fruits) {\n  console.log(fruit);\n}\n\n// for...in — по ключам объекта\nconst user = { name: \"Анна\", age: 25 };\nfor (const key in user) {\n  console.log(key, user[key]);\n  // name Анна\n  // age  25\n}</code></pre>\n\n<b>Управление циклом:</b>\n\n<pre><code class='language-javascript'>// break — прервать цикл\nfor (let i = 0; i < 10; i++) {\n  if (i === 5) break;\n  console.log(i); // 0 1 2 3 4\n}\n\n// continue — перейти к следующей итерации\nfor (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  console.log(i); // 0 1 3 4\n}\n\n// Метки (редко нужны)\nouter: for (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (j === 1) break outer; // выйти из внешнего\n  }\n}</code></pre>\n"
      },
      {
        "order": 5,
        "title": "Функции",
        "text": "<b>Функции — многократно используемый код</b>\n\n<pre><code class='language-javascript'>// Объявление функции (hoisting — доступна до объявления)\nfunction greet(name) {\n  return `Привет, ${name}!`;\n}\n\n// Функциональное выражение\nconst greet = function(name) {\n  return `Привет, ${name}!`;\n};\n\n// Стрелочная функция (arrow function)\nconst greet = (name) => `Привет, ${name}!`;\n\n// Без параметров\nconst sayHi  = () => \"Привет!\";\n\n// С несколькими строками\nconst add = (a, b) => {\n  const result = a + b;\n  return result;\n};</code></pre>\n\n<b>Параметры функций:</b>\n\n<pre><code class='language-javascript'>// Значения по умолчанию\nfunction greet(name = \"Гость\") {\n  return `Привет, ${name}!`;\n}\ngreet();        // \"Привет, Гость!\"\ngreet(\"Анна\"); // \"Привет, Анна!\"\n\n// Деструктуризация в параметрах\nfunction printUser({ name, age }) {\n  console.log(`${name}, ${age} лет`);\n}\nprintUser({ name: \"Анна\", age: 25 });\n\n// rest-параметры\nfunction sum(...numbers) {\n  return numbers.reduce((total, n) => total + n, 0);\n}\nsum(1, 2, 3, 4); // 10</code></pre>\n\n<b>Замыкания (closures):</b>\n\n<pre><code class='language-javascript'>function makeCounter() {\n  let count = 0;          // переменная в замыкании\n  return () => ++count;   // функция имеет доступ к count\n}\n\nconst counter = makeCounter();\ncounter(); // 1\ncounter(); // 2\ncounter(); // 3\n\n// Создание приватных данных\nfunction createUser(name) {\n  let _age = 0;                           // приватное\n  return {\n    getName: () => name,\n    getAge:  () => _age,\n    setAge:  (age) => { _age = age; },\n  };\n}</code></pre>\n"
      },
      {
        "order": 6,
        "title": "Массивы",
        "text": "<b>Массивы — упорядоченные коллекции данных</b>\n\n<pre><code class='language-javascript'>// Создание\nconst arr = [1, 2, 3];\nconst arr2 = new Array(3);        // [empty x 3]\nconst arr3 = Array.from(\"abc\");   // ['a','b','c']\n\n// Доступ\narr[0]     // 1 (первый)\narr.at(-1) // 3 (последний)</code></pre>\n\n<b>Методы — изменяют оригинал:</b>\n\n<pre><code class='language-javascript'>const a = [1, 2, 3];\n\na.push(4);        // добавить в конец  → [1,2,3,4]\na.pop();          // убрать из конца   → [1,2,3]\na.unshift(0);     // добавить в начало → [0,1,2,3]\na.shift();        // убрать из начала  → [1,2,3]\na.reverse();      // перевернуть       → [3,2,1]\na.sort();         // сортировать       → [1,2,3]\na.sort((x, y) => y - x); // по убыванию\n\n// splice — удалить/вставить\na.splice(1, 1);       // удалить 1 элемент с индекса 1\na.splice(1, 0, 10);   // вставить 10 после индекса 1</code></pre>\n\n<b>Методы — возвращают новый массив:</b>\n\n<pre><code class='language-javascript'>const nums = [1, 2, 3, 4, 5];\n\n// map — преобразовать каждый\nnums.map(n => n * 2)          // [2,4,6,8,10]\n\n// filter — отфильтровать\nnums.filter(n => n % 2 === 0) // [2,4]\n\n// reduce — свернуть в одно значение\nnums.reduce((sum, n) => sum + n, 0) // 15\n\n// find — найти первый\nnums.find(n => n > 3)    // 4\nnums.findIndex(n => n > 3) // 3\n\n// some / every\nnums.some(n => n > 4)   // true (хоть один)\nnums.every(n => n > 0)  // true (все)\n\n// includes\nnums.includes(3)  // true\n\n// flat / flatMap\n[[1,2],[3,4]].flat()  // [1,2,3,4]\n\n// slice — выреза\nnums.slice(1, 3)  // [2,3]\n\n// concat / spread\n[...nums, 6, 7]   // [1,2,3,4,5,6,7]\n\n// join → строка\nnums.join(\", \")   // \"1, 2, 3, 4, 5\"</code></pre>\n"
      },
      {
        "order": 7,
        "title": "Объекты",
        "text": "<b>Объекты — наборы свойств</b>\n\n<pre><code class='language-javascript'>// Создание объекта\nconst user = {\n  name: \"Анна\",\n  age: 25,\n  isAdmin: false,\n  address: {\n    city: \"Москва\",\n    street: \"Ленина, 1\",\n  },\n  greet() {            // метод объекта\n    return `Привет, я ${this.name}`;\n  },\n};\n\n// Доступ к свойствам\nuser.name          // \"Анна\"\nuser[\"name\"]       // \"Анна\"\nuser.address.city  // \"Москва\"\n\n// Изменение\nuser.age = 26;\nuser[\"email\"] = \"anna@mail.ru\";\n\n// Удаление\ndelete user.isAdmin;\n\n// Проверка наличия свойства\n\"name\" in user          // true\nuser.hasOwnProperty(\"name\") // true</code></pre>\n\n<b>Деструктуризация:</b>\n\n<pre><code class='language-javascript'>const { name, age } = user;\nconst { name: userName } = user; // другое имя переменной\nconst { name, age = 18 } = user; // значение по умолчанию\n\n// Вложенная\nconst { address: { city } } = user;\n\n// В функции\nfunction show({ name, age }) {\n  console.log(name, age);\n}</code></pre>\n\n<b>Spread и Object methods:</b>\n\n<pre><code class='language-javascript'>// Копия объекта\nconst copy = { ...user };\n\n// Слияние объектов\nconst extended = { ...user, role: \"admin\" };\n\n// Object.keys / values / entries\nObject.keys(user)    // [\"name\", \"age\", ...]\nObject.values(user)  // [\"Анна\", 25, ...]\nObject.entries(user) // [[\"name\",\"Анна\"], ...]\n\n// Перебор\nfor (const [key, val] of Object.entries(user)) {\n  console.log(key, val);\n}\n\n// Object.assign\nconst target = Object.assign({}, user, { role: \"vip\" });\n\n// Заморозка (нельзя менять)\nObject.freeze(user);</code></pre>\n"
      },
      {
        "order": 8,
        "title": "DOM — поиск элементов",
        "text": "<b>DOM (Document Object Model) — дерево HTML в JavaScript</b>\n\n<pre><code class='language-javascript'>// querySelector — первый совпадающий элемент\nconst btn  = document.querySelector(\".button\");\nconst h1   = document.querySelector(\"h1\");\nconst nav  = document.querySelector(\"#nav a\");\n\n// querySelectorAll — все совпадающие (NodeList)\nconst btns  = document.querySelectorAll(\".button\");\nconst items = document.querySelectorAll(\"li\");\n\n// Перебор NodeList\nbtns.forEach(btn => console.log(btn));\n[...btns].map(btn => btn.textContent); // в массив\n\n// Устаревшие, но работают\ndocument.getElementById(\"header\");\ndocument.getElementsByClassName(\"card\"); // HTMLCollection\ndocument.getElementsByTagName(\"p\");\n\n// Навигация по DOM\nelement.parentElement\nelement.children           // дочерние элементы\nelement.firstElementChild\nelement.lastElementChild\nelement.nextElementSibling\nelement.previousElementSibling\n\n// closest — ищет вверх по дереву\nbtn.closest(\".card\")</code></pre>\n\n<b>Чтение информации об элементе:</b>\n\n<pre><code class='language-javascript'>const el = document.querySelector(\".card\");\n\n// Содержимое\nel.textContent  // только текст\nel.innerHTML    // HTML внутри\nel.outerHTML    // HTML вместе с самим элементом\n\n// Атрибуты\nel.getAttribute(\"href\")\nel.setAttribute(\"href\", \"/new\")\nel.removeAttribute(\"disabled\")\nel.hasAttribute(\"required\")\n\n// Классы\nel.className          // строка классов\nel.classList          // DOMTokenList\nel.classList.contains(\"active\")\nel.classList.length\n\n// Размеры и позиция\nel.offsetWidth   // ширина с border\nel.offsetHeight\nel.getBoundingClientRect() // { top, left, width, height, ... }</code></pre>\n"
      },
      {
        "order": 9,
        "title": "DOM — изменение страницы",
        "text": "<b>Изменяем DOM из JavaScript</b>\n\n<pre><code class='language-javascript'>const el = document.querySelector(\".card\");\n\n// Текст и HTML\nel.textContent = \"Новый текст\";\nel.innerHTML   = \"&lt;strong&gt;Жирный&lt;/strong&gt; текст\";\n\n// Стили\nel.style.color          = \"red\";\nel.style.backgroundColor = \"#f5f5f5\";\nel.style.display        = \"none\";    // скрыть\nel.style.cssText        = \"color:red; font-size:18px;\"; // несколько\n\n// Классы\nel.classList.add(\"active\");\nel.classList.remove(\"hidden\");\nel.classList.toggle(\"dark\");         // добавить/убрать\nel.classList.replace(\"old\", \"new\");\n\n// Атрибуты\nel.setAttribute(\"data-id\", \"42\");\nel.dataset.id            // читать data-id\nel.dataset.userName      // data-user-name</code></pre>\n\n<b>Создание и добавление элементов:</b>\n\n<pre><code class='language-javascript'>// Создать элемент\nconst div = document.createElement(\"div\");\ndiv.className = \"card\";\ndiv.textContent = \"Новая карточка\";\n\n// Добавить в DOM\ndocument.body.appendChild(div);    // в конец body\ndocument.body.prepend(div);        // в начало body\nel.after(div);                     // после el\nel.before(div);                    // до el\nel.append(div);                    // в конец el\n\n// Шаблонные строки → HTML\nconst card = document.createElement(\"div\");\ncard.innerHTML = `\n  &lt;h2&gt;Заголовок&lt;/h2&gt;\n  &lt;p&gt;Описание&lt;/p&gt;\n  &lt;button class=\"btn\"&gt;Кнопка&lt;/button&gt;\n`;\ndocument.body.append(card);\n\n// Удалить\nel.remove();\nel.parentElement.removeChild(el);\n\n// Клонировать\nconst clone = el.cloneNode(true); // true = с детьми</code></pre>\n"
      },
      {
        "order": 10,
        "title": "События",
        "text": "<b>События — реакция на действия пользователя</b>\n\n<pre><code class='language-javascript'>const btn = document.querySelector(\".btn\");\n\n// Добавить обработчик\nbtn.addEventListener(\"click\", function(event) {\n  console.log(\"Клик!\", event);\n});\n\n// Стрелочная функция\nbtn.addEventListener(\"click\", (e) => {\n  console.log(\"Цель:\", e.target);\n});\n\n// Удалить обработчик (нужна ссылка на функцию)\nconst handler = () => console.log(\"клик\");\nbtn.addEventListener(\"click\", handler);\nbtn.removeEventListener(\"click\", handler);</code></pre>\n\n<b>Популярные события:</b>\n\n<pre><code class='language-javascript'>// Мышь\nel.addEventListener(\"click\",      e => {});\nel.addEventListener(\"dblclick\",   e => {});\nel.addEventListener(\"mouseenter\", e => {}); // наведение (без всплытия)\nel.addEventListener(\"mouseleave\", e => {});\nel.addEventListener(\"mousemove\",  e => { console.log(e.clientX, e.clientY); });\nel.addEventListener(\"contextmenu\",e => { e.preventDefault(); }); // ПКМ\n\n// Клавиатура\ndocument.addEventListener(\"keydown\", e => {\n  console.log(e.key, e.code);\n  if (e.key === \"Enter\") { /* ... */ }\n  if (e.ctrlKey && e.key === \"s\") { e.preventDefault(); /* сохранить */ }\n});\n\n// Форма\nform.addEventListener(\"submit\",  e => { e.preventDefault(); });\ninput.addEventListener(\"input\",  e => { console.log(e.target.value); });\ninput.addEventListener(\"change\", e => {});\ninput.addEventListener(\"focus\",  e => {});\ninput.addEventListener(\"blur\",   e => {});\n\n// Документ\ndocument.addEventListener(\"DOMContentLoaded\", () => { /* DOM готов */ });\nwindow.addEventListener(\"load\",   () => { /* всё загружено */ });\nwindow.addEventListener(\"resize\", () => { console.log(window.innerWidth); });\nwindow.addEventListener(\"scroll\", () => { console.log(window.scrollY); });</code></pre>\n\n<b>Объект события:</b>\n\n<pre><code class='language-javascript'>btn.addEventListener(\"click\", (e) => {\n  e.target          // элемент, на котором произошло событие\n  e.currentTarget   // элемент с обработчиком\n  e.preventDefault() // отменить действие по умолчанию\n  e.stopPropagation() // остановить всплытие\n  e.clientX, e.clientY // координаты мыши\n  e.key, e.code    // нажатая клавиша\n});</code></pre>\n"
      },
      {
        "order": 11,
        "title": "Делегирование событий",
        "text": "<b>Всплытие и делегирование</b>\n\n<b>Всплытие (bubbling):</b> событие сначала происходит на элементе, потом поднимается к родителям.\n\n<pre><code class='language-javascript'>// Пример всплытия\ndocument.querySelector(\".card\").addEventListener(\"click\", (e) => {\n  console.log(\"card\");   // сработает при клике на кнопку внутри\n});\ndocument.querySelector(\".btn\").addEventListener(\"click\", (e) => {\n  console.log(\"btn\");    // сработает первым\n  e.stopPropagation();   // остановить всплытие вверх\n});</code></pre>\n\n<b>Делегирование — один обработчик для многих элементов:</b>\n\n<pre><code class='language-javascript'>// ❌ Плохо — по обработчику на каждую кнопку\ndocument.querySelectorAll(\".btn-delete\").forEach(btn => {\n  btn.addEventListener(\"click\", deleteItem);\n});\n\n// ✅ Хорошо — один обработчик на родителе\nconst list = document.querySelector(\".list\");\nlist.addEventListener(\"click\", (e) => {\n  // e.target — фактически нажатый элемент\n  if (e.target.classList.contains(\"btn-delete\")) {\n    const item = e.target.closest(\".list-item\");\n    item.remove();\n  }\n  if (e.target.classList.contains(\"btn-edit\")) {\n    const id = e.target.dataset.id;\n    editItem(id);\n  }\n});</code></pre>\n\n<b>Почему делегирование лучше:</b>\n• Работает для динамически добавленных элементов\n• Экономит память (один обработчик вместо сотни)\n• Проще поддерживать код\n\n<pre><code class='language-javascript'>// Практический пример: список задач\nconst taskList = document.querySelector(\"#tasks\");\n\ntaskList.addEventListener(\"click\", (e) => {\n  const task = e.target.closest(\".task\");\n  if (!task) return;\n\n  if (e.target.matches(\".btn-done\")) {\n    task.classList.toggle(\"completed\");\n  }\n  if (e.target.matches(\".btn-delete\")) {\n    task.remove();\n  }\n});</code></pre>\n"
      },
      {
        "order": 12,
        "title": "Асинхронность и Promise",
        "text": "<b>Асинхронность в JavaScript</b>\n\nJS однопоточный — выполняет один кусок кода за раз. Но долгие операции (запросы, таймеры) не блокируют поток.\n\n<b>Callback — устаревший подход:</b>\n\n<pre><code class='language-javascript'>// Таймеры\nsetTimeout(() => console.log(\"Через 1 сек\"), 1000);\nsetInterval(() => console.log(\"Каждые 2 сек\"), 2000);\nconst id = setInterval(...);\nclearInterval(id); // остановить\n\n// Callback hell — вложенность растёт\ngetData(function(data) {\n  processData(data, function(result) {\n    saveResult(result, function() {\n      // ещё глубже...\n    });\n  });\n});</code></pre>\n\n<b>Promise — обещание будущего результата:</b>\n\n<pre><code class='language-javascript'>// Создание промиса\nconst promise = new Promise((resolve, reject) => {\n  // выполнить асинхронную операцию\n  if (success) {\n    resolve(data);   // успех\n  } else {\n    reject(error);   // ошибка\n  }\n});\n\n// Использование\npromise\n  .then(data => console.log(\"Успех:\", data))\n  .catch(err => console.error(\"Ошибка:\", err))\n  .finally(() => console.log(\"В любом случае\"));\n\n// Параллельное выполнение\nPromise.all([fetch(\"/api/1\"), fetch(\"/api/2\")])\n  .then(([res1, res2]) => { /* оба готовы */ });\n\n// Гонка — первый результат\nPromise.race([slowRequest(), fastRequest()])\n  .then(result => console.log(\"Первый:\", result));\n\n// Всегда дождаться всех\nPromise.allSettled([p1, p2, p3])\n  .then(results => results.forEach(r => console.log(r.status)));</code></pre>\n"
      },
      {
        "order": 13,
        "title": "async/await и Fetch API",
        "text": "<b>async/await — удобный синтаксис для промисов</b>\n\n<pre><code class='language-javascript'>// async — функция всегда возвращает Promise\nasync function loadUser(id) {\n  // await — ждём результата промиса\n  const response = await fetch(`/api/users/${id}`);\n  const user = await response.json();\n  return user;\n}\n\n// Обработка ошибок\nasync function loadData() {\n  try {\n    const res  = await fetch(\"/api/data\");\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error(\"Ошибка:\", err.message);\n    return null;\n  } finally {\n    console.log(\"Запрос завершён\");\n  }\n}</code></pre>\n\n<b>Fetch API — запросы к серверу:</b>\n\n<pre><code class='language-javascript'>// GET — получить данные\nconst res   = await fetch(\"https://api.example.com/posts\");\nconst posts = await res.json();\n\n// POST — отправить данные\nconst response = await fetch(\"/api/users\", {\n  method:  \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body:    JSON.stringify({ name: \"Анна\", age: 25 }),\n});\nconst newUser = await response.json();\n\n// PUT — обновить\nawait fetch(`/api/users/${id}`, {\n  method:  \"PUT\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body:    JSON.stringify({ name: \"Анна Иванова\" }),\n});\n\n// DELETE — удалить\nawait fetch(`/api/users/${id}`, { method: \"DELETE\" });\n\n// Параллельные запросы\nconst [users, posts] = await Promise.all([\n  fetch(\"/api/users\").then(r => r.json()),\n  fetch(\"/api/posts\").then(r => r.json()),\n]);</code></pre>\n\n<b>Проверка ответа:</b>\n\n<pre><code class='language-javascript'>const res = await fetch(\"/api/data\");\n\nres.ok          // true если 200-299\nres.status      // 200, 404, 500...\nres.statusText  // \"OK\", \"Not Found\"...\n\nawait res.json()   // → объект\nawait res.text()   // → строка\nawait res.blob()   // → файл</code></pre>\n"
      },
      {
        "order": 14,
        "title": "LocalStorage и современный JS",
        "text": "<b>Web Storage — хранение данных в браузере</b>\n\n<pre><code class='language-javascript'>// localStorage — постоянное (не очищается при закрытии)\nlocalStorage.setItem(\"theme\", \"dark\");\nlocalStorage.setItem(\"user\", JSON.stringify({ name: \"Анна\" }));\n\nconst theme = localStorage.getItem(\"theme\"); // \"dark\"\nconst user  = JSON.parse(localStorage.getItem(\"user\"));\n\nlocalStorage.removeItem(\"theme\");\nlocalStorage.clear(); // очистить всё\n\n// sessionStorage — только до закрытия вкладки\nsessionStorage.setItem(\"step\", \"2\");\n\n// Проверка\nif (localStorage.getItem(\"token\")) { /* авторизован */ }</code></pre>\n\n<b>Современный синтаксис ES6+:</b>\n\n<pre><code class='language-javascript'>// Деструктуризация массива\nconst [first, second, ...rest] = [1, 2, 3, 4, 5];\nconst [, , third] = [1, 2, 3]; // пропуск элементов\n\n// Spread\nconst arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]\nMath.max(...arr1);             // 3\n\nconst obj1 = { a: 1 };\nconst obj2 = { ...obj1, b: 2 }; // { a:1, b:2 }\n\n// Шаблонные строки\nconst html = `\n  &lt;div class=\"card\"&gt;\n    &lt;h2&gt;${user.name}&lt;/h2&gt;\n    &lt;p&gt;${user.age} лет&lt;/p&gt;\n  &lt;/div&gt;\n`.trim();\n\n// Computed property names\nconst key = \"name\";\nconst obj = { [key]: \"Анна\" }; // { name: \"Анна\" }\n\n// Short property names\nconst name = \"Анна\", age = 25;\nconst user = { name, age }; // { name: \"Анна\", age: 25 }\n\n// Nullish assignment\nlet x = null;\nx ??= \"по умолчанию\"; // присвоить только если null/undefined\n\n// Logical assignment\nlet a = 0;\na ||= 10; // присвоить если falsy\na &&= 20; // присвоить если truthy</code></pre>\n"
      },
      {
        "order": 15,
        "title": "Итоги: мини-приложение на JS",
        "text": "<b>Собираем всё вместе — список задач</b>\n\n<pre><code class='language-javascript'>// ── Состояние приложения ─────────────────────\nlet tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\nlet nextId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;\n\n// ── Сохранение ───────────────────────────────\nfunction save() {\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n\n// ── Рендеринг ────────────────────────────────\nfunction render() {\n  const list = document.querySelector(\"#task-list\");\n  list.innerHTML = tasks.map(task => `\n    &lt;li class=\"task ${task.done ? 'done' : ''}\" data-id=\"${task.id}\"&gt;\n      &lt;span&gt;${task.text}&lt;/span&gt;\n      &lt;button class=\"btn-done\"&gt;✓&lt;/button&gt;\n      &lt;button class=\"btn-delete\"&gt;✕&lt;/button&gt;\n    &lt;/li&gt;\n  `).join(\"\");\n}\n\n// ── Добавление задачи ────────────────────────\ndocument.querySelector(\"#task-form\")\n  .addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const input = e.target.querySelector(\"input\");\n    const text = input.value.trim();\n    if (!text) return;\n    tasks.push({ id: nextId++, text, done: false });\n    save();\n    render();\n    input.value = \"\";\n    input.focus();\n  });\n\n// ── Делегирование (done / delete) ────────────\ndocument.querySelector(\"#task-list\")\n  .addEventListener(\"click\", (e) => {\n    const li = e.target.closest(\".task\");\n    if (!li) return;\n    const id = Number(li.dataset.id);\n\n    if (e.target.matches(\".btn-done\")) {\n      tasks = tasks.map(t =>\n        t.id === id ? { ...t, done: !t.done } : t\n      );\n    }\n    if (e.target.matches(\".btn-delete\")) {\n      tasks = tasks.filter(t => t.id !== id);\n    }\n    save();\n    render();\n  });\n\n// ── Инициализация ────────────────────────────\nrender();</code></pre>\n\n<b>✅ Что ты освоил в этом курсе:</b>\n• Переменные, типы данных, операторы\n• Условия, циклы, функции, замыкания\n• Массивы и объекты (все методы)\n• DOM: поиск, изменение, создание элементов\n• События и делегирование\n• Promise, async/await, Fetch API\n• LocalStorage и современный ES6+ синтаксис\n\n🚀 Следующий шаг — <b>React</b> или <b>Node.js</b>: выбери своё направление!\n"
      }
    ]
  }
];

// ─── Тесты (ключ = course_id курса) ──────────────────────────────────────────
CONTENT.tests = {
  "1": {
    "easy": [
      {
        "question": "Что означает аббревиатура HTML?",
        "answers": [
          "HyperText Markup Language",
          "HighText Marking Language",
          "HyperLink Management Language",
          "Home Tool Markup Language"
        ],
        "correct": 0
      },
      {
        "question": "Какой тег создаёт самый крупный заголовок?",
        "answers": [
          "<h6>",
          "<header>",
          "<h1>",
          "<heading>"
        ],
        "correct": 2
      },
      {
        "question": "Какой тег создаёт ссылку?",
        "answers": [
          "<link>",
          "<a>",
          "<href>",
          "<url>"
        ],
        "correct": 1
      },
      {
        "question": "Какой тег вставляет изображение?",
        "answers": [
          "<image>",
          "<pic>",
          "<img>",
          "<src>"
        ],
        "correct": 2
      },
      {
        "question": "Что содержит тег <body>?",
        "answers": [
          "Мета-данные страницы",
          "CSS-стили",
          "Весь видимый контент",
          "JavaScript-код"
        ],
        "correct": 2
      },
      {
        "question": "Какой тег создаёт маркированный список?",
        "answers": [
          "<ol>",
          "<list>",
          "<ul>",
          "<li>"
        ],
        "correct": 2
      },
      {
        "question": "Какой тег делает текст жирным (с семантикой важности)?",
        "answers": [
          "<italic>",
          "<strong>",
          "<i>",
          "<bold>"
        ],
        "correct": 1
      },
      {
        "question": "Какой тег создаёт перенос строки?",
        "answers": [
          "<nl>",
          "<break>",
          "<newline>",
          "<br>"
        ],
        "correct": 3
      },
      {
        "question": "Какой DOCTYPE используется для HTML5?",
        "answers": [
          "<!DOCTYPE html5>",
          "<!DOCTYPE HTML PUBLIC>",
          "<!DOCTYPE html>",
          "<!DOCTYPE web>"
        ],
        "correct": 2
      },
      {
        "question": "Какой атрибут тега <img> содержит путь к файлу?",
        "answers": [
          "href",
          "alt",
          "path",
          "src"
        ],
        "correct": 3
      }
    ],
    "medium": [
      {
        "question": "Какой атрибут тега <code>a</code> открывает ссылку в новой вкладке?",
        "answers": [
          "target=\"_self\"",
          "open=\"new\"",
          "target=\"_blank\"",
          "href=\"new\""
        ],
        "correct": 2
      },
      {
        "question": "Что делает атрибут alt у тега img>",
        "answers": [
          "Задаёт ширину изображения",
          "Описывает изображение для незрячих и если картинка не загрузилась",
          "Задаёт заголовок при наведении",
          "Задаёт путь к изображению"
        ],
        "correct": 1
      },
      {
        "question": "Какой тег задаёт название страницы во вкладке браузера?",
        "answers": [
          "<h1>",
          "<header>",
          "<title>",
          "<name>"
        ],
        "correct": 2
      },
      {
        "question": "Является ли тег <img> одиночным (непарным)?",
        "answers": [
          "Нет, требует </img>",
          "Да, одиночный тег",
          "Зависит от версии HTML",
          "Только в HTML5"
        ],
        "correct": 1
      },
      {
        "question": "Какой тег используется для пункта любого списка?",
        "answers": [
          "<item>",
          "<point>",
          "<li>",
          "<dl>"
        ],
        "correct": 2
      },
      {
        "question": "Что содержит тег <head>?",
        "answers": [
          "Видимый контент страницы",
          "Заголовки h1-h6",
          "Служебную информацию: мета-теги, стили, скрипты",
          "Шапку сайта"
        ],
        "correct": 2
      },
      {
        "question": "Какой атрибут тега <a> указывает адрес ссылки?",
        "answers": [
          "src",
          "url",
          "href",
          "link"
        ],
        "correct": 2
      },
      {
        "question": "Тег <ol> создаёт...",
        "answers": [
          "Маркированный список",
          "Нумерованный список",
          "Список определений",
          "Вложенный список"
        ],
        "correct": 1
      },
      {
        "question": "Какой тег используется для заголовка ячейки таблицы?",
        "answers": [
          "<td>",
          "<th>",
          "<tr>",
          "<caption>"
        ],
        "correct": 1
      },
      {
        "question": "Тег <strong> отличается от <b> тем, что...",
        "answers": [
          "Они ничем не отличаются",
          "<strong> семантически означает важность текста",
          "<b> работает только в старых браузерах",
          "<strong> создаёт более жирный шрифт"
        ],
        "correct": 1
      },
      {
        "question": "Атрибут colspan в таблице...",
        "answers": [
          "Объединяет ячейки по вертикали",
          "Задаёт цвет столбца",
          "Объединяет ячейки по горизонтали",
          "Задаёт ширину столбца"
        ],
        "correct": 2
      },
      {
        "question": "Какой тег используется для навигационного меню?",
        "answers": [
          "<menu>",
          "<nav>",
          "<navigation>",
          "<header>"
        ],
        "correct": 1
      },
      {
        "question": "Какой тег правильно описывает главный контент страницы?",
        "answers": [
          "<content>",
          "<body>",
          "<main>",
          "<article>"
        ],
        "correct": 2
      },
      {
        "question": "Для чего используется атрибут for у тега <label>?",
        "answers": [
          "Задаёт текст метки",
          "Связывает метку с полем по его id",
          "Указывает имя поля",
          "Делает поле обязательным"
        ],
        "correct": 1
      },
      {
        "question": "Что означает мета-тег charset=\"UTF-8\"?",
        "answers": [
          "Размер шрифта",
          "Версия HTML",
          "Кодировка символов страницы",
          "Скорость загрузки"
        ],
        "correct": 2
      },
      {
        "question": "Тег <article> используется для...",
        "answers": [
          "Любого блока контента",
          "Самостоятельной единицы контента (статья, пост)",
          "Боковой панели",
          "Подвала страницы"
        ],
        "correct": 1
      },
      {
        "question": "Какой атрибут формы задаёт URL для отправки данных?",
        "answers": [
          "href",
          "src",
          "action",
          "url"
        ],
        "correct": 2
      },
      {
        "question": "Тег <aside> предназначен для...",
        "answers": [
          "Подвала страницы",
          "Боковой панели с дополнительным контентом",
          "Навигации",
          "Формы"
        ],
        "correct": 1
      },
      {
        "question": "Как сделать ссылку на раздел страницы с id=\"contacts\"?",
        "answers": [
          "<a href=\"contacts\">",
          "<a href=\".contacts\">",
          "<a href=\"#contacts\">",
          "<a href=\"id:contacts\">"
        ],
        "correct": 2
      },
      {
        "question": "Мета-тег viewport нужен для...",
        "answers": [
          "SEO-оптимизации",
          "Подключения стилей",
          "Корректного отображения на мобильных устройствах",
          "Задания языка страницы"
        ],
        "correct": 2
      }
    ],
    "hard": [
      {
        "question": "Чем <section> отличается от <article>?",
        "answers": [
          "Они взаимозаменяемы",
          "<article> — самостоятельный контент, <section> — тематическая группа внутри страницы",
          "<section> только для новостей",
          "<article> содержит только текст"
        ],
        "correct": 1
      },
      {
        "question": "Атрибут rowspan в таблице...",
        "answers": [
          "Объединяет ячейки по горизонтали",
          "Задаёт высоту строки",
          "Объединяет ячейки по вертикали",
          "Задаёт цвет строки"
        ],
        "correct": 2
      },
      {
        "question": "Что делает атрибут defer у тега <script>?",
        "answers": [
          "Загружает скрипт асинхронно немедленно",
          "Выполняет скрипт после полной загрузки HTML",
          "Отключает скрипт",
          "Загружает скрипт из кэша"
        ],
        "correct": 1
      },
      {
        "question": "Тег <dl> используется для...",
        "answers": [
          "Загрузки файлов",
          "Списка определений (термин + описание)",
          "Нумерованного списка",
          "Маркированного списка"
        ],
        "correct": 1
      },
      {
        "question": "Что делает атрибут download у тега <a>?",
        "answers": [
          "Открывает ссылку в новой вкладке",
          "Инициирует скачивание файла вместо открытия",
          "Запрещает переход по ссылке",
          "Добавляет иконку скачивания"
        ],
        "correct": 1
      },
      {
        "question": "Тег <figure> предназначен для...",
        "answers": [
          "Только изображений",
          "Числовых данных",
          "Самостоятельного контента (изображение, код, цитата) с подписью",
          "Таблиц"
        ],
        "correct": 2
      },
      {
        "question": "Какой тип <input> используется для выбора даты?",
        "answers": [
          "type=\"calendar\"",
          "type=\"date\"",
          "type=\"datetime\"",
          "type=\"picker\""
        ],
        "correct": 1
      },
      {
        "question": "Что означает атрибут autocomplete=\"off\" у формы?",
        "answers": [
          "Отключает автопроверку орфографии",
          "Запрещает браузеру предлагать сохранённые значения",
          "Запрещает отправку формы",
          "Отключает валидацию"
        ],
        "correct": 1
      },
      {
        "question": "Тег <time> с атрибутом datetime нужен для...",
        "answers": [
          "Отображения текущего времени",
          "Машиночитаемого представления дат для поисковиков",
          "Анимации времени",
          "Подсчёта времени"
        ],
        "correct": 1
      },
      {
        "question": "Атрибут rel=\"noopener\" у ссылки с target=\"_blank\" нужен для...",
        "answers": [
          "SEO-оптимизации",
          "Безопасности: предотвращения доступа открытой страницы к window.opener",
          "Ускорения загрузки",
          "Кэширования"
        ],
        "correct": 1
      },
      {
        "question": "Тег <datalist> используется для...",
        "answers": [
          "Создания выпадающего списка <select>",
          "Добавления автодополнения к полю <input>",
          "Отображения таблицы данных",
          "Хранения данных на странице"
        ],
        "correct": 1
      },
      {
        "question": "Атрибут pattern у <input> задаёт...",
        "answers": [
          "Стиль поля",
          "Регулярное выражение для валидации",
          "Шаблон текста-заглушки",
          "Тип данных"
        ],
        "correct": 1
      },
      {
        "question": "Для чего используется тег <summary> внутри <details>?",
        "answers": [
          "Для подписи к таблице",
          "Как заголовок скрытого блока (кликабельный)",
          "Для описания изображения",
          "Для вывода итогов"
        ],
        "correct": 1
      },
      {
        "question": "Что делает мета-тег <meta name=\"robots\" content=\"noindex\">?",
        "answers": [
          "Запрещает JavaScript на странице",
          "Запрещает поисковикам индексировать страницу",
          "Ускоряет загрузку страницы",
          "Задаёт кодировку"
        ],
        "correct": 1
      },
      {
        "question": "Тег <canvas> предназначен для...",
        "answers": [
          "Вставки видео",
          "Рисования графики через JavaScript API",
          "Создания SVG-изображений",
          "Отображения 3D-моделей"
        ],
        "correct": 1
      },
      {
        "question": "Атрибут srcset у тега <img> используется для...",
        "answers": [
          "Набора запасных путей к изображению",
          "Адаптивных изображений разного разрешения",
          "Анимированных изображений",
          "Изображений с прозрачностью"
        ],
        "correct": 1
      },
      {
        "question": "Тег <progress> отображает...",
        "answers": [
          "Прогресс загрузки страницы",
          "Полосу прогресса для задачи",
          "Шкалу оценок",
          "Статистику посещений"
        ],
        "correct": 1
      },
      {
        "question": "Чем <input type=\"button\"> отличается от <button>?",
        "answers": [
          "Они идентичны",
          "<button> может содержать HTML внутри, <input type=\"button\"> — только текст",
          "<input> работает без JavaScript",
          "<button> автоматически отправляет форму"
        ],
        "correct": 1
      },
      {
        "question": "Тег <abbr> используется для...",
        "answers": [
          "Аббревиатур с расшифровкой в атрибуте title",
          "Выделения кода",
          "Создания сносок",
          "Вставки специальных символов"
        ],
        "correct": 0
      },
      {
        "question": "Что означает атрибут async у тега <script>?",
        "answers": [
          "Скрипт выполняется после загрузки HTML",
          "Скрипт загружается параллельно и выполняется сразу после загрузки",
          "Скрипт загружается из кэша",
          "Скрипт не блокирует рендеринг никогда"
        ],
        "correct": 1
      },
      {
        "question": "Open Graph (og:) мета-теги нужны для...",
        "answers": [
          "SEO в Google",
          "Корректного отображения ссылок в социальных сетях и мессенджерах",
          "Ускорения загрузки",
          "AMP-страниц"
        ],
        "correct": 1
      },
      {
        "question": "Тег <fieldset> используется для...",
        "answers": [
          "Группировки полей формы",
          "Создания таблицы",
          "Скрытого хранения данных",
          "Выделения кода"
        ],
        "correct": 0
      },
      {
        "question": "Атрибут tabindex=\"-1\" у элемента означает...",
        "answers": [
          "Элемент первый в порядке Tab",
          "Элемент исключён из порядка Tab но доступен программно",
          "Элемент заблокирован",
          "Элемент скрыт"
        ],
        "correct": 1
      },
      {
        "question": "Тег <meter> отличается от <progress> тем, что...",
        "answers": [
          "Они идентичны",
          "<meter> показывает измеримое значение в диапазоне (заполненность диска), <progress> — ход выполнения задачи",
          "<progress> работает без JavaScript",
          "<meter> только для чисел"
        ],
        "correct": 1
      },
      {
        "question": "Атрибут loading=\"lazy\" у тега <img> означает...",
        "answers": [
          "Изображение не загружается",
          "Отложенная загрузка — картинка грузится только когда появляется в viewport",
          "Изображение загружается в низком качестве",
          "Кэширование изображения"
        ],
        "correct": 1
      },
      {
        "question": "ARIA-атрибуты в HTML нужны для...",
        "answers": [
          "Анимации",
          "Улучшения доступности для пользователей со скринридерами",
          "SEO-оптимизации",
          "Управления CSS"
        ],
        "correct": 1
      },
      {
        "question": "Тег <noscript> выводит контент когда...",
        "answers": [
          "JavaScript недоступен или отключён",
          "CSS не загружен",
          "Страница открыта на мобильном",
          "Изображения отключены"
        ],
        "correct": 0
      },
      {
        "question": "Атрибут data-* (data-атрибуты) предназначен для...",
        "answers": [
          "Хранения данных для серверной обработки",
          "Хранения произвольных данных в элементе для использования в JS/CSS",
          "Кэширования данных",
          "Валидации форм"
        ],
        "correct": 1
      },
      {
        "question": "Тег <base> в <head> задаёт...",
        "answers": [
          "Базовый шрифт страницы",
          "Базовый URL для всех относительных ссылок страницы",
          "Базовый цвет страницы",
          "Базовую кодировку"
        ],
        "correct": 1
      },
      {
        "question": "Тег <template> используется для...",
        "answers": [
          "HTML-шаблонов, которые не отображаются но доступны через JavaScript",
          "Подключения шаблонизатора",
          "Создания форм",
          "Многократного использования стилей"
        ],
        "correct": 0
      }
    ]
  },
  "2": {
    "easy": [
      {
        "question": "Для чего используется CSS?",
        "answers": [
          "Структура страницы",
          "Оформление и стилизация элементов",
          "Серверная логика",
          "Работа с базами данных"
        ],
        "correct": 1
      },
      {
        "question": "Как начинается CSS-селектор класса?",
        "answers": [
          "#",
          "@",
          ".",
          "*"
        ],
        "correct": 2
      },
      {
        "question": "Как начинается CSS-селектор ID?",
        "answers": [
          ".",
          "@",
          "*",
          "#"
        ],
        "correct": 3
      },
      {
        "question": "Как задать красный цвет текста в CSS?",
        "answers": [
          "text-color: red;",
          "font-color: red;",
          "color: red;",
          "text: red;"
        ],
        "correct": 2
      },
      {
        "question": "Как подключить внешний CSS-файл?",
        "answers": [
          "<style src='style.css'>",
          "<link rel='stylesheet' href='style.css'>",
          "<css href='style.css'>",
          "<import src='style.css'>"
        ],
        "correct": 1
      },
      {
        "question": "Какое свойство задаёт цвет фона?",
        "answers": [
          "color",
          "background",
          "fill",
          "bg-color"
        ],
        "correct": 1
      },
      {
        "question": "Какое значение display делает элемент невидимым и не занимающим место?",
        "answers": [
          "hidden",
          "invisible",
          "none",
          "collapse"
        ],
        "correct": 2
      },
      {
        "question": "Что такое margin в CSS?",
        "answers": [
          "Внутренний отступ",
          "Рамка элемента",
          "Внешний отступ",
          "Тень элемента"
        ],
        "correct": 2
      },
      {
        "question": "Что такое padding в CSS?",
        "answers": [
          "Внешний отступ",
          "Внутренний отступ",
          "Рамка",
          "Размер шрифта"
        ],
        "correct": 1
      },
      {
        "question": "Как сделать текст жирным через CSS?",
        "answers": [
          "font-weight: bold;",
          "text-weight: bold;",
          "font-style: bold;",
          "text-bold: true;"
        ],
        "correct": 0
      }
    ],
    "medium": [
      {
        "question": "Что делает display: flex?",
        "answers": [
          "Скрывает элемент",
          "Создаёт гибкий контейнер для дочерних элементов",
          "Делает элемент строчным",
          "Включает Grid"
        ],
        "correct": 1
      },
      {
        "question": "Что делает justify-content: center во flex-контейнере?",
        "answers": [
          "Выравнивает по поперечной оси",
          "Выравнивает по главной оси по центру",
          "Центрирует текст",
          "Задаёт отступы между элементами"
        ],
        "correct": 1
      },
      {
        "question": "Что делает align-items: center?",
        "answers": [
          "Центрирует по главной оси",
          "Центрирует по поперечной оси",
          "Растягивает элементы",
          "Выравнивает текст"
        ],
        "correct": 1
      },
      {
        "question": "Что делает box-sizing: border-box?",
        "answers": [
          "Добавляет рамку",
          "Width и height включают padding и border",
          "Скрывает переполнение",
          "Включает Grid"
        ],
        "correct": 1
      },
      {
        "question": "Порядок значений в margin: 10px 20px 15px 5px?",
        "answers": [
          "Лево, право, верх, низ",
          "Верх, низ, лево, право",
          "Верх, право, низ, лево",
          "Лево, верх, право, низ"
        ],
        "correct": 2
      },
      {
        "question": "Что такое CSS-специфичность?",
        "answers": [
          "Скорость загрузки стилей",
          "Приоритет применения стилей при конфликте",
          "Размер CSS-файла",
          "Порядок объявления свойств"
        ],
        "correct": 1
      },
      {
        "question": "Какое свойство делает элемент полупрозрачным?",
        "answers": [
          "transparent: 0.5",
          "visibility: half",
          "opacity: 0.5",
          "alpha: 0.5"
        ],
        "correct": 2
      },
      {
        "question": "Что делает position: sticky?",
        "answers": [
          "Фиксирует всегда в одном месте",
          "Ведёт себя как relative, но прилипает при скролле",
          "Как absolute",
          "Убирает из потока"
        ],
        "correct": 1
      },
      {
        "question": "Что такое медиазапрос в CSS?",
        "answers": [
          "Запрос к серверу",
          "Стили для определённых условий (ширина, ориентация)",
          "Анимация",
          "Переменная"
        ],
        "correct": 1
      },
      {
        "question": "Чем min-width отличается от max-width в медиазапросах?",
        "answers": [
          "Они идентичны",
          "min-width — для экранов БОЛЬШЕ значения, max-width — для МЕНЬШЕ",
          "min-width только для мобильных",
          "max-width ограничивает блок"
        ],
        "correct": 1
      },
      {
        "question": "Как объявить CSS-переменную?",
        "answers": [
          "$primary: blue;",
          "@primary: blue;",
          "--primary: blue;",
          "var-primary: blue;"
        ],
        "correct": 2
      },
      {
        "question": "Как использовать CSS-переменную?",
        "answers": [
          "$primary",
          "@primary",
          "var(--primary)",
          "--primary"
        ],
        "correct": 2
      },
      {
        "question": "Что делает flex: 1 для элемента?",
        "answers": [
          "Задаёт ширину 1px",
          "Элемент занимает всё свободное пространство",
          "Включает Flexbox",
          "Устанавливает порядок"
        ],
        "correct": 1
      },
      {
        "question": "Что делает transform: translateX(20px)?",
        "answers": [
          "Поворачивает элемент",
          "Перемещает элемент на 20px вправо",
          "Масштабирует элемент",
          "Наклоняет элемент"
        ],
        "correct": 1
      },
      {
        "question": "Свойство transition нужно для...",
        "answers": [
          "Анимации по ключевым кадрам",
          "Плавного изменения CSS-свойств",
          "Трансформации элементов",
          "Управления z-index"
        ],
        "correct": 1
      },
      {
        "question": "Что делает overflow: hidden?",
        "answers": [
          "Скрывает элемент",
          "Обрезает содержимое, выходящее за границы",
          "Добавляет скроллбар",
          "Убирает рамку"
        ],
        "correct": 1
      },
      {
        "question": "Псевдокласс :hover применяется...",
        "answers": [
          "При клике на элемент",
          "При наведении мыши",
          "При фокусе",
          "При первом посещении"
        ],
        "correct": 1
      },
      {
        "question": "Что такое z-index?",
        "answers": [
          "Порядковый номер в HTML",
          "Уровень прозрачности",
          "Порядок элементов по глубине (кто выше визуально)",
          "Размер шрифта"
        ],
        "correct": 2
      },
      {
        "question": "Псевдоэлемент ::before добавляет...",
        "answers": [
          "Содержимое перед элементом",
          "Стили к первому дочернему элементу",
          "Эффект при наведении",
          "Рамку перед элементом"
        ],
        "correct": 0
      },
      {
        "question": "Что означает 1fr в CSS Grid?",
        "answers": [
          "1 пиксель",
          "1% от родителя",
          "Одна доля свободного пространства",
          "Минимальная ширина"
        ],
        "correct": 2
      }
    ],
    "hard": [
      {
        "question": "Что делает grid-template-areas?",
        "answers": [
          "Задаёт размеры ячеек",
          "Задаёт именованные области для grid-area",
          "Объединяет ячейки",
          "Задаёт цвета областей"
        ],
        "correct": 1
      },
      {
        "question": "Порядок специфичности (от меньшего к большему)?",
        "answers": [
          "тег < класс < ID < inline",
          "inline < ID < класс < тег",
          "класс < ID < тег < inline",
          "тег < ID < класс < inline"
        ],
        "correct": 0
      },
      {
        "question": "Что делает will-change: transform?",
        "answers": [
          "Запрещает трансформации",
          "Подсказывает браузеру заранее подготовить слой для анимации",
          "Фиксирует transform",
          "Ничего, это несуществующее свойство"
        ],
        "correct": 1
      },
      {
        "question": "CSS Grid: что делает repeat(auto-fill, minmax(200px, 1fr))?",
        "answers": [
          "Создаёт фиксированное число колонок",
          "Создаёт максимально возможное число колонок шириной от 200px",
          "Создаёт одну колонку",
          "Ошибка синтаксиса"
        ],
        "correct": 1
      },
      {
        "question": "Что такое схлопывание margin (margin collapse)?",
        "answers": [
          "Margin принимает отрицательное значение",
          "Вертикальные margin соседних блоков не складываются, а берётся больший",
          "Margin обнуляется при flex",
          "CSS-ошибка в старых браузерах"
        ],
        "correct": 1
      },
      {
        "question": "Чем @keyframes отличается от transition?",
        "answers": [
          "@keyframes — только для цвета",
          "transition — плавный переход между двумя состояниями, @keyframes — полная анимация с контролем промежуточных кадров",
          "transition мощнее",
          "Они делают одно и то же"
        ],
        "correct": 1
      },
      {
        "question": "Что делает contain: layout?",
        "answers": [
          "Скрывает переполнение",
          "Изолирует элемент: его макет не влияет на остальной документ",
          "Включает Grid",
          "Задаёт блочный контейнер"
        ],
        "correct": 1
      },
      {
        "question": "Функция clamp(min, ideal, max) в CSS...",
        "answers": [
          "Обрезает строку текста",
          "Задаёт значение в диапазоне: не меньше min и не больше max",
          "Проверяет поддержку браузера",
          "Округляет число"
        ],
        "correct": 1
      },
      {
        "question": "Что такое BEM в CSS?",
        "answers": [
          "Язык препроцессора",
          "Методология именования классов: Блок, Элемент, Модификатор",
          "Анимационная библиотека",
          "Система сеток"
        ],
        "correct": 1
      },
      {
        "question": "Что делает isolation: isolate?",
        "answers": [
          "Отключает наследование",
          "Создаёт новый контекст наложения для z-index",
          "Скрывает элемент от скринридеров",
          "Изолирует от медиазапросов"
        ],
        "correct": 1
      },
      {
        "question": "Как CSS Grid разместить элемент на 2 и 3 колонках?",
        "answers": [
          "grid-column: 2;",
          "grid-column: 2-3;",
          "grid-column: 2 / 4;",
          "column-span: 2 3;"
        ],
        "correct": 2
      },
      {
        "question": "Псевдокласс :is() в CSS...",
        "answers": [
          "Проверяет тип элемента",
          "Группирует несколько селекторов с одинаковой специфичностью наибольшего аргумента",
          "Применяет стили если условие верно",
          "Заменяет :not()"
        ],
        "correct": 1
      },
      {
        "question": "Что такое logical properties (margin-inline, padding-block)?",
        "answers": [
          "Специфичность логических операторов",
          "Свойства относительно направления письма, а не физических сторон",
          "CSS-переменные",
          "Grid-свойства"
        ],
        "correct": 1
      },
      {
        "question": "Что делает aspect-ratio: 16/9?",
        "answers": [
          "Задаёт минимальную высоту",
          "Поддерживает пропорции элемента 16:9",
          "Задаёт разрешение изображения",
          "Ограничивает ширину"
        ],
        "correct": 1
      },
      {
        "question": "CSS-функция env() используется для...",
        "answers": [
          "Переменных окружения (например, safe-area-inset для iPhone X)",
          "Математических вычислений",
          "Получения CSS-переменных",
          "Медиазапросов"
        ],
        "correct": 0
      },
      {
        "question": "Что такое критический CSS?",
        "answers": [
          "CSS с ошибками",
          "Минимальный CSS для отображения видимой части страницы без задержки",
          "Стили с !important",
          "Браузерные стили по умолчанию"
        ],
        "correct": 1
      },
      {
        "question": "Что делает backdrop-filter: blur(10px)?",
        "answers": [
          "Размывает сам элемент",
          "Размывает фон позади элемента",
          "Создаёт тень",
          "Размывает текст"
        ],
        "correct": 1
      },
      {
        "question": "Псевдоэлемент ::selection применяется к...",
        "answers": [
          "Первому символу абзаца",
          "Выделенному пользователем тексту",
          "Ссылкам при наведении",
          "Первой строке абзаца"
        ],
        "correct": 1
      },
      {
        "question": "Что такое CSS Houdini?",
        "answers": [
          "CSS-препроцессор",
          "Набор низкоуровневых API для расширения CSS движка браузера",
          "Методология именования",
          "Система дизайн-токенов"
        ],
        "correct": 1
      },
      {
        "question": "Что делает writing-mode: vertical-rl?",
        "answers": [
          "Зеркалит текст",
          "Располагает текст вертикально, справа налево",
          "Поворачивает элемент",
          "Включает режим RTL"
        ],
        "correct": 1
      },
      {
        "question": "Свойство gap в Grid заменяет устаревшее...",
        "answers": [
          "margin",
          "padding",
          "grid-gap",
          "spacing"
        ],
        "correct": 2
      },
      {
        "question": "Что делает content-visibility: auto?",
        "answers": [
          "Скрывает контент",
          "Пропускает рендеринг невидимого контента для ускорения",
          "Управляет overflow",
          "Задаёт видимость для скринридеров"
        ],
        "correct": 1
      },
      {
        "question": "Функция min() в CSS выбирает...",
        "answers": [
          "Минимально допустимое значение",
          "Наименьшее из переданных значений",
          "Минимальный размер шрифта",
          "Минимальную ширину экрана"
        ],
        "correct": 1
      },
      {
        "question": "Что такое intrinsic sizing (min-content, max-content)?",
        "answers": [
          "Фиксированные px-значения",
          "Размеры, основанные на содержимом элемента",
          "Viewport-единицы",
          "Размеры Grid-ячеек"
        ],
        "correct": 1
      },
      {
        "question": "Что делает color-scheme: dark light?",
        "answers": [
          "Включает тёмную тему принудительно",
          "Подсказывает браузеру поддерживаемые цветовые схемы для правильного рендеринга форм",
          "Задаёт два цвета для градиента",
          "Ничего"
        ],
        "correct": 1
      },
      {
        "question": "Что такое cascade layers (@layer)?",
        "answers": [
          "Слои SVG",
          "Явное управление порядком каскада стилей без повышения специфичности",
          "z-index для стилей",
          "Модульная система CSS"
        ],
        "correct": 1
      },
      {
        "question": "Псевдокласс :focus-visible отличается от :focus тем, что...",
        "answers": [
          "Они идентичны",
          "Применяется только при навигации с клавиатуры, не при клике мышью",
          "Работает только на input",
          "Требует атрибута tabindex"
        ],
        "correct": 1
      },
      {
        "question": "Что делает scroll-snap-type?",
        "answers": [
          "Задаёт скорость прокрутки",
          "Заставляет прокрутку останавливаться на определённых позициях",
          "Блокирует прокрутку",
          "Анимирует прокрутку"
        ],
        "correct": 1
      },
      {
        "question": "Что такое container queries (@container)?",
        "answers": [
          "Медиазапросы для контейнеров",
          "Стили, зависящие от размеров родительского контейнера, а не viewport",
          "Запросы к Grid-контейнеру",
          "Переменные контейнера"
        ],
        "correct": 1
      },
      {
        "question": "Что делает subgrid в CSS Grid?",
        "answers": [
          "Создаёт вложенный независимый Grid",
          "Позволяет дочерним элементам использовать треки родительского Grid",
          "Дублирует Grid",
          "Сворачивает Grid"
        ],
        "correct": 1
      }
    ]
  },
  "3": {
    "easy": [
      {
        "question": "Какое ключевое слово объявляет константу в JS?",
        "answers": [
          "var",
          "let",
          "const",
          "def"
        ],
        "correct": 2
      },
      {
        "question": "Как вывести сообщение в консоль браузера?",
        "answers": [
          "print('Hi')",
          "echo('Hi')",
          "alert('Hi')",
          "console.log('Hi')"
        ],
        "correct": 3
      },
      {
        "question": "Какой тип данных хранит текст?",
        "answers": [
          "number",
          "boolean",
          "string",
          "char"
        ],
        "correct": 2
      },
      {
        "question": "Как создать массив в JS?",
        "answers": [
          "let a = (1,2,3)",
          "let a = {1,2,3}",
          "let a = [1,2,3]",
          "let a = <1,2,3>"
        ],
        "correct": 2
      },
      {
        "question": "Что выведет: console.log(2 + '3')?",
        "answers": [
          "5",
          "23",
          "Error",
          "undefined"
        ],
        "correct": 1
      },
      {
        "question": "Как добавить элемент в конец массива?",
        "answers": [
          "arr.add(item)",
          "arr.push(item)",
          "arr.append(item)",
          "arr.insert(item)"
        ],
        "correct": 1
      },
      {
        "question": "Как получить длину массива arr?",
        "answers": [
          "arr.size",
          "arr.count",
          "arr.length",
          "len(arr)"
        ],
        "correct": 2
      },
      {
        "question": "Что такое undefined в JS?",
        "answers": [
          "Ошибка выполнения",
          "Переменная объявлена, но не имеет значения",
          "Намеренное отсутствие значения",
          "Пустая строка"
        ],
        "correct": 1
      },
      {
        "question": "Как написать однострочный комментарий в JS?",
        "answers": [
          "# комментарий",
          "<!-- комментарий -->",
          "// комментарий",
          "/* комментарий"
        ],
        "correct": 2
      },
      {
        "question": "Что возвращает typeof 42?",
        "answers": [
          "'integer'",
          "'number'",
          "'float'",
          "'int'"
        ],
        "correct": 1
      }
    ],
    "medium": [
      {
        "question": "Какой оператор сравнивает значение И тип без приведения?",
        "answers": [
          "==",
          "=",
          "===",
          "!="
        ],
        "correct": 2
      },
      {
        "question": "Что вернёт typeof null?",
        "answers": [
          "'null'",
          "'undefined'",
          "'object'",
          "'boolean'"
        ],
        "correct": 2
      },
      {
        "question": "Что такое замыкание (closure)?",
        "answers": [
          "Синтаксис стрелочных функций",
          "Функция, имеющая доступ к переменным внешней области видимости",
          "Метод закрытия окна",
          "Тип данных"
        ],
        "correct": 1
      },
      {
        "question": "Что вернёт [1,2,3].reduce((acc,n) => acc+n, 0)?",
        "answers": [
          "[1,2,3]",
          "0",
          "6",
          "123"
        ],
        "correct": 2
      },
      {
        "question": "Чем let отличается от var?",
        "answers": [
          "let устарел",
          "var — блочная область видимости",
          "let — блочная область видимости, var — функциональная/глобальная",
          "Разницы нет"
        ],
        "correct": 2
      },
      {
        "question": "Что такое Promise?",
        "answers": [
          "Тип данных для чисел",
          "Объект, представляющий результат асинхронной операции",
          "Синтаксис стрелочной функции",
          "Метод работы с DOM"
        ],
        "correct": 1
      },
      {
        "question": "Что делает оператор ?? (nullish coalescing)?",
        "answers": [
          "Логическое ИЛИ",
          "Проверка на undefined",
          "Возвращает правый операнд если левый null/undefined",
          "Тернарный оператор"
        ],
        "correct": 2
      },
      {
        "question": "Метод массива filter...",
        "answers": [
          "Преобразует элементы",
          "Возвращает новый массив с элементами, прошедшими проверку",
          "Сворачивает массив в одно значение",
          "Находит первый элемент"
        ],
        "correct": 1
      },
      {
        "question": "Что делает деструктуризация: const {name, age} = user?",
        "answers": [
          "Создаёт копию объекта",
          "Извлекает свойства объекта в переменные",
          "Удаляет свойства из объекта",
          "Проверяет наличие свойств"
        ],
        "correct": 1
      },
      {
        "question": "Для чего нужен async/await?",
        "answers": [
          "Для синхронных вычислений",
          "Для удобной работы с промисами без then/catch цепочек",
          "Для создания потоков",
          "Для работы с массивами"
        ],
        "correct": 1
      },
      {
        "question": "Что делает оператор spread (...) при работе с массивами?",
        "answers": [
          "Создаёт итератор",
          "Разворачивает массив в список элементов",
          "Делает массив неизменяемым",
          "Сортирует массив"
        ],
        "correct": 1
      },
      {
        "question": "Что такое Event Loop?",
        "answers": [
          "Бесконечный цикл for",
          "Механизм выполнения асинхронного кода в однопоточном JS",
          "Обработчик DOM-событий",
          "Метод Promise"
        ],
        "correct": 1
      },
      {
        "question": "Что вернёт: [1,2,3].map(x => x*2)?",
        "answers": [
          "6",
          "[1,2,3]",
          "[2,4,6]",
          "undefined"
        ],
        "correct": 2
      },
      {
        "question": "Метод addEventListener принимает...",
        "answers": [
          "Только имя события",
          "Имя события и функцию-обработчик",
          "Имя события, функцию и элемент",
          "Только функцию"
        ],
        "correct": 1
      },
      {
        "question": "Что делает e.preventDefault()?",
        "answers": [
          "Останавливает всплытие события",
          "Отменяет действие браузера по умолчанию",
          "Удаляет обработчик",
          "Создаёт новое событие"
        ],
        "correct": 1
      },
      {
        "question": "Как безопасно обратиться к свойству, которое может быть undefined? (obj?.prop)",
        "answers": [
          "Это синтаксическая ошибка",
          "Optional chaining — вернёт undefined вместо ошибки",
          "Тоже что и obj.prop",
          "Работает только с массивами"
        ],
        "correct": 1
      },
      {
        "question": "Что делает Object.keys(obj)?",
        "answers": [
          "Возвращает массив значений",
          "Возвращает массив ключей объекта",
          "Проверяет наличие ключа",
          "Удаляет ключи"
        ],
        "correct": 1
      },
      {
        "question": "Шаблонная строка в JS — это...",
        "answers": [
          "Строка в одинарных кавычках",
          "Строка в двойных кавычках",
          "Строка в обратных кавычках с поддержкой ${} и переносов",
          "Регулярное выражение"
        ],
        "correct": 2
      },
      {
        "question": "Что делает localStorage.setItem('key', value)?",
        "answers": [
          "Читает данные",
          "Сохраняет данные в браузере постоянно",
          "Удаляет данные",
          "Шифрует данные"
        ],
        "correct": 1
      },
      {
        "question": "Метод querySelectorAll возвращает...",
        "answers": [
          "Один элемент",
          "NodeList всех совпадающих элементов",
          "Массив элементов",
          "HTMLCollection"
        ],
        "correct": 1
      }
    ],
    "hard": [
      {
        "question": "Что такое hoisting в JavaScript?",
        "answers": [
          "Оптимизация кода",
          "Поднятие объявлений var и function в начало области видимости",
          "Уборка мусора",
          "Асинхронное выполнение"
        ],
        "correct": 1
      },
      {
        "question": "Чем Map отличается от обычного объекта {}?",
        "answers": [
          "Map работает медленнее",
          "Map принимает любые типы ключей, сохраняет порядок, лучше для частых добавлений/удалений",
          "Object поддерживает больше методов",
          "Разницы нет"
        ],
        "correct": 1
      },
      {
        "question": "Что такое WeakMap и WeakRef?",
        "answers": [
          "Устаревшие версии Map",
          "Коллекции со слабыми ссылками — не мешают сборщику мусора удалять объекты",
          "Синонимы Map",
          "Ошибочные конструкции"
        ],
        "correct": 1
      },
      {
        "question": "Что делает Symbol.iterator?",
        "answers": [
          "Создаёт уникальный ID",
          "Определяет как объект итерируется в for...of",
          "Проверяет тип данных",
          "Шифрует объект"
        ],
        "correct": 1
      },
      {
        "question": "Что такое генераторная функция (function*)?",
        "answers": [
          "Функция, генерирующая случайные числа",
          "Функция с yield, возвращающая итератор для поэтапного выполнения",
          "Более быстрая стрелочная функция",
          "Конструктор объектов"
        ],
        "correct": 1
      },
      {
        "question": "Чем Promise.allSettled отличается от Promise.all?",
        "answers": [
          "allSettled быстрее",
          "allSettled всегда дожидается всех промисов, even если некоторые отклонены; all — отклоняется при первой ошибке",
          "all поддерживает вложенные промисы",
          "Разницы нет"
        ],
        "correct": 1
      },
      {
        "question": "Что такое Proxy в JavaScript?",
        "answers": [
          "Сетевой прокси для запросов",
          "Объект-ловушка для перехвата операций с другим объектом",
          "Копия объекта",
          "Заморозка объекта"
        ],
        "correct": 1
      },
      {
        "question": "Что такое Reflect API?",
        "answers": [
          "Встроенный CSS-движок",
          "Объект с методами для перехвата JS-операций, дополняет Proxy",
          "Система отражений для отладки",
          "Web API для работы с DOM"
        ],
        "correct": 1
      },
      {
        "question": "Что такое Temporal Dead Zone (TDZ)?",
        "answers": [
          "Зона памяти для удалённых переменных",
          "Период от входа в область видимости до объявления let/const, когда доступ к переменной бросает ошибку",
          "Неиспользуемый код",
          "Область видимости var"
        ],
        "correct": 1
      },
      {
        "question": "Что делает Object.freeze(obj)?",
        "answers": [
          "Копирует объект",
          "Запрещает любые изменения объекта (неглубокая заморозка)",
          "Сериализует объект",
          "Создаёт прокси"
        ],
        "correct": 1
      },
      {
        "question": "Что такое microtask queue?",
        "answers": [
          "Очередь для setTimeout",
          "Очередь с более высоким приоритетом чем macrotask (Promise callbacks, queueMicrotask)",
          "Очередь DOM-событий",
          "Очередь сборщика мусора"
        ],
        "correct": 1
      },
      {
        "question": "Что возвращает async функция если не указан return?",
        "answers": [
          "null",
          "undefined",
          "Promise.resolve(undefined)",
          "Ошибку"
        ],
        "correct": 2
      },
      {
        "question": "Чем class в JS отличается от function-конструктора?",
        "answers": [
          "Классы быстрее",
          "Синтаксический сахар над прототипным наследованием + обязательный new + нет hoisting",
          "Классы поддерживают наследование, конструкторы — нет",
          "Разницы нет"
        ],
        "correct": 1
      },
      {
        "question": "Что такое прототипная цепочка (prototype chain)?",
        "answers": [
          "Цепочка промисов",
          "Механизм наследования: объект ищет свойство в себе, затем в [[Prototype]] и выше",
          "Список методов класса",
          "Цепочка ошибок"
        ],
        "correct": 1
      },
      {
        "question": "Что делает Object.create(proto)?",
        "answers": [
          "Копирует объект",
          "Создаёт объект с заданным [[Prototype]]",
          "Замораживает объект",
          "Сравнивает объекты"
        ],
        "correct": 1
      },
      {
        "question": "Что такое сборщик мусора (GC) в JS?",
        "answers": [
          "Инструмент удаления кода",
          "Автоматическое освобождение памяти от объектов, на которые нет ссылок",
          "Оптимизатор кода",
          "Профилировщик"
        ],
        "correct": 1
      },
      {
        "question": "Что делает AbortController?",
        "answers": [
          "Останавливает Event Loop",
          "Позволяет отменить fetch-запрос или асинхронную операцию",
          "Очищает таймеры",
          "Удаляет DOM-элементы"
        ],
        "correct": 1
      },
      {
        "question": "Что такое структурированное клонирование (structuredClone)?",
        "answers": [
          "Поверхностное копирование через spread",
          "Глубокое копирование объекта (включая вложенные структуры, не копирует функции)",
          "Сериализация в JSON",
          "Прокси-копия"
        ],
        "correct": 1
      },
      {
        "question": "Что такое Web Workers?",
        "answers": [
          "Потоки в Node.js",
          "Фоновые скрипты в браузере, работающие параллельно без блокировки UI",
          "Воркеры Service Worker",
          "Сетевые запросы"
        ],
        "correct": 1
      },
      {
        "question": "Что делает метод Array.from()?",
        "answers": [
          "Проверяет является ли объект массивом",
          "Создаёт массив из итерируемого объекта или псевдомассива",
          "Объединяет массивы",
          "Сортирует массив"
        ],
        "correct": 1
      },
      {
        "question": "Что такое Intersection Observer API?",
        "answers": [
          "Наблюдение за изменениями DOM",
          "Асинхронное наблюдение за пересечением элемента с viewport (для lazy load, бесконечного скролла)",
          "Слежение за событиями мыши",
          "Мониторинг производительности"
        ],
        "correct": 1
      },
      {
        "question": "Что делает оператор void?",
        "answers": [
          "Возвращает undefined",
          "Оценивает выражение и всегда возвращает undefined",
          "Удаляет переменную",
          "Проверяет пустоту"
        ],
        "correct": 1
      },
      {
        "question": "Чем Set отличается от массива?",
        "answers": [
          "Set быстрее",
          "Set хранит только уникальные значения и имеет O(1) поиск",
          "Set поддерживает map/filter",
          "Разницы нет"
        ],
        "correct": 1
      },
      {
        "question": "Что такое currying (каррирование)?",
        "answers": [
          "Именование переменных",
          "Преобразование функции f(a,b,c) в f(a)(b)(c)",
          "Рекурсия",
          "Мемоизация"
        ],
        "correct": 1
      },
      {
        "question": "Что делает тег Function.prototype.bind()?",
        "answers": [
          "Вызывает функцию",
          "Создаёт новую функцию с привязанным this и аргументами",
          "Клонирует функцию",
          "Добавляет метод к прототипу"
        ],
        "correct": 1
      },
      {
        "question": "Что такое мемоизация?",
        "answers": [
          "Сохранение в localStorage",
          "Кэширование результатов вызова функции для одинаковых аргументов",
          "Оптимизация цикла",
          "Хранение DOM-элементов"
        ],
        "correct": 1
      },
      {
        "question": "Что такое tree shaking в JS?",
        "answers": [
          "Обфускация кода",
          "Удаление неиспользуемого кода при сборке (bundling)",
          "Сортировка модулей",
          "Оптимизация изображений"
        ],
        "correct": 1
      },
      {
        "question": "Что делает метод queueMicrotask()?",
        "answers": [
          "Добавляет задачу в очередь macrotask",
          "Ставит функцию в очередь microtask (выполнится до следующей macrotask)",
          "Планирует задачу через setTimeout 0",
          "Добавляет в очередь событий"
        ],
        "correct": 1
      },
      {
        "question": "Что такое tagged template literals?",
        "answers": [
          "Шаблонная строка с переводами строк",
          "Функция перед шаблонной строкой для обработки частей строки",
          "Мультистрочные строки",
          "Строки с RegExp"
        ],
        "correct": 1
      },
      {
        "question": "Что такое Module Federation?",
        "answers": [
          "Система импорта ES-модулей",
          "Технология загрузки частей приложения из разных сборок (микрофронтенды)",
          "Федеральный стандарт модулей",
          "Синхронный import()"
        ],
        "correct": 1
      }
    ]
  },
  "4": {
    "easy": [
      {
        "question": "Как вывести текст на экран в Python?",
        "answers": [
          "echo('text')",
          "console.log('text')",
          "print('text')",
          "write('text')"
        ],
        "correct": 2
      },
      {
        "question": "Какой тип данных у значения True?",
        "answers": [
          "string",
          "int",
          "bool",
          "none"
        ],
        "correct": 2
      },
      {
        "question": "Как создать список в Python?",
        "answers": [
          "a = (1,2,3)",
          "a = {1,2,3}",
          "a = [1,2,3]",
          "a = <1,2,3>"
        ],
        "correct": 2
      },
      {
        "question": "Какой символ начинает комментарий в Python?",
        "answers": [
          "//",
          "/*",
          "#",
          "--"
        ],
        "correct": 2
      },
      {
        "question": "Как добавить элемент в конец списка?",
        "answers": [
          "list.add(x)",
          "list.push(x)",
          "list.append(x)",
          "list.insert(x)"
        ],
        "correct": 2
      },
      {
        "question": "Что означает len([1, 2, 3])?",
        "answers": [
          "Последний элемент",
          "Длина списка: 3",
          "Сумма элементов",
          "Тип списка"
        ],
        "correct": 1
      }
    ],
    "medium": [
      {
        "question": "Что вернёт range(5)?",
        "answers": [
          "[1, 2, 3, 4, 5]",
          "Числа от 0 до 4",
          "Числа от 1 до 5",
          "[0, 1, 2, 3, 4, 5]"
        ],
        "correct": 1
      },
      {
        "question": "Как получить значение из словаря без ошибки, если ключ отсутствует?",
        "answers": [
          "d[key]",
          "d.find(key)",
          "d.get(key)",
          "d.fetch(key)"
        ],
        "correct": 2
      },
      {
        "question": "Что такое list comprehension [x*2 for x in range(3)]?",
        "answers": [
          "[0, 1, 2]",
          "[2, 4, 6]",
          "[0, 2, 4]",
          "[1, 2, 3]"
        ],
        "correct": 2
      },
      {
        "question": "Что делает декоратор @property?",
        "answers": [
          "Делает атрибут приватным",
          "Позволяет вызывать метод как атрибут (без скобок)",
          "Добавляет аргументы по умолчанию",
          "Создаёт статический метод"
        ],
        "correct": 1
      },
      {
        "question": "Чем tuple отличается от list?",
        "answers": [
          "Tuple быстрее, но менее функционален",
          "Tuple неизменяем после создания",
          "Tuple может хранить только числа",
          "Никакой разницы нет"
        ],
        "correct": 1
      }
    ],
    "hard": [
      {
        "question": "Что такое генератор (generator) в Python?",
        "answers": [
          "Функция, создающая случайные числа",
          "Функция с yield, возвращающая итератор",
          "Синтаксис list comprehension",
          "Декоратор для классов"
        ],
        "correct": 1
      },
      {
        "question": "В чём разница между *args и **kwargs?",
        "answers": [
          "*args — для списков, **kwargs — для словарей",
          "*args принимает позиционные аргументы, **kwargs — именованные",
          "**kwargs устарел, используй *args",
          "Они взаимозаменяемы"
        ],
        "correct": 1
      },
      {
        "question": "Что такое GIL в Python?",
        "answers": [
          "Глобальный список импортов",
          "Global Interpreter Lock — мьютекс, ограничивающий выполнение потоков",
          "Модуль для работы с GPU",
          "Система управления пакетами"
        ],
        "correct": 1
      },
      {
        "question": "Что вернёт: {**{'a': 1}, **{'b': 2, 'a': 3}}?",
        "answers": [
          "{'a': 1, 'b': 2}",
          "{'a': 3, 'b': 2}",
          "{'a': 1, 'b': 2, 'a': 3}",
          "Ошибка дублирования ключей"
        ],
        "correct": 1
      }
    ]
  },
  "5": {
    "easy": [
      {
        "question": "Какая команда инициализирует новый Git-репозиторий?",
        "answers": [
          "git start",
          "git new",
          "git init",
          "git create"
        ],
        "correct": 2
      },
      {
        "question": "Как посмотреть статус файлов в репозитории?",
        "answers": [
          "git check",
          "git info",
          "git status",
          "git list"
        ],
        "correct": 2
      },
      {
        "question": "Как добавить все изменённые файлы в индекс?",
        "answers": [
          "git stage .",
          "git add all",
          "git add .",
          "git commit all"
        ],
        "correct": 2
      },
      {
        "question": "Какая команда создаёт коммит с сообщением?",
        "answers": [
          "git save -m 'message'",
          "git commit -m 'message'",
          "git push -m 'message'",
          "git add -m 'message'"
        ],
        "correct": 1
      },
      {
        "question": "Как клонировать удалённый репозиторий?",
        "answers": [
          "git download <url>",
          "git copy <url>",
          "git pull <url>",
          "git clone <url>"
        ],
        "correct": 3
      }
    ],
    "medium": [
      {
        "question": "Какая команда создаёт новую ветку и сразу переключается на неё?",
        "answers": [
          "git branch new-branch",
          "git checkout -b new-branch",
          "git switch new-branch",
          "git create new-branch"
        ],
        "correct": 1
      },
      {
        "question": "Как отправить ветку main на удалённый репозиторий?",
        "answers": [
          "git upload origin main",
          "git push origin main",
          "git send origin main",
          "git sync origin main"
        ],
        "correct": 1
      },
      {
        "question": "Что делает команда git pull?",
        "answers": [
          "Только скачивает изменения",
          "Скачивает и сливает изменения из remote",
          "Отправляет изменения на сервер",
          "Создаёт новую ветку"
        ],
        "correct": 1
      },
      {
        "question": "Как отменить изменения в файле до последнего коммита?",
        "answers": [
          "git undo file.txt",
          "git reset file.txt",
          "git restore file.txt",
          "git revert file.txt"
        ],
        "correct": 2
      },
      {
        "question": "Для чего используется .gitignore?",
        "answers": [
          "Для хранения паролей",
          "Для указания файлов, которые Git не должен отслеживать",
          "Для блокировки коммитов",
          "Для настройки имени пользователя"
        ],
        "correct": 1
      }
    ],
    "hard": [
      {
        "question": "В чём разница между git merge и git rebase?",
        "answers": [
          "Нет разницы, оба объединяют ветки",
          "merge создаёт коммит слияния, rebase переносит коммиты в линейную историю",
          "rebase безопаснее для публичных веток",
          "merge устарел, используй rebase"
        ],
        "correct": 1
      },
      {
        "question": "Что делает git stash?",
        "answers": [
          "Удаляет незафиксированные изменения",
          "Временно сохраняет незавершённые изменения",
          "Создаёт резервную копию ветки",
          "Переименовывает ветку"
        ],
        "correct": 1
      },
      {
        "question": "Какой тип слияния создаёт дополнительный merge-коммит?",
        "answers": [
          "Fast-forward",
          "Squash",
          "Rebase",
          "Recursive (трёхточечный merge)"
        ],
        "correct": 3
      }
    ]
  },
  "6": {
    "easy": [
      {
        "question": "Какая команда выбирает все данные из таблицы users?",
        "answers": [
          "GET * FROM users",
          "FETCH ALL users",
          "SELECT * FROM users",
          "READ users"
        ],
        "correct": 2
      },
      {
        "question": "Какой оператор фильтрует строки в запросе SELECT?",
        "answers": [
          "FILTER",
          "HAVING",
          "WHERE",
          "LIMIT"
        ],
        "correct": 2
      },
      {
        "question": "Как отсортировать результат по убыванию?",
        "answers": [
          "ORDER BY name ASC",
          "SORT BY name DESC",
          "ORDER BY name DESC",
          "SORT BY name REVERSE"
        ],
        "correct": 2
      },
      {
        "question": "Какая команда добавляет новую строку в таблицу?",
        "answers": [
          "ADD INTO",
          "INSERT INTO",
          "PUT INTO",
          "APPEND INTO"
        ],
        "correct": 1
      },
      {
        "question": "Какая команда обновляет данные в таблице?",
        "answers": [
          "CHANGE",
          "MODIFY",
          "UPDATE",
          "ALTER"
        ],
        "correct": 2
      }
    ],
    "medium": [
      {
        "question": "Что делает COUNT(*) в запросе SELECT?",
        "answers": [
          "Считает сумму значений",
          "Подсчитывает количество строк",
          "Возвращает максимальное значение",
          "Считает уникальные значения"
        ],
        "correct": 1
      },
      {
        "question": "Какой JOIN возвращает все строки из левой таблицы плюс совпадения?",
        "answers": [
          "INNER JOIN",
          "RIGHT JOIN",
          "LEFT JOIN",
          "FULL JOIN"
        ],
        "correct": 2
      },
      {
        "question": "Чем HAVING отличается от WHERE?",
        "answers": [
          "HAVING — для одиночных строк, WHERE — для групп",
          "HAVING фильтрует после GROUP BY, WHERE — до группировки",
          "Они взаимозаменяемы",
          "HAVING работает только с числами"
        ],
        "correct": 1
      },
      {
        "question": "Что делает DISTINCT в SELECT?",
        "answers": [
          "Сортирует результаты",
          "Возвращает только уникальные значения",
          "Ограничивает количество строк",
          "Удаляет NULL-значения"
        ],
        "correct": 1
      },
      {
        "question": "Как объединить таблицы users и orders по полю user_id?",
        "answers": [
          "FROM users, orders WHERE users.id = orders.user_id",
          "JOIN users WITH orders ON id = user_id",
          "SELECT * FROM users INNER JOIN orders ON users.id = orders.user_id",
          "MERGE users WITH orders"
        ],
        "correct": 2
      }
    ],
    "hard": [
      {
        "question": "Что такое транзакция в SQL?",
        "answers": [
          "Один SQL-запрос",
          "Группа операций, выполняемых как единое целое (атомарно)",
          "Связь между таблицами",
          "Резервная копия базы данных"
        ],
        "correct": 1
      },
      {
        "question": "Для чего нужны индексы в базе данных?",
        "answers": [
          "Для хранения резервных копий",
          "Для ускорения поиска и сортировки данных",
          "Для связи таблиц",
          "Для ограничения доступа к данным"
        ],
        "correct": 1
      },
      {
        "question": "Что такое подзапрос (subquery)?",
        "answers": [
          "Сохранённая хранимая процедура",
          "Запрос внутри другого SQL-запроса",
          "Представление (VIEW)",
          "Триггер"
        ],
        "correct": 1
      },
      {
        "question": "Что означает ON DELETE CASCADE при внешнем ключе?",
        "answers": [
          "Запрещает удаление связанных записей",
          "При удалении родительской записи автоматически удаляются дочерние",
          "Обнуляет внешний ключ при удалении",
          "Переносит запись в архив"
        ],
        "correct": 1
      }
    ]
  }
};

// ─── Достижения ──────────────────────────────────────────────────────────────
CONTENT.achievements = [
  {
    "id": "first_start",
    "name": "🚀 Первый старт",
    "desc": "Начать обучение в боте",
    "category": "🌱 Начало пути",
    "check": "always",
    "value": null,
    "xp": 50,
    "coins": 25
  },
  {
    "id": "level_5",
    "name": "🌱 Первые шаги",
    "desc": "Достичь 5 уровня",
    "category": "⭐ Уровни",
    "check": "level",
    "value": 5,
    "xp": 100,
    "coins": 50
  },
  {
    "id": "level_10",
    "name": "📚 Студент",
    "desc": "Достичь 10 уровня",
    "category": "⭐ Уровни",
    "check": "level",
    "value": 10,
    "xp": 200,
    "coins": 100
  },
  {
    "id": "level_20",
    "name": "💻 Кодер",
    "desc": "Достичь 20 уровня",
    "category": "⭐ Уровни",
    "check": "level",
    "value": 20,
    "xp": 400,
    "coins": 200
  },
  {
    "id": "level_30",
    "name": "⚡ Разработчик",
    "desc": "Достичь 30 уровня",
    "category": "⭐ Уровни",
    "check": "level",
    "value": 30,
    "xp": 600,
    "coins": 300
  },
  {
    "id": "level_50",
    "name": "🎯 Специалист",
    "desc": "Достичь 50 уровня",
    "category": "⭐ Уровни",
    "check": "level",
    "value": 50,
    "xp": 1000,
    "coins": 500
  },
  {
    "id": "level_75",
    "name": "👑 Мастер",
    "desc": "Достичь 75 уровня",
    "category": "⭐ Уровни",
    "check": "level",
    "value": 75,
    "xp": 2000,
    "coins": 1000
  },
  {
    "id": "level_100",
    "name": "🌟 Легенда",
    "desc": "Достичь максимального 100 уровня",
    "category": "⭐ Уровни",
    "check": "level",
    "value": 100,
    "xp": 5000,
    "coins": 2500
  },
  {
    "id": "test_1",
    "name": "📝 Первый зачёт",
    "desc": "Пройти 1 тест",
    "category": "📝 Тесты",
    "check": "tests_passed",
    "value": 1,
    "xp": 100,
    "coins": 50
  },
  {
    "id": "tests_5",
    "name": "📖 Прилежный",
    "desc": "Пройти 5 тестов",
    "category": "📝 Тесты",
    "check": "tests_passed",
    "value": 5,
    "xp": 200,
    "coins": 100
  },
  {
    "id": "tests_10",
    "name": "🎓 Усердный студент",
    "desc": "Пройти 10 тестов",
    "category": "📝 Тесты",
    "check": "tests_passed",
    "value": 10,
    "xp": 400,
    "coins": 200
  },
  {
    "id": "tests_25",
    "name": "🧠 Знаток",
    "desc": "Пройти 25 тестов",
    "category": "📝 Тесты",
    "check": "tests_passed",
    "value": 25,
    "xp": 800,
    "coins": 400
  },
  {
    "id": "tests_50",
    "name": "🏅 Ветеран тестов",
    "desc": "Пройти 50 тестов",
    "category": "📝 Тесты",
    "check": "tests_passed",
    "value": 50,
    "xp": 1500,
    "coins": 750
  },
  {
    "id": "tests_100",
    "name": "🏆 Чемпион знаний",
    "desc": "Пройти 100 тестов",
    "category": "📝 Тесты",
    "check": "tests_passed",
    "value": 100,
    "xp": 3000,
    "coins": 1500
  },
  {
    "id": "perfect_1",
    "name": "💯 Перфекционист",
    "desc": "Сдать 1 тест на 100%",
    "category": "💯 Перфекция",
    "check": "perfect_tests",
    "value": 1,
    "xp": 200,
    "coins": 100
  },
  {
    "id": "perfect_5",
    "name": "✨ Отличник",
    "desc": "Сдать 5 тестов на 100%",
    "category": "💯 Перфекция",
    "check": "perfect_tests",
    "value": 5,
    "xp": 500,
    "coins": 250
  },
  {
    "id": "perfect_10",
    "name": "🌠 Блестящий ум",
    "desc": "Сдать 10 тестов на 100%",
    "category": "💯 Перфекция",
    "check": "perfect_tests",
    "value": 10,
    "xp": 1000,
    "coins": 500
  },
  {
    "id": "perfect_25",
    "name": "🎖 Гений",
    "desc": "Сдать 25 тестов на 100%",
    "category": "💯 Перфекция",
    "check": "perfect_tests",
    "value": 25,
    "xp": 2500,
    "coins": 1250
  },
  {
    "id": "streak_3",
    "name": "🔥 Регулярность",
    "desc": "Учиться 3 дня подряд",
    "category": "🔥 Стрики",
    "check": "streak",
    "value": 3,
    "xp": 150,
    "coins": 75
  },
  {
    "id": "streak_7",
    "name": "⚡ Неделя подряд",
    "desc": "Учиться 7 дней подряд",
    "category": "🔥 Стрики",
    "check": "streak",
    "value": 7,
    "xp": 350,
    "coins": 175
  },
  {
    "id": "streak_14",
    "name": "💪 Две недели",
    "desc": "Учиться 14 дней подряд",
    "category": "🔥 Стрики",
    "check": "streak",
    "value": 14,
    "xp": 700,
    "coins": 350
  },
  {
    "id": "streak_30",
    "name": "🗓 Месяц без пропусков",
    "desc": "Учиться 30 дней подряд",
    "category": "🔥 Стрики",
    "check": "streak",
    "value": 30,
    "xp": 1500,
    "coins": 750
  },
  {
    "id": "streak_100",
    "name": "🦅 Железная воля",
    "desc": "Учиться 100 дней подряд",
    "category": "🔥 Стрики",
    "check": "streak",
    "value": 100,
    "xp": 5000,
    "coins": 2500
  },
  {
    "id": "coins_500",
    "name": "💰 Копилка",
    "desc": "Накопить 500 монет",
    "category": "💰 Богатство",
    "check": "coins",
    "value": 500,
    "xp": 100,
    "coins": 0
  },
  {
    "id": "coins_1000",
    "name": "💎 Меценат",
    "desc": "Накопить 1000 монет",
    "category": "💰 Богатство",
    "check": "coins",
    "value": 1000,
    "xp": 200,
    "coins": 0
  },
  {
    "id": "coins_5000",
    "name": "🏦 Банкир",
    "desc": "Накопить 5000 монет",
    "category": "💰 Богатство",
    "check": "coins",
    "value": 5000,
    "xp": 500,
    "coins": 0
  },
  {
    "id": "speed_demon",
    "name": "⚡ Молния",
    "desc": "Пройти 3 теста за один день",
    "category": "🌟 Особые",
    "check": "manual",
    "value": null,
    "xp": 500,
    "coins": 250
  },
  {
    "id": "night_owl",
    "name": "🦉 Ночная сова",
    "desc": "Учиться после полуночи",
    "category": "🌟 Особые",
    "check": "hour_after",
    "value": 0,
    "xp": 200,
    "coins": 100
  },
  {
    "id": "early_bird",
    "name": "🐦 Ранняя пташка",
    "desc": "Учиться до 7 утра",
    "category": "🌟 Особые",
    "check": "hour_before",
    "value": 7,
    "xp": 200,
    "coins": 100
  },
  {
    "id": "comeback",
    "name": "🔄 Возвращение",
    "desc": "Вернуться после 7+ дней перерыва",
    "category": "🌟 Особые",
    "check": "manual",
    "value": null,
    "xp": 300,
    "coins": 150
  },
  {
    "id": "pvp_first_duel",
    "name": "⚔️ Первая дуэль",
    "desc": "Принять участие в первой PvP дуэли",
    "category": "⚔️ PvP Дуэли",
    "check": "pvp_duels",
    "value": 1,
    "xp": 150,
    "coins": 75
  },
  {
    "id": "pvp_first_win",
    "name": "🏆 Первая победа",
    "desc": "Победить в PvP дуэли",
    "category": "⚔️ PvP Дуэли",
    "check": "pvp_wins",
    "value": 1,
    "xp": 300,
    "coins": 150
  },
  {
    "id": "pvp_wins_5",
    "name": "⚡ Боец",
    "desc": "Победить в 5 PvP дуэлях",
    "category": "⚔️ PvP Дуэли",
    "check": "pvp_wins",
    "value": 5,
    "xp": 600,
    "coins": 300
  },
  {
    "id": "pvp_wins_20",
    "name": "🥊 Чемпион арены",
    "desc": "Победить в 20 PvP дуэлях",
    "category": "⚔️ PvP Дуэли",
    "check": "pvp_wins",
    "value": 20,
    "xp": 1500,
    "coins": 750
  },
  {
    "id": "pvp_perfect_duel",
    "name": "💯 Идеальная дуэль",
    "desc": "Ответить на все вопросы правильно в PvP",
    "category": "⚔️ PvP Дуэли",
    "check": "manual",
    "value": null,
    "xp": 500,
    "coins": 250
  }
];

// ════════════════════════════════════════════════════════════════════════════
// КОНЕЦ ФАЙЛА CONTENT.JS
// ════════════════════════════════════════════════════════════════════════════