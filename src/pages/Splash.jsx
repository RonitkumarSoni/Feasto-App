import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Auto redirect to Home after 2.5 seconds
        const timer = setTimeout(() => {
            navigate('/home');
        }, 2500);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="h-screen w-full gradient-bg flex flex-col items-center justify-center relative overflow-hidden">

            {/* Background Animated Circles */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-white/5 blur-[80px]"
            />
            <motion.div
                animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-200/5 blur-[100px]"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center z-10"
            >
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-6 flex flex-col items-center"
                >
                    {/* Fallback to text if image is missing, otherwise nicely animated */}
                    <div className="relative mb-4 bg-white p-4 rounded-3xl shadow-2xl">
                        <img src="/logo.png" alt="Feasto Logo" className="h-24 w-24 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                        <span className="absolute -bottom-4 bg-white/90 text-primary-dark font-bold text-3xl px-6 py-1 rounded-full shadow-lg block text-center" style={{ display: 'none' }} id="logo-fallback">Feasto</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
                        Feasto
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl font-medium tracking-wide">
                        Delivering Happiness, One Bite at a Time
                    </p>
                </motion.div>
            </motion.div>

        </div>
    );
};

export default Splash;
