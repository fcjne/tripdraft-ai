

# TripDraft AI — Ticket Generator

A smart assistant that helps product managers, designers, and developers quickly draft standardized Jira-style tickets.
You provide a short description of a task — the app generates a clean, well-structured ticket with an optional acceptance criteria and testing notes.

---

## Features

- Supports multiple ticket types: Development, Design/UI/UX, QA/Testing, Research, Business/Product.
- Adjustable level of detail: Brief, Standard, Detailed.
- Optionally include Acceptance Criteria and Testing Notes.
- Based on OpenAI GPT models.

---

## Tech stack

- **React** + **Vite** + **Tailwind CSS**
- **Node.js** + **Express**
- **OpenAI API**
- **concurrently** for running server and client together

---

## Getting Started

### 1️. Clone the repository

```bash
git clone https://github.com/fcjne/tripdraft-ai.git
cd tripdraft-ai
```

### 2️. Install dependencies

```bash
npm install
```

### 3️. Setup environment variables

Create a `.env` file based on the provided example:

```bash
cp .env.example .env
```

Fill in your OpenAI API key in `.env`:

```env
VITE_API_URL=http://localhost:3000/api/generate
OPENAI_API_KEY=your_openai_key_here
```

### 4️. Run the app

```bash
npm run dev
```

This will start both:
- **Vite React frontend** → [http://localhost:5173](http://localhost:5173)
- **Node.js API server** → [http://localhost:3000](http://localhost:3000)

---

## Usage

1. Enter a short summary of the task you want to describe.
2. Select ticket type, detail level, and optional flags.
3. Click "Generate Ticket".
4. Review and copy the generated ticket draft.
