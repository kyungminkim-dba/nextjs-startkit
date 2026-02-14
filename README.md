# Modern Web Starter Kit

Full-stack monorepo with **Next.js 16** (frontend) and **FastAPI** (backend).
Production-ready architecture with 40+ shadcn/ui components, 4-tier component system, and 3 layout templates.

## Architecture

```
claude-nextjs-starters/
├── frontend/          # Next.js 16 (TypeScript, Tailwind CSS v4, shadcn/ui)
├── backend/           # FastAPI (Pydantic v2, Uvicorn)
└── .taskmaster/       # Task management
```

**Communication:** `frontend (axios + TanStack Query)` ↔ `backend (FastAPI REST API)`

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui |
| Backend | FastAPI, Pydantic v2, Uvicorn |
| Data Fetching | TanStack Query v5, axios |
| Forms | react-hook-form, zod |
| Utilities | date-fns, next-themes, lucide-react |

## Quick Start

### Prerequisites

- Node.js 18.17+
- Python 3.11+

### Frontend

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
# Open http://localhost:3000
```

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload
# Open http://localhost:8000/docs
```

## Routes

| Route | Layout | Description |
|-------|--------|-------------|
| `/` | Marketing | Landing page |
| `/features` | Marketing | Features showcase |
| `/about` | Marketing | About page |
| `/dashboard` | Dashboard | Dashboard home (API health check) |
| `/dashboard/settings` | Dashboard | Settings (form example) |
| `/login` | Auth | Login page |
| `/register` | Auth | Registration page |

## Component Architecture (4 Tiers)

| Tier | Directory | Count | Description |
|------|-----------|-------|-------------|
| 1 - Primitives | `components/ui/` | 40 | shadcn/ui atomic components |
| 2 - Composites | `components/composites/` | 10 | Reusable 2-3 primitive combos |
| 3 - Patterns | `components/patterns/` | 10 | Page section patterns |
| 4 - Layouts | `app/(group)/layout.tsx` | 3 | Route group layouts |

## Development Scripts

```bash
# Frontend
npm run dev       # Dev server (Turbopack)
npm run build     # Production build
npm run start     # Production server
npm run lint      # ESLint
npm run format    # Prettier

# Backend
uvicorn app.main:app --reload  # Dev server
```

## License

MIT
