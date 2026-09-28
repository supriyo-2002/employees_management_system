const EmployeeTable = ({ employees, onEmployeeClick }) => {
    return (
        <div className="overflow-x-auto">

            <table className="w-full text-left">

                {/* Table header */}
                <thead className="border-b border-gray-200 bg-gray-50">
                    <tr>
                        <th className="px-5 py-3 text-xs font-semibold uppercase text-gray-500">
                            Employee ID
                        </th>

                        <th className="px-5 py-3 text-xs font-semibold uppercase text-gray-500">
                            Name
                        </th>

                        <th className="px-5 py-3 text-xs font-semibold uppercase text-gray-500">
                            Department
                        </th>

                        <th className="px-5 py-3 text-xs font-semibold uppercase text-gray-500">
                            Designation
                        </th>

                        <th className="px-5 py-3 text-xs font-semibold uppercase text-gray-500">
                            Status
                        </th>
                    </tr>
                </thead>

                {/* Table body */}
                <tbody>
                    {employees.map((employee) => (
                        <tr
                            key={employee.employee_record_id}
                            onClick={() =>
                                onEmployeeClick(employee.employee_id)
                            }
                            className="cursor-pointer border-b border-gray-100 hover:bg-gray-50"
                        >
                            <td className="px-5 py-4 text-sm font-medium text-gray-900">
                                {employee.employee_id}
                            </td>

                            <td className="px-5 py-4 text-sm text-gray-700">
                                {employee.first_name}{" "}
                                {employee.last_name}
                            </td>

                            <td className="px-5 py-4 text-sm text-gray-700">
                                {employee.department?.department_name}
                            </td>

                            <td className="px-5 py-4 text-sm text-gray-700">
                                {employee.designation?.designation_name}
                            </td>

                            <td className="px-5 py-4">
                                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                    {employee.employment_status?.employment_status_name}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
};

export default EmployeeTable;