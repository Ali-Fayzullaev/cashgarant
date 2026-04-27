# Cash Garant — лендинг

Современный двуязычный (RU / KZ) лендинг кредитного брокера **Cash Garant** (Темиртау).

## Стек
- **Vite + React 18 + TypeScript**
- **Tailwind CSS v4** (через `@tailwindcss/vite`) с дизайн-токенами под фирменные цвета
- **Framer Motion** — плавные анимации
- **lucide-react** — иконки (без эмодзи)
- Шрифты — **Manrope** (текст) + **Unbounded** (заголовки)

## Команды
```powershell
npm install
npm run dev      # dev-сервер на http://localhost:5173
npm run build    # production-сборка в /dist
npm run preview  # локальный предпросмотр сборки
```

## Контент
- Менеджеры WhatsApp и сообщение задаются в `src/data.ts` и `src/i18n.tsx`.
- Тексты RU/KZ — в `src/i18n.tsx` (объекты `ru` и `kk`).
- Фирменные цвета — в `src/index.css` (`@theme`): `--color-brand-600: #115E32`, `--color-gold-500: #F9B800`.
- Логотип — `public/logo.png`.
