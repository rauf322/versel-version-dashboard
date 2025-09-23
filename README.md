# Portfolio CV

Super simple CV portfolio web page built with React and React Router. No UI component libraries - just JSX and Tailwind CSS.

## Tech Stack

- React 19
- React Router 7
- TypeScript
- Tailwind CSS 4
- Vite

## Features

- Responsive design
- Dark/Light theme toggle
- Project showcase with filtering
- About page with experience timeline
- Contact form
- JSON-based data management

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type check
npm run typecheck
```

## Project Structure

```
app/
├── components/       # Reusable UI components
├── contexts/         # React context providers
├── routes/           # Page components
│   ├── about/        # About page + data (JSON)
│   ├── contact/      # Contact page
│   ├── home/         # Home page
│   └── projects/     # Projects listing + details
├── types/            # TypeScript types
└── root.tsx          # App shell
```

## Data

Project and experience data is stored in JSON files for easy editing:

- `data/db.json` - Projects data
- `app/routes/about/experience.json` - Work experience
- `app/routes/about/skills.json` - Technical skills
- `app/routes/about/education.json` - Education history
