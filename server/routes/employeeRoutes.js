const express = require("express");
const { getEmployees,getEmployeeById,searchEmployees } = require("../controllers/employeeController");

// Create router
const router = express.Router();

/**
 * @swagger
 * /api/employees:
 *   get:
 *     summary: Get all employees
 *     description: Returns a list of all employees.
 *     tags:
 *       - Employees
 *     responses:
 *       200:
 *         description: Successfully retrieved employees
 *       500:
 *         description: Failed to fetch employees
 */
router.get("/", getEmployees);


/**
 * @swagger
 * /api/employees/search:
 *   get:
 *     summary: Search employees
 *     description: Search employees by employee ID, first name, or last name.
 *     tags:
 *       - Employees
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Employee ID, first name, or last name
 *     responses:
 *       200:
 *         description: Search results
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Failed to search employees
 */
router.get("/search", searchEmployees);

/**
 * @swagger
 * /api/employees/{id}:
 *   get:
 *     summary: Get employee by ID
 *     description: Returns a single employee by employee ID.
 *     tags:
 *       - Employees
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Employee ID
 *     responses:
 *       200:
 *         description: Employee retrieved successfully
 *       404:
 *         description: Employee not found
 *       500:
 *         description: Failed to fetch employee
 */
router.get("/:id", getEmployeeById);


module.exports = router;