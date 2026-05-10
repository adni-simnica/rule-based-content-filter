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
  routes/
  database.js
  server.js

frontend/
  src/
    components/
    App.jsx

## How to Run

### 1. Clone the repository

git clone <your-repo-url>
cd rule-based-content-filter

### 2. Backend setup

cd backend
npm install
node server.js

Backend runs on:
http://localhost:5000

### 3. Frontend setup

cd frontend
npm install
npm start

Frontend runs on:
http://localhost:3000

## API Endpoints

GET /rules → fetch all rules  
POST /rules → create rule  
POST /process → process text using rules  

## Notes

- Rules are stored in SQLite database
- Backend logic is separated into routes and controllers
- Frontend handles UI and rendering only