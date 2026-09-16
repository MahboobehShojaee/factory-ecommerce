# Known post-launch work

The following items were deliberately deferred from the September 2026 launch
to avoid introducing breaking framework migrations during final deployment.

## Dependency migrations

- **React Router 7:** The frontend remains on React Router DOM 6.30.6. Two
  Moderate npm advisories require a dedicated migration to 7.18.3 or newer.
  Current navigation targets are application-controlled, and the app does not
  use React Router SSR hydration.
- **Express 5:** The API remains on Express 4.22.2. Two Moderate `qs`
  advisories require a dedicated migration to Express 5.2.1 or newer. Existing
  request body limits, validation, endpoint rate limits, and restricted CORS
  reduce exposure until that migration is completed.

Do not apply `npm audit fix --force` for either application without completing
and testing the corresponding migration.

## Server-rendered metadata

Page-specific titles, descriptions, canonical links, Open Graph tags, and
Twitter tags are updated correctly after the SPA loads. A future SSR or
prerendering task is still required for crawlers and social-preview services
that do not execute JavaScript.

## Chatbot

The chatbot is intentionally disabled. Keep `ENABLE_CHATBOT` and
`VITE_ENABLE_CHATBOT` unset or set to `false` unless a separate security and
cost review explicitly approves enabling it.
