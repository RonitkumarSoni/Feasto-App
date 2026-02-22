import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User } from 'lucide-react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartQuantity = useSelector((state) => state.cart.totalQuantity);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link to="/home" className="flex items-center gap-2">
                    <img src="/logo.png" alt="Feasto Logo" className="h-10 sm:h-12 w-auto object-contain fallback-bg" onError={(e) => { e.target.style.display = 'none'; }} />
                </Link>

                {/* Search Bar - Hidden on small mobile */}
                <div className="hidden md:flex flex-1 max-w-md mx-8">
                    <div className="relative w-full group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for restaurants, items or more"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-full bg-gray-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                    </div>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-6 text-gray-700 dark:text-gray-300">
                    <button className="md:hidden transition-transform hover:scale-110">
                        <Search className="h-6 w-6" />
                    </button>

                    <Link to="/profile" className="flex items-center gap-2 hover:text-primary transition-colors group">
                        <div className="p-1 rounded-full group-hover:bg-primary/10 transition-colors">
                            <User className="h-6 w-6" />
                        </div>
                        <span className="hidden sm:block font-medium">Sign In</span>
                    </Link>

                    <Link to="/cart" className="flex items-center gap-2 hover:text-primary transition-colors group relative">
                        <div className="p-1 rounded-full group-hover:bg-primary/10 transition-colors">
                            <ShoppingBag className="h-6 w-6" />
                            {cartQuantity > 0 && (
                                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900">
                                    {cartQuantity}
                                </span>
                            )}
                        </div>
                        <span className="hidden sm:block font-medium">Cart</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
