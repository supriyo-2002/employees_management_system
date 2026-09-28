// Import Express
const express = require("express");

// Import employee controller
const { getEmployees,getEmployeeById,searchEmployees } = require("../controllers/employeeController");

// Create router
const router = express.Router();

// Get all employees
router.get("/", getEmployees);
// Search employees
router.get("/search", searchEmployees);
router.get("/:id", getEmployeeById);


module.exports = router;