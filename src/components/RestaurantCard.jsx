import { Star, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
    return (
        <Link to={`/restaurant/${restaurant.id}`}>
            <motion.div
                whileHover={{ scale: 0.98 }}
                className="group relative flex flex-col gap-2 cursor-pointer"
            >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Default Dark Gradient at bottom of image for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                        <h3 className="text-xl font-bold truncate tracking-tight shadow-sm drop-shadow-md">
                            {restaurant.name}
                        </h3>
                        <p className="text-sm font-semibold opacity-90 drop-shadow-md">
                            {restaurant.priceForTwo}
                        </p>
                    </div>

                    {restaurant.promoted && (
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-slate-800 tracking-wider">
                            PROMOTED
                        </div>
                    )}
                </div>

                <div className="px-1 flex flex-col gap-1 mt-1">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-100">
                        <div className="flex items-center gap-1 bg-green-600 text-white px-1.5 py-0.5 rounded text-xs shadow-sm">
                            <Star className="w-3 h-3 fill-white" />
                            <span>{restaurant.rating}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                        <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-semibold text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{restaurant.deliveryTime}</span>
                        </div>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {restaurant.categories.join(', ')}
                    </p>
                </div>
            </motion.div>
        </Link>
    );
};

export default RestaurantCard;
