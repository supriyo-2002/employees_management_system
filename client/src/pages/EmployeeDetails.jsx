// Import React hooks
import { useEffect, useState } from "react";

// Import Axios
import axios from "axios";

// Import route parameter
import { useParams, useNavigate } from "react-router-dom";

// Import icons
import {
    ArrowLeft,
    Mail,
    Phone,
    Calendar,
    Briefcase,
    Building2,
    User
} from "lucide-react";

const EmployeeDetails = () => {
    // Get employee ID from URL
    const { id } = useParams();

    // Navigate between pages
    const navigate = useNavigate();

    // Store employee data
    const [employee, setEmployee] = useState(null);

    // Store loading state
    const [loading, setLoading] = useState(true);

    // Store error message
    const [error, setError] = useState("");

    // Fetch employee when ID changes
    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                // Call employee API
                const response = await axios.get(
                    `http://localhost:5000/api/employees/${id}`
                );

                // Store employee data
                setEmployee(response.data);

            } catch (error) {
                // Store error message
                setError(
                    error.response?.data?.message ||
                    "Failed to load employee"
                );

                console.error(error);

            } finally {
                // Stop loading
                setLoading(false);
            }
        };

        fetchEmployee();
    }, [id]);

    // Loading state
    if (loading) {
        return (
            <div className="rounded-xl border border-gray-200 bg-white p-6">
                <p className="text-sm text-gray-500">
                    Loading employee information...
                </p>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="space-y-4">

                <button
                    onClick={() => navigate("/employees")}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                    <ArrowLeft size={18} />
                    Back to Employees
                </button>

                <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                    <p className="text-sm text-red-600">
                        {error}
                    </p>
                </div>

            </div>
        );
    }

    // Employee not found
    if (!employee) {
        return (
            <div className="rounded-xl border border-gray-200 bg-white p-6">
                <p className="text-sm text-gray-500">
                    Employee not found.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">

            {/* Back button */}
            <button
                onClick={() => navigate("/employees")}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
                <ArrowLeft size={18} />
                Back to Employees
            </button>

            {/* Employee profile header */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                    {/* Profile avatar */}
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                        <User
                            size={38}
                            className="text-gray-500"
                        />
                    </div>

                    {/* Employee basic information */}
                    <div>

                        <h1 className="text-2xl font-bold text-gray-900">
                            {employee.first_name} {employee.last_name}
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            {employee.designation?.designation_name}
                            {" • "}
                            {employee.department?.department_name}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-3">

                            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                {employee.employment_status?.employment_status_name}
                            </span>

                            <span className="text-sm text-gray-500">
                                {employee.employee_id}
                            </span>

                        </div>

                    </div>

                </div>

            </div>

            {/* Personal Information */}
            <div className="rounded-xl border border-gray-200 bg-white">

                <div className="border-b border-gray-200 p-5">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Personal Information
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2">

                    {/* First Name */}
                    <div>
                        <p className="text-xs font-medium text-gray-500">
                            First Name
                        </p>

                        <p className="mt-1 text-sm text-gray-900">
                            {employee.first_name}
                        </p>
                    </div>

                    {/* Last Name */}
                    <div>
                        <p className="text-xs font-medium text-gray-500">
                            Last Name
                        </p>

                        <p className="mt-1 text-sm text-gray-900">
                            {employee.last_name}
                        </p>
                    </div>

                    {/* Email */}
                    <div>
                        <div className="flex items-center gap-2">
                            <Mail
                                size={15}
                                className="text-gray-400"
                            />

                            <p className="text-xs font-medium text-gray-500">
                                Email
                            </p>
                        </div>

                        <p className="mt-1 text-sm text-gray-900">
                            {employee.email}
                        </p>
                    </div>

                    {/* Phone */}
                    <div>
                        <div className="flex items-center gap-2">
                            <Phone
                                size={15}
                                className="text-gray-400"
                            />

                            <p className="text-xs font-medium text-gray-500">
                                Phone
                            </p>
                        </div>

                        <p className="mt-1 text-sm text-gray-900">
                            {employee.phone}
                        </p>
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <div className="flex items-center gap-2">
                            <Calendar
                                size={15}
                                className="text-gray-400"
                            />

                            <p className="text-xs font-medium text-gray-500">
                                Date of Birth
                            </p>
                        </div>

                        <p className="mt-1 text-sm text-gray-900">
                            {employee.date_of_birth}
                        </p>
                    </div>

                </div>

            </div>

            {/* Employment Information */}
            <div className="rounded-xl border border-gray-200 bg-white">

                <div className="border-b border-gray-200 p-5">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Employment Information
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2">

                    {/* Department */}
                    <div>
                        <div className="flex items-center gap-2">
                            <Building2
                                size={15}
                                className="text-gray-400"
                            />

                            <p className="text-xs font-medium text-gray-500">
                                Department
                            </p>
                        </div>

                        <p className="mt-1 text-sm text-gray-900">
                            {employee.department?.department_name}
                        </p>
                    </div>

                    {/* Designation */}
                    <div>
                        <div className="flex items-center gap-2">
                            <Briefcase
                                size={15}
                                className="text-gray-400"
                            />

                            <p className="text-xs font-medium text-gray-500">
                                Designation
                            </p>
                        </div>

                        <p className="mt-1 text-sm text-gray-900">
                            {employee.designation?.designation_name}
                        </p>
                    </div>

                    {/* Employment Type */}
                    <div>
                        <p className="text-xs font-medium text-gray-500">
                            Employment Type
                        </p>

                        <p className="mt-1 text-sm text-gray-900">
                            {employee.employment_type?.employment_type_name}
                        </p>
                    </div>

                    {/* Joining Date */}
                    <div>
                        <p className="text-xs font-medium text-gray-500">
                            Joining Date
                        </p>

                        <p className="mt-1 text-sm text-gray-900">
                            {employee.joining_date}
                        </p>
                    </div>

                    {/* Manager */}
                    <div>
                        <p className="text-xs font-medium text-gray-500">
                            Manager
                        </p>

                        <p className="mt-1 text-sm text-gray-900">
                            {employee.manager
                                ? `${employee.manager.first_name} ${employee.manager.last_name}`
                                : "No Manager"}
                        </p>
                    </div>

                    {/* Annual CTC */}
                    <div>
                        <p className="text-xs font-medium text-gray-500">
                            Annual CTC
                        </p>

                        <p className="mt-1 text-sm text-gray-900">
                            ₹{Number(employee.annual_ctc).toLocaleString("en-IN")}
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default EmployeeDetails;