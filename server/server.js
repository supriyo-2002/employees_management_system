// Import Express
const express = require("express");

// Import routes
const employeeRoutes = require("./routes/employeeRoutes");

// Import CORS
const cors = require("cors");

// Create Express app
const app = express();

// Enable CORS
app.use(cors());

// JSON middleware
app.use(express.json());

// Routes
app.use("/api/employees", employeeRoutes);

// Server port
const PORT = 5000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});