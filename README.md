# Employee 360

Employee 360 is a web-based employee information management application.

The application allows users to:

- View employee information
- Search employees by name or Employee ID
- Filter employees by department and employment status
- Sort employees
- View employee details
- View dashboard statistics
- Access API documentation using Swagger

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router
- Axios
- Lucide React

### Backend
- Node.js
- Express.js
- CORS
- Swagger / OpenAPI

### Database
- Supabase
- PostgreSQL

---

## Project Structure

```text
employee-360/
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── swagger/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── ...
│
├── README.md
└── .gitignore
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd assessment
```

## Server Setup

Move into the server folder and install dependencies:

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Do not commit the `.env` file to Git.

Start the server:

```bash
npm run dev
```

The server will run at `http://localhost:5000`. Swagger API documentation is available at `http://localhost:5000/api-docs`.

## Client Setup

Open another terminal from the repository root, move into the client folder, and install dependencies:

```bash
cd client
npm install
```

Start the client:

```bash
npm run dev
```

# Database Setup

This folder contains the SQL scripts required to set up the Employee 360 database in Supabase.

## SQL Files

### create_table.sql

Creates the database structure, including:

- departments
- designations
- employment_types
- employment_statuses
- employees
- skills
- employee_skills

It also creates the required primary keys, foreign keys, unique constraints, and relationships.

### insert_value_table.sql

Inserts the initial sample data required by the application.

This file contains 20 fictional employee records along with their related department, designation, employment type, employment status, and skill data.

---

## Setup Instructions

### Step 1: Create a Supabase Project

Create a new project in Supabase.

### Step 2: Open SQL Editor

In the Supabase dashboard:

1. Open the project.
2. Go to **SQL Editor**.
3. Create a new SQL query.




