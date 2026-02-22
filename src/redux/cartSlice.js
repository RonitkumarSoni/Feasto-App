import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            state.totalQuantity++;
            state.totalAmount += newItem.price;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image,
                    veg: newItem.veg
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
            toast.success(`${newItem.name} added to cart!`, { autoClose: 1500 });
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                state.totalQuantity--;
                state.totalAmount -= existingItem.price;

                if (existingItem.quantity === 1) {
                    state.items = state.items.filter(item => item.id !== id);
                } else {
                    existingItem.quantity--;
                    existingItem.totalPrice -= existingItem.price;
                }
            }
        },
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
            toast.info('Cart cleared', { autoClose: 1500 });
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
