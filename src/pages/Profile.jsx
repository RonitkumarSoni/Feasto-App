import { useState, useEffect } from 'react';
import { User, MapPin, Receipt, Heart, Settings, LogOut, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check current theme
        if (document.documentElement.classList.contains('dark')) {
            setDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const menuItems = [
        { icon: Receipt, label: 'Past Orders', count: 12 },
        { icon: Heart, label: 'Favorites', count: 4 },
        { icon: MapPin, label: 'Saved Addresses', count: 2 },
        { icon: Settings, label: 'Settings', count: null },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">

                {/* Sidebar */}
                <div className="w-full md:w-80 space-y-4">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary-light to-primary-dark rounded-full mx-auto mb-4 p-1 shadow-lg">
                            <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800">
                                <User className="w-10 h-10 text-slate-300 dark:text-slate-600" />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white">John Doe</h2>
                        <p className="text-sm text-slate-500 mb-6">john.doe@example.com</p>

                        <button className="text-sm font-semibold text-primary border border-primary/30 bg-primary/5 w-full py-2 rounded-lg hover:bg-primary/10 transition-colors">
                            Edit Profile
                        </button>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                        {menuItems.map((item, index) => (
                            <button
                                key={index}
                                className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors border-b border-slate-100 dark:border-slate-700 last:border-0"
                            >
                                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <item.icon className="w-5 h-5 text-slate-400" />
                                    <span className="font-medium">{item.label}</span>
                                </div>
                                {item.count && (
                                    <span className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-xs font-bold px-2 py-1 rounded-full">
                                        {item.count}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden p-2">
                        <button
                            onClick={toggleTheme}
                            className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors text-slate-700 dark:text-slate-300 font-medium"
                        >
                            <div className="flex items-center gap-3">
                                {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-slate-500" />}
                                <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                            </div>
                            <div className={`w-12 h-6 rounded-full p-1 transition-colors ${darkMode ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'}`}>
                                <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
                            </div>
                        </button>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                        <Link to="/login">
                            <button className="w-full flex items-center gap-3 p-4 hover:bg-red-50 dark:hover:bg-red-900/10 text-red-500 transition-colors font-medium">
                                <LogOut className="w-5 h-5" /> Logout
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Content Area - Past Orders Mock */}
                <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                        <Receipt className="w-6 h-6 text-primary" /> Past Orders
                    </h3>

                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="border border-slate-100 dark:border-slate-700 rounded-xl p-4 hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="font-bold text-slate-800 dark:text-white">Burger King • <span className="text-sm font-normal text-slate-500">ORD-1004{i}</span></h4>
                                        <p className="text-xs text-slate-500 mt-1">12 Feb 2026, 08:30 PM • 3 items</p>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="font-bold text-slate-800 dark:text-white">₹ 420.00</span>
                                        <span className="text-xs font-semibold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded mt-1">Delivered</span>
                                    </div>
                                </div>
                                <div className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-1">
                                    1x Whopper, 1x Medium Fries, 1x Coke Large
                                </div>
                                <div className="flex gap-3">
                                    <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                        Track Order
                                    </button>
                                    <button className="px-4 py-2 gradient-bg text-white rounded-lg text-sm font-semibold shadow-sm hover:shadow-primary/30 transition-all">
                                        Reorder
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Profile;
