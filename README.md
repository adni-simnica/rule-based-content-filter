# Rule-Based Content Filter

This is a full-stack web application that allows users to create rules and apply them to text for highlighting and labeling based on keyword matching.

## Features

- Create custom rules
- Match types:
  - contains
  - startsWith
  - exact
- Actions:
  - highlight text with color
  - show tooltip labels
- Process text using backend rule engine
- Visual output in frontend

## Tech Stack

Frontend:
- React
- Axios
- CSS

Backend:
- Node.js
- Express
- SQLite

## Project Structure

backend/
  controllers/
    process.controller.js
    rules.controller.js
  routes/
    process.routes.js
    rules.routes.js
  database.js
  server.js

frontend/
  src/
    components/
        OutputBox.jsx
        RuleCard.jsx
        RuleForm.jsx
        RuleList.jsx
        TextProcessor.jsx
    services/
        api.js
    App.css
    App.jsx
    main.jsx
## How to Run

### 1. Clone the repository

git clone <your-repo-url>
cd rule-based-content-filter

### 2. Backend setup

cd backend
npm install
npm run dev

Backend runs on:
http://localhost:5000

### 3. Frontend setup

cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173

## API Endpoints

GET /rules → fetch all rules  
POST /rules → create a new rule  
DELETE /rules/:id → delete a rule  
POST /process → process text using rules  