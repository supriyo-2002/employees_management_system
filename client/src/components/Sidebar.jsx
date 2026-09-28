// Import icons
import {
    LayoutDashboard,
    Users,
    X,
    UserCircle
} from "lucide-react";

// Import NavLink for route navigation and active state
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed left-0 top-0 z-50 flex h-screen w-64 flex-col
                    border-r border-gray-200 bg-white
                    transition-transform duration-300
                    lg:translate-x-0
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                {/* Logo */}
                <div className="flex h-16 items-center justify-between border-b border-gray-200 px-5">
                    <h1 className="text-xl font-bold text-gray-900">
                        Employee 360
                    </h1>

                    {/* Close button - mobile */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4">
                    <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Menu
                    </p>

                    <div className="space-y-1">

                        {/* Dashboard */}
                        <NavLink
                            to="/dashboard"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                                    isActive
                                        ? "bg-gray-900 text-white"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                }`
                            }
                        >
                            <LayoutDashboard size={19} />
                            Dashboard
                        </NavLink>

                        {/* Employees */}
                        <NavLink
                            to="/employees"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                                    isActive
                                        ? "bg-gray-900 text-white"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                }`
                            }
                        >
                            <Users size={19} />
                            Employees
                        </NavLink>

                    </div>
                </nav>

                {/* Dummy profile */}
                <div className="border-t border-gray-200 p-4">
                    <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-50">

                        {/* Profile icon */}
                        <UserCircle
                            size={40}
                            className="text-gray-400"
                        />

                        {/* Profile information */}
                        <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-gray-900">
                                Rahul Sharma
                            </p>

                            <p className="truncate text-xs text-gray-500">
                                HR Administrator
                            </p>
                        </div>

                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;