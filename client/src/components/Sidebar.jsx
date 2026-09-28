// Import icons
import {
    LayoutDashboard,
    Users,
    Menu,
    X
} from "lucide-react";

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
                    fixed left-0 top-0 z-50 h-screen w-64
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
                <nav className="p-4">
                    <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Menu
                    </p>

                    <div className="space-y-1">
                        <a
                            href="/dashboard"
                            className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2.5 text-sm font-medium text-gray-900"
                        >
                            <LayoutDashboard size={19} />
                            Dashboard
                        </a>

                        <a
                            href="/employees"
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        >
                            <Users size={19} />
                            Employees
                        </a>
                    </div>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;