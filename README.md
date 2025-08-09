## Hard75 Tracker

Track your progress through the Hard 75 challenge with a clean, responsive, and persistent UI. This app helps you check off daily tasks, visualize weekly progress, and maintain a streak — all saved locally so you can close your browser and pick up right where you left off.

### Why this project

- A compact example of modern React (React 19, Vite 7, Tailwind CSS 4) with good component boundaries
- Demonstrates a simple, reliable state model with persistence via `localStorage`
- Friendly UX and a codebase that is easy to reason about for interviews and code reviews

---

## Features

- **Daily checklist**: Toggle the required Hard 75 tasks for the current day.
- **Progress and streak**: See completions, percentage, and streak at a glance.
- **Weekly overview**: Visual overview of recent days to spot trends.
- **Day navigation**: Move to previous/next day with guardrails.
- **Persistence**: All state is saved in `localStorage` — no backend needed.
- **Polished UI**: Tailwind-based gradients and accessible controls.

---

## Quick start

Prerequisites: Node 18+ and npm.

```bash
git clone https://github.com/your-username/hard75-tracker.git
cd hard75-tracker
npm install
npm run dev
```

- Open the printed local URL (typically `http://localhost:5173`).
- Production build: `npm run build` and preview with `npm run preview`.

---

## Scripts

- `npm run dev`: Start the Vite dev server
- `npm run build`: Create a production build
- `npm run preview`: Preview the production build
- `npm run lint`: Run ESLint

---

## Tech stack

- **React**: 19.x
- **Vite**: 7.x
- **Tailwind CSS**: 4.x (via `@tailwindcss/vite`)
- **Icons**: `lucide-react`
- **ESLint**: Modern config for React and hooks

---

## Project structure

```text
src/
  components/
    Header.jsx
    StatsBar.jsx
    TaskGrid.jsx
    WeeklyOverview.jsx
    DeveloperTips.jsx
    MotivationalQuote.jsx
  hooks/
    useHard75Data.jsx
  utils/
    calculations.jsx
    taskDefinitions.jsx
  App.jsx
  main.jsx
  index.css
```

---

## Architecture and state model

- **Single source of truth**: The custom hook `useHard75Data` manages all app state and persistence.
- **Persistence**: State is saved to `localStorage` under the key `hard75Data`.
- **Derived UI state**: Progress numbers are derived in `utils/calculations.jsx` to keep components simple.

### `useHard75Data` responsibilities

- `currentDay`: Number from 1–75
- `dailyTasks`: Map of taskId → boolean for the current day
- `allDays`: Map of dayNumber → dailyTasks snapshot
- `streak`: Current consecutive days completed
- `updateTask(taskId, value)`: Updates current day’s tasks and persists to `allDays`
- `navigateToDay(day)`: Changes day and loads its tasks (or initializes defaults)
- `resetChallenge()`: Clears all state and local storage

State is loaded on mount from `localStorage` and re-saved whenever `allDays`, `currentDay`, or `streak` change. This makes the app offline-friendly and restores state on refresh.

### Why `navigateToDay` instead of `setCurrentDay`

`navigateToDay` updates both the selected day and the `dailyTasks` bound to that day. Using `setCurrentDay` alone would change the day without changing the task data, creating a mismatch between UI and state. For that reason, components should call `navigateToDay` for any day changes.

---

## Key components

- `Header`: App title and branding
- `StatsBar`: Shows current day, streak, completions, and progress percentage
- `TaskGrid`: The checklist UI for daily tasks
- `WeeklyOverview`: A simple visual of progress over recent days
- `DeveloperTips` and `MotivationalQuote`: Lightweight, supportive UI elements

---

## Data model

`localStorage` key: `hard75Data`

```json
{
  "allDays": {
    "1": { "task-water": true, "task-workout-1": false, "task-reading": true },
    "2": { "task-water": false, "task-workout-1": true, "task-reading": true }
  },
  "currentDay": 3,
  "streak": 5
}
```

The exact task IDs are defined centrally in `utils/taskDefinitions.jsx`.

---

## Accessibility and UX

- Keyboard accessible buttons with clear disabled states
- High-contrast theme with readable typography
- Predictable state transitions (no silent resets)

---

## Roadmap ideas

- Configurable tasks (add/remove or rename tasks)
- Calendar view and historical stats
- Export/import data (JSON) for backup or device sync
- Optional reminders/notifications
- i18n support for localization

---

## Contributing

Contributions and suggestions are welcome. For small changes, open a PR. For larger changes, please open an issue to discuss the approach before implementing.

---

## License

No license has been selected yet. If you intend to reuse this code, you can add a license (e.g., MIT) to clarify usage rights.

---
