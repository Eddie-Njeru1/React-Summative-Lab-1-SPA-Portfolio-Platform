# Personal Project Showcase App

This is a Single Page Application (SPA) built with React that lets a creative agency display their projects, add new ones, and search through them.

---

## What it does

- Shows a list of projects on the main page
- Has a form where you can add a new project (title + description)
- Has a search bar to filter through projects
- Styled using Material UI

---

## Tools used

- React (set up with Vite)
- JavaScript
- Material UI for styling

---

## How to run it

1. Clone the repo:
   ```bash
   git clone https://github.com/Eddie-Njeru1/React-Summative-Lab-1-SPA-Portfolio-Platform.git
   cd React-Summative-Lab-1-SPA-Portfolio-Platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Material UI (if not already):
   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   ```

4. Start the app:
   ```bash
   npm run dev
   ```

5. Open `http://localhost:5173` in your browser

---

## How to use it

- When the app loads you'll see the project list (empty at first)
- Fill in the Title and Description fields and hit "Submit Project" to add one
- Type in the search bar to filter projects

---

## Project structure

```
src/
├── components/
│   ├── AddProjects.jsx       # The form for adding projects
│   ├── ProjectsList.jsx      # Displays all the projects
│   └── SearchProjects.jsx    # The search input
├── App.jsx                   # Main component, holds all the state
└── main.jsx                  # Entry point
```

---

## Known issues / limitations

- Projects disappear when you refresh the page — there's no database or local storage hooked up yet

---

## What I'd improve with more time

- Save projects to local storage so they don't disappear on refresh


---

## Author

Eddie Njeru