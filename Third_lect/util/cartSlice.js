import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (initialState, action) => {
            initialState.items.push(action.payload);
            console.log("action",action);
        },
        removeItems: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length = 0; // []
        },
    }
});

export const{addItems, removeItems, clearCart} = cartSlice.actions;
export default cartSlice.reducer;