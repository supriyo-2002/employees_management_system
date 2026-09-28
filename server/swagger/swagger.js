// Import Swagger JSDoc
const swaggerJSDoc = require("swagger-jsdoc");

// Swagger configuration
const options = {
    definition: {
        openapi: "3.0.0",

        info: {
            title: "Employee 360 API",
            version: "1.0.0",
            description: "API documentation for Employee 360"
        },

        servers: [
            {
                url: "http://localhost:5000"
            }
        ]
    },

    // Files containing Swagger API documentation
    apis: ["./routes/*.js"]
};

// Generate Swagger specification
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;