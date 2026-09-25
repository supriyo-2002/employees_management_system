// Import Express
const express = require("express");

// Import routes
const exampleRoutes = require("./routes/exampleRoutes");

// Create Express app
const app = express();

// JSON middleware
app.use(express.json());

// Routes
app.use("/api/example", exampleRoutes);

// Server port
const PORT = 5000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});