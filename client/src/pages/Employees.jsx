// Import React hooks
import { useEffect, useState } from "react";

// Import Axios
import axios from "axios";

// Import navigation
import { useNavigate } from "react-router-dom";

// Import search icon
import { Search } from "lucide-react";

// Import reusable employee table
import EmployeeTable from "../components/EmployeeTable";

const Employees = () => {
    // Navigate between pages
    const navigate = useNavigate();

    // Store employee data
    const [employees, setEmployees] = useState([]);

    // Store search value
    const [search, setSearch] = useState("");

    // Store loading state
    const [loading, setLoading] = useState(true);

    // Store API error
    const [error, setError] = useState("");

    // Fetch employees whenever search value changes
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                // Show loading
                setLoading(true);

                // Clear previous error
                setError("");

                let response;

                // Check if user entered a search value
                if (search.trim() !== "") {
                    // Call search API
                    response = await axios.get(
                        `http://localhost:5000/api/employees/search?query=${encodeURIComponent(
                            search.trim()
                        )}`
                    );
                } else {
                    // Get all employees when search is empty
                    response = await axios.get(
                        "http://localhost:5000/api/employees"
                    );
                }

                // Store API response
                setEmployees(response.data);

            } catch (error) {
                // Clear employee data
                setEmployees([]);

                // Show error message
                setError("Failed to load employees");

                console.error(error);

            } finally {
                // Stop loading
                setLoading(false);
            }
        };

        fetchEmployees();
    }, [search]);

    // Open employee details
    const handleEmployeeClick = (employeeId) => {
        navigate(`/employees/${employeeId}`);
    };

    return (
        <div className="space-y-6">

            {/* Page heading */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">
                    Employees
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    View and search employee information
                </p>
            </div>

            {/* Search box */}
            <div className="relative max-w-md">

                {/* Search icon */}
                <Search
                    size={19}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                {/* Search input */}
                <input
                    type="text"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search by name or employee ID..."
                    className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                />

            </div>

            {/* API error */}
            {error && (
                <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
                    {error}
                </div>
            )}

            {/* Employee list */}
            <div className="rounded-xl border border-gray-200 bg-white">

                {/* Section header */}
                <div className="border-b border-gray-200 p-5">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Employee List
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Select an employee to view their details
                    </p>
                </div>

                {/* Loading state */}
                {loading && (
                    <div className="p-5 text-sm text-gray-500">
                        Loading employees...
                    </div>
                )}

                {/* Empty state */}
                {!loading && employees.length === 0 && !error && (
                    <div className="p-5 text-sm text-gray-500">
                        No employees found.
                    </div>
                )}

                {/* Employee table */}
                {!loading && employees.length > 0 && (
                    <EmployeeTable
                        employees={employees}
                        onEmployeeClick={handleEmployeeClick}
                    />
                )}

            </div>

        </div>
    );
};

export default Employees;