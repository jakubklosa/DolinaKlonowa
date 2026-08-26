# Dolina Klonowa – Frontend (React)

Odtworzony od zera frontend (React 18 + TypeScript + Vite + React Router) odzwierciedlający
strukturę i treści strony dolinaklonowa.com: Strona główna, O nas, Usługi, Blog, Kontakt.

To nowy, niezależny kod (nie eksport silnika WordPress/page-buildera oryginalnej strony).

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Aplikacja wystartuje pod `http://localhost:5173`.

## Build produkcyjny

```bash
npm run build
npm run preview
```

## Struktura

```
src/
├── main.tsx            ← punkt wejścia, routing
├── App.tsx             ← layout + trasy
├── index.css           ← design system (kolory, typografia, komponenty)
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CtaSection.tsx
│   └── ProcessSteps.tsx
└── pages/
    ├── Home.tsx
    ├── About.tsx        (O nas)
    ├── Services.tsx     (Usługi)
    ├── Blog.tsx
    └── Contact.tsx      (Kontakt)
```

## Do zrobienia

- Podmienić placeholdery obrazów (`.history-image`, `.service-image`) na realne zdjęcia obiektu.
- Podłączyć formularz kontaktowy (`src/pages/Contact.tsx`) do prawdziwego backendu/wysyłki e-mail.
- Uzupełnić sekcję Blog realnymi wpisami.
- Podmienić favicon (`public/favicon.png`).
