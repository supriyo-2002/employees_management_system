// Import Supabase client
const supabase = require("../config/supabase");

// Get all employees
// Get all employees
const getEmployees = async (req, res) => {
    try {
        // Get employees with related information
        const { data, error } = await supabase
            .from("employees")
            .select(`
                employee_record_id,
                employee_id,
                first_name,
                last_name,
                email,
                phone,
                date_of_birth,
                joining_date,
                annual_ctc,
                department:departments(
                    department_name
                ),
                designation:designations(
                    designation_name
                ),
                employment_type:employment_types(
                    employment_type_name
                ),
                employment_status:employment_statuses(
                    employment_status_name
                )
            `);

        // Handle database error
        if (error) {
            return res.status(500).json({
                message: "Failed to fetch employees",
                error: error.message
            });
        }

        // Return employee data
        res.status(200).json(data);

    } catch (error) {
        // Handle server error
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

// Get employee by employee ID
const getEmployeeById = async (req, res) => {
    const { id } = req.params;

    try {
        // Get employee with related information
        const { data, error } = await supabase
            .from("employees")
            .select(`
                employee_record_id,
                employee_id,
                first_name,
                last_name,
                email,
                phone,
                date_of_birth,
                joining_date,
                annual_ctc,
                manager_employee_id,
                department:departments(
                    department_name
                ),
                designation:designations(
                    designation_name
                ),
                employment_type:employment_types(
                    employment_type_name
                ),
                employment_status:employment_statuses(
                    employment_status_name
                )
            `)
            .eq("employee_id", id)
            .single();

        // Employee not found
        if (error && error.code === "PGRST116") {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        // Database error
        if (error) {
            return res.status(500).json({
                message: "Failed to fetch employee",
                error: error.message
            });
        }

        // Get manager information
        let manager = null;

        if (data.manager_employee_id) {
            const { data: managerData, error: managerError } = await supabase
                .from("employees")
                .select(`
                    employee_id,
                    first_name,
                    last_name
                `)
                .eq("employee_record_id", data.manager_employee_id)
                .single();

            if (!managerError) {
                manager = managerData;
            }
        }

        // Add manager to employee response
        data.manager = manager;

        // Return employee
        res.status(200).json(data);

    } catch (error) {
        // Handle server error
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};
// Search employees
const searchEmployees = async (req, res) => {
    const { query } = req.query;

    try {
        // Validate search query
        if (!query || query.trim() === "") {
            return res.status(400).json({
                message: "Search query is required"
            });
        }

        // Search by employee ID, first name, or last name
        const { data, error } = await supabase
            .from("employees")
            .select(`
                employee_record_id,
                employee_id,
                first_name,
                last_name,
                email,
                phone,
                date_of_birth,
                joining_date,
                annual_ctc,
                department:departments(
                    department_name
                ),
                designation:designations(
                    designation_name
                ),
                employment_type:employment_types(
                    employment_type_name
                ),
                employment_status:employment_statuses(
                    employment_status_name
                )
            `)
            .or(
                `employee_id.ilike.%${query}%,first_name.ilike.%${query}%,last_name.ilike.%${query}%`
            );

        // Handle database error
        if (error) {
            return res.status(500).json({
                message: "Failed to search employees",
                error: error.message
            });
        }

        // Return search results
        res.status(200).json(data);

    } catch (error) {
        // Handle server error
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};
// Export controller functions
module.exports = {
    getEmployees,
    getEmployeeById,
    searchEmployees
};
