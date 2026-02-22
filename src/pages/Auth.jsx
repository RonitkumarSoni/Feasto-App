import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User as UserIcon, ArrowRight, Github, Chrome } from 'lucide-react';

const Auth = ({ type }) => {
    const isLogin = type === 'login';
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dummy login action
        navigate('/home');
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden"
            >
                <div className="p-8">
                    <div className="text-center mb-8">
                        <Link to="/" className="inline-block mb-6">
                            <span className="text-3xl font-extrabold gradient-text">Feasto</span>
                        </Link>
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                            {isLogin ? 'Welcome back' : 'Create an account'}
                        </h2>
                        <p className="text-sm text-slate-500 mt-2">
                            {isLogin ? 'Enter your details to access your account' : 'Sign up to start ordering delicious food'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <UserIcon className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <input type="text" className="pl-10 w-full py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-slate-900 dark:text-white" placeholder="John Doe" />
                                </div>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-slate-400" />
                                </div>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="pl-10 w-full py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-slate-900 dark:text-white" placeholder="you@example.com" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                                {isLogin && <a href="#" className="text-xs text-primary font-medium hover:underline">Forgot password?</a>}
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-slate-400" />
                                </div>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="pl-10 w-full py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-slate-900 dark:text-white" placeholder="••••••••" />
                            </div>
                        </div>

                        <button type="submit" className="w-full gradient-bg text-white font-semibold rounded-xl py-3 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-[0.98]">
                            {isLogin ? 'Sign In' : 'Create Account'}
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </form>

                    <div className="mt-8 flex items-center my-6">
                        <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                        <span className="px-4 text-xs font-medium text-slate-400 bg-white dark:bg-slate-800">Or continue with</span>
                        <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button type="button" className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300 font-medium">
                            <Chrome className="h-5 w-5" />
                            Google
                        </button>
                        <button type="button" className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300 font-medium">
                            <Github className="h-5 w-5" />
                            Github
                        </button>
                    </div>

                    <p className="text-center mt-8 text-sm text-slate-500">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <Link to={isLogin ? "/signup" : "/login"} className="text-primary font-semibold hover:underline">
                            {isLogin ? 'Sign up' : 'Sign in'}
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Auth;
