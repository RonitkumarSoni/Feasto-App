import { motion } from 'framer-motion';

const CategorySlider = ({ categories }) => {
    return (
        <div className="w-full py-6">
            <div className="flex justify-between items-center mb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">
                    What's on your mind?
                </h2>
            </div>

            {/* Scrollable Container */}
            <div className="w-full overflow-x-auto hide-scrollbar pb-4">
                <div className="flex gap-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-max">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex flex-col items-center gap-3 cursor-pointer group"
                        >
                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-sm group-hover:shadow-md transition-all border-4 border-transparent group-hover:border-primary/20">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <span className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors">
                                {category.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategorySlider;
