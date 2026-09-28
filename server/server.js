const express = require("express");
const employeeRoutes = require("./routes/employeeRoutes");
const cors = require("cors");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swagger");


// Enable CORS
app.use(cors());
// JSON middleware
app.use(express.json());
// Swagger API documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Routes
app.use("/api/employees", employeeRoutes);

// Server port
const PORT = 5000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`); 
    console.log(`Swagger API documentation available at http://localhost:${PORT}/api-docs`);
});