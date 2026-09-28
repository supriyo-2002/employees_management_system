// Import React hooks
import { useEffect, useMemo, useState } from "react";

// Import Axios
import axios from "axios";

// Import navigation
import { useNavigate } from "react-router-dom";

// Import icons
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

// Import reusable employee table
import EmployeeTable from "../components/EmployeeTable";

const Employees = () => {
    // Navigate between pages
    const navigate = useNavigate();

    // Store employee data
    const [employees, setEmployees] = useState([]);

    // Store search value
    const [search, setSearch] = useState("");

    // Store selected department
    const [department, setDepartment] = useState("All");

    // Store selected employment status
    const [status, setStatus] = useState("All");

    // Store selected sorting option
    const [sortBy, setSortBy] = useState("name-asc");

    // Store current page
    const [currentPage, setCurrentPage] = useState(1);

    // Store loading state
    const [loading, setLoading] = useState(true);

    // Store API error
    const [error, setError] = useState("");

    // Number of employees displayed on one page
    const employeesPerPage = 10;

    // Fetch employees from API
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                // Show loading
                setLoading(true);

                // Clear previous error
                setError("");

                let response;

                // Call search API when search value exists
                if (search.trim() !== "") {
                    response = await axios.get(
                        `http://localhost:5000/api/employees/search?query=${encodeURIComponent(
                            search.trim()
                        )}`
                    );
                } else {
                    // Get all employees
                    response = await axios.get(
                        "http://localhost:5000/api/employees"
                    );
                }

                // Store API response
                setEmployees(response.data);

                // Return to first page after new search
                setCurrentPage(1);

            } catch (error) {
                // Clear employee data
                setEmployees([]);

                // Show error
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

    // Get unique departments
    const departments = useMemo(() => {
        return [
            "All",
            ...new Set(
                employees
                    .map(
                        (employee) =>
                            employee.department?.department_name
                    )
                    .filter(Boolean)
            )
        ];
    }, [employees]);

    // Get unique employment statuses
    const statuses = useMemo(() => {
        return [
            "All",
            ...new Set(
                employees
                    .map(
                        (employee) =>
                            employee.employment_status
                                ?.employment_status_name
                    )
                    .filter(Boolean)
            )
        ];
    }, [employees]);

    // Filter employees
    const filteredEmployees = useMemo(() => {
        return employees.filter((employee) => {
            const employeeDepartment =
                employee.department?.department_name;

            const employeeStatus =
                employee.employment_status?.employment_status_name;

            const departmentMatch =
                department === "All" ||
                employeeDepartment === department;

            const statusMatch =
                status === "All" ||
                employeeStatus === status;

            return departmentMatch && statusMatch;
        });
    }, [employees, department, status]);

    // Sort employees
    const sortedEmployees = useMemo(() => {
        const sorted = [...filteredEmployees];

        if (sortBy === "name-asc") {
            sorted.sort((a, b) =>
                `${a.first_name} ${a.last_name}`.localeCompare(
                    `${b.first_name} ${b.last_name}`
                )
            );
        }

        if (sortBy === "name-desc") {
            sorted.sort((a, b) =>
                `${b.first_name} ${b.last_name}`.localeCompare(
                    `${a.first_name} ${a.last_name}`
                )
            );
        }

        if (sortBy === "joining-newest") {
            sorted.sort(
                (a, b) =>
                    new Date(b.joining_date) -
                    new Date(a.joining_date)
            );
        }

        if (sortBy === "joining-oldest") {
            sorted.sort(
                (a, b) =>
                    new Date(a.joining_date) -
                    new Date(b.joining_date)
            );
        }

        return sorted;
    }, [filteredEmployees, sortBy]);

    // Calculate total pages
    const totalPages = Math.ceil(
        sortedEmployees.length / employeesPerPage
    );

    // Get employees for current page
    const paginatedEmployees = sortedEmployees.slice(
        (currentPage - 1) * employeesPerPage,
        currentPage * employeesPerPage
    );

    // Calculate visible employee range
    const startEmployee =
        sortedEmployees.length === 0
            ? 0
            : (currentPage - 1) * employeesPerPage + 1;

    const endEmployee = Math.min(
        currentPage * employeesPerPage,
        sortedEmployees.length
    );

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

            {/* Search and filters */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

                    {/* Search */}
                    <div className="relative xl:col-span-2">

                        <Search
                            size={19}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(event) =>
                                setSearch(event.target.value)
                            }
                            placeholder="Search by name or employee ID..."
                            className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                        />

                    </div>

                    {/* Department filter */}
                    <select
                        value={department}
                        onChange={(event) => {
                            setDepartment(event.target.value);
                            setCurrentPage(1);
                        }}
                        className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-gray-500"
                    >
                        {departments.map((item) => (
                            <option key={item} value={item}>
                                {item === "All"
                                    ? "All Departments"
                                    : item}
                            </option>
                        ))}
                    </select>

                    {/* Status filter */}
                    <select
                        value={status}
                        onChange={(event) => {
                            setStatus(event.target.value);
                            setCurrentPage(1);
                        }}
                        className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-gray-500"
                    >
                        {statuses.map((item) => (
                            <option key={item} value={item}>
                                {item === "All"
                                    ? "All Status"
                                    : item}
                            </option>
                        ))}
                    </select>

                </div>

                {/* Sorting */}
                <div className="mt-4 flex items-center gap-3">

                    <label className="text-sm font-medium text-gray-600">
                        Sort by:
                    </label>

                    <select
                        value={sortBy}
                        onChange={(event) => {
                            setSortBy(event.target.value);
                            setCurrentPage(1);
                        }}
                        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-gray-500"
                    >
                        <option value="name-asc">
                            Name A-Z
                        </option>

                        <option value="name-desc">
                            Name Z-A
                        </option>

                        <option value="joining-newest">
                            Joining Date - Newest
                        </option>

                        <option value="joining-oldest">
                            Joining Date - Oldest
                        </option>
                    </select>

                </div>

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
                        {sortedEmployees.length} employee
                        {sortedEmployees.length !== 1 ? "s" : ""} found
                    </p>
                </div>

                {/* Loading state */}
                {loading && (
                    <div className="p-5 text-sm text-gray-500">
                        Loading employees...
                    </div>
                )}

                {/* Empty state */}
                {!loading &&
                    sortedEmployees.length === 0 &&
                    !error && (
                        <div className="p-5 text-sm text-gray-500">
                            No employees found.
                        </div>
                    )}

                {/* Employee table */}
                {!loading &&
                    paginatedEmployees.length > 0 && (
                        <EmployeeTable
                            employees={paginatedEmployees}
                            onEmployeeClick={handleEmployeeClick}
                        />
                    )}

                {/* Pagination */}
                {!loading && totalPages > 0 && (
                    <div className="flex flex-col gap-3 border-t border-gray-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

                        {/* Result count */}
                        <p className="text-sm text-gray-500">
                            Showing{" "}
                            <span className="font-medium text-gray-700">
                                {startEmployee}
                            </span>{" "}
                            to{" "}
                            <span className="font-medium text-gray-700">
                                {endEmployee}
                            </span>{" "}
                            of{" "}
                            <span className="font-medium text-gray-700">
                                {sortedEmployees.length}
                            </span>
                        </p>

                        {/* Pagination controls */}
                        <div className="flex items-center gap-2">

                            {/* Previous */}
                            <button
                                onClick={() =>
                                    setCurrentPage(
                                        (page) => page - 1
                                    )
                                }
                                disabled={currentPage === 1}
                                className="flex items-center gap-1 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <ChevronLeft size={16} />
                                Previous
                            </button>

                            {/* Page number */}
                            <span className="px-2 text-sm text-gray-600">
                                Page {currentPage} of {totalPages}
                            </span>

                            {/* Next */}
                            <button
                                onClick={() =>
                                    setCurrentPage(
                                        (page) => page + 1
                                    )
                                }
                                disabled={currentPage === totalPages}
                                className="flex items-center gap-1 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Next
                                <ChevronRight size={16} />
                            </button>

                        </div>

                    </div>
                )}

            </div>

        </div>
    );
};

export default Employees;