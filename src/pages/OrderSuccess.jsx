import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShoppingBag, Receipt } from 'lucide-react';

const OrderSuccess = () => {
    // Generate a random order ID
    const orderId = `ORD-${Math.floor(Math.random() * 1000000)}`;

    useEffect(() => {
        // Scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="max-w-md w-full bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden p-8 text-center"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                    className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                    <CheckCircle2 className="w-14 h-14 text-green-500" />
                </motion.div>

                <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-2 tracking-tight">
                    Order Placed!
                </h2>
                <p className="text-slate-500 mb-6">
                    Thank you for your order. We've received it and the restaurant is preparing your food.
                </p>

                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-4 mb-8 text-left border border-slate-100 dark:border-slate-700">
                    <div className="flex justify-between mb-3 text-sm">
                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1"><Receipt className="w-4 h-4" /> Order ID</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{orderId}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1"><ShoppingBag className="w-4 h-4" /> Estimated Time</span>
                        <span className="font-bold text-green-600">35 mins</span>
                    </div>
                </div>

                <Link to="/home">
                    <button className="gradient-bg text-white font-bold w-full py-4 rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-[0.98]">
                        CONTINUE BROWSING
                    </button>
                </Link>
            </motion.div>
        </div>
    );
};

export default OrderSuccess;
