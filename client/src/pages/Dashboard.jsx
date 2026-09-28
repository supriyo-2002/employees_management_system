// Import React hooks
import { useEffect, useState } from "react";

// Import Axios
import axios from "axios";

// Import navigation
import { useNavigate } from "react-router-dom";

// Import components
import EmployeeTable from "../components/EmployeeTable";
import Footer from "../components/Footer";

const Dashboard = () => {
    // Navigate between pages
    const navigate = useNavigate();

    // Store employee data
    const [employees, setEmployees] = useState([]);

    // Store loading state
    const [loading, setLoading] = useState(true);

    // Store API error
    const [error, setError] = useState("");

    // Fetch employees
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                // Call backend API
                const response = await axios.get(
                    "http://localhost:5000/api/employees"
                );

                // Store employee data
                setEmployees(response.data);
            } catch (error) {
                // Store error message
                setError("Failed to load employee data");
                console.error(error);
            } finally {
                // Stop loading
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    // Calculate total employees
    const totalEmployees = employees.length;

    // Calculate active employees
    const activeEmployees = employees.filter(
        (employee) =>
            employee.employment_status?.employment_status_name === "Active"
    ).length;

    // Calculate employees on leave
    const onLeaveEmployees = employees.filter(
        (employee) =>
            employee.employment_status?.employment_status_name === "On Leave"
    ).length;

    // Calculate total departments
    const departments = new Set(
        employees
            .map((employee) => employee.department?.department_name)
            .filter(Boolean)
    ).size;

    // Open employee details
    const handleEmployeeClick = (employeeId) => {
        navigate(`/employees/${employeeId}`);
    };

    return (
        <div className="space-y-6">

            {/* Dashboard heading */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">
                    Dashboard
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    Overview of your employees
                </p>
            </div>

            {/* API error */}
            {error && (
                <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
                    {error}
                </div>
            )}

            {/* Summary cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                {/* Total Employees */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                    <p className="text-sm text-gray-500">
                        Total Employees
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-gray-900">
                        {loading ? "..." : totalEmployees}
                    </h2>
                </div>

                {/* Active Employees */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                    <p className="text-sm text-gray-500">
                        Active Employees
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-gray-900">
                        {loading ? "..." : activeEmployees}
                    </h2>
                </div>

                {/* On Leave */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                    <p className="text-sm text-gray-500">
                        On Leave
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-gray-900">
                        {loading ? "..." : onLeaveEmployees}
                    </h2>
                </div>

                {/* Departments */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                    <p className="text-sm text-gray-500">
                        Departments
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-gray-900">
                        {loading ? "..." : departments}
                    </h2>
                </div>

            </div>

            {/* Employee information */}
            <div className="rounded-xl border border-gray-200 bg-white">

                {/* Section header */}
                <div className="border-b border-gray-200 p-5">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Employee Information
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        View employee information
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

                {/* Reusable employee table */}
                {!loading && employees.length > 0 && (
                    <EmployeeTable
                        employees={employees}
                        onEmployeeClick={handleEmployeeClick}
                    />
                )}

            </div>

            {/* Footer */}
            <Footer />

        </div>
    );
};

export default Dashboard;