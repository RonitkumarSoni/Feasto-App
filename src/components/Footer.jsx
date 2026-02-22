import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaGooglePlay, FaApple } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 pt-12">

            {/* Get the App Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 border-b border-slate-800 pb-12">
                <div className="bg-slate-800/40 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-700/50">
                    <div className="flex-1 max-w-xl text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
                            For better experience, download the Feasto app now
                        </h2>
                        <p className="text-slate-400 text-sm md:text-base">
                            Available on iOS and Android devices. Order your favorite food on the go!
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <button className="flex items-center justify-center gap-3 bg-black hover:bg-slate-900 text-white border border-slate-700 px-6 py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg w-full sm:w-auto hover:border-slate-500">
                            <FaApple className="text-3xl" />
                            <div className="text-left flex flex-col">
                                <span className="text-[10px] uppercase font-bold tracking-wider leading-none mb-1 text-slate-300">Download on the</span>
                                <span className="text-lg font-bold leading-none">App Store</span>
                            </div>
                        </button>
                        <button className="flex items-center justify-center gap-3 bg-black hover:bg-slate-900 text-white border border-slate-700 px-6 py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg w-full sm:w-auto hover:border-slate-500">
                            <FaGooglePlay className="text-2xl" />
                            <div className="text-left flex flex-col">
                                <span className="text-[10px] uppercase font-bold tracking-wider leading-none mb-1 text-slate-300">Get it on</span>
                                <span className="text-lg font-bold leading-none">Google Play</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Links */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
                <div className="col-span-1 md:col-span-1 border-b md:border-b-0 border-slate-800 pb-8 md:pb-0">
                    <Link to="/home" className="inline-block mb-4">
                        <span className="text-3xl font-extrabold tracking-tight text-white drop-shadow-sm">Feasto</span>
                    </Link>
                    <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
                        Delivering Happiness, One Bite at a Time. Order from your favorite restaurants and track on the go.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-5 tracking-wide uppercase text-sm">Company</h3>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li><a href="#" className="hover:text-primary transition-colors duration-300">About Us</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors duration-300">Careers</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors duration-300">Team</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors duration-300">Feasto One</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-5 tracking-wide uppercase text-sm">Contact us</h3>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li><a href="#" className="hover:text-primary transition-colors duration-300">Help & Support</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors duration-300">Partner with us</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors duration-300">Ride with us</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-5 tracking-wide uppercase text-sm">Legal</h3>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li><a href="#" className="hover:text-primary transition-colors duration-300">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors duration-300">Cookie Policy</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 py-6">
                <p className="text-sm text-slate-500 order-2 md:order-1 font-medium">© 2026 Feasto Technologies. All rights reserved.</p>
                <div className="flex items-center gap-6 order-1 md:order-2">
                    <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                        <FaFacebook className="text-2xl drop-shadow-sm" />
                        <span className="sr-only">Facebook</span>
                    </a>
                    <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                        <FaTwitter className="text-2xl drop-shadow-sm" />
                        <span className="sr-only">Twitter</span>
                    </a>
                    <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                        <FaInstagram className="text-2xl drop-shadow-sm" />
                        <span className="sr-only">Instagram</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
