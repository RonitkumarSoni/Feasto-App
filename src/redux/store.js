import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import dataReducer from './dataSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        data: dataReducer,
    },
});
