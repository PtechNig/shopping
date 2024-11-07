import { createSlice } from "@reduxjs/toolkit";
import { PiCornersOutLight } from "react-icons/pi";

// Define the initial state
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
            console.log("Payload received:", action.payload);
            // const newItem = action.payload;
        
            const existingItem = state.items.findIndex(item => item.name === action.payload.name);
        
            if(existingItem >= 0){
                state.items[existingItem].quantity ++
            }

            else {
                state.items.push({...action.payload, quantity: 1 });
                state.totalQuantity += 1;
            }
            
            state.totalAmount += action.payload.price; // Increment totalAmount by the item's price

        },
        
        
        removeFromCart(state, action) {
            console.log("Cart Removed:", action.payload);

            const existingItem = state.items.findIndex(item => item.id === action.payload.id)

            if(existingItem >= 0){
                const item = state.items[existingItem]

                if(item.quantity > 1) {
                    state.items[existingItem].quantity --
                    state.totalAmount -= state.items[existingItem].price
                }

                else {
                    state.totalAmount -= item.price;
                    state.items.splice(existingItem, 1);
                    state.totalQuantity -= 1;
                }
            }  

        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
