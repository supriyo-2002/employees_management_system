# Employee Information Management Web Application

A full-stack web application for managing employee information in one central system.

## Features

- Add and manage employee records
- View employee information
- Update employee details
- Remove employee records

## Technology Stack

- Frontend: React, Vite, and Tailwind CSS
- Backend: Node.js and Express
- Database: Add your database name here

## Project Structure

```text
assessment/
├── client/    # Frontend application
├── server/    # Backend API
└── README.md  # Project documentation
```

## Requirements

- Node.js and npm

## Installation

Install the backend dependencies:

```bash
cd server
npm install
```

Install the frontend dependencies:

```bash
cd ../client
npm install
```

## Running the Application

Start the backend in one terminal:

```bash
cd server
npm run dev
```

Start the frontend in another terminal:

```bash
cd client
npm run dev
```

The frontend URL will be displayed in the terminal, usually `http://localhost:5173`.

## Environment Variables

Create a `.env` file in the `server` folder for environment-specific settings.

Example:

```env
PORT=5000
```
