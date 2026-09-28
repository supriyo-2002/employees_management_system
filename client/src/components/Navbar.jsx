// Import icons
import {
    Menu,
    Bell,
    UserCircle
} from "lucide-react";

const Navbar = ({ setIsOpen }) => {
    return (
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6">
            
            {/* Left section */}
            <div className="flex items-center gap-3">
                {/* Mobile menu button */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
                >
                    <Menu size={22} />
                </button>

                <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                        Dashboard
                    </h2>
                </div>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-2">
                {/* Notification */}
                <button className="relative rounded-lg p-2.5 text-gray-600 hover:bg-gray-100">
                    <Bell size={20} />

                    {/* Notification indicator */}
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
                </button>

                {/* Profile */}
                <button className="rounded-lg p-2.5 text-gray-600 hover:bg-gray-100">
                    <UserCircle size={22} />
                </button>
            </div>
        </header>
    );
};

export default Navbar;