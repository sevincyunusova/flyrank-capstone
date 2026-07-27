# FlyRank Capstone

Internship capstone project for FlyRank AI. This repository will hold the application built during the internship—currently in early setup.

## Overview

This project is part of a FlyRank AI internship program. The goal is to design and implement a web application using modern frontend tooling, following clean, modular practices suitable for production use.

> **Status:** Initial repository setup is complete. Application scaffolding and features are in progress.

## Tech Stack

| Layer | Technologies |
|-------|--------------|
| Frontend | [React](https://react.dev/), [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) |
| Tooling | [Cursor](https://cursor.com/), Claude Code |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.x or later
- npm, pnpm, or yarn

### Installation

Once the application is scaffolded:

```bash
git clone <repository-url>
cd flyrank-capstone
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> Setup commands will be updated here as the project structure is finalized.

## Project Structure

```
flyrank-capstone/
├── README.md          # Project documentation
├── LICENSE            # MIT license
├── CLAUDE.md          # AI assistant and coding conventions
└── .gitignore         # Ignored files (node_modules, .env, etc.)
```

Additional directories (e.g. `src/`, `app/`, `components/`) will be added as development progresses.

## Development Conventions

- Write clean, modular code with clear separation of concerns.
- Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.
- Keep environment secrets in `.env` (never commit them).

See [CLAUDE.md](./CLAUDE.md) for full project conventions.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
