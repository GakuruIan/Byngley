import {createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        product:[],
        quantity:0,
        total:0
    },
    reducers:{
        addProducts:(state,action)=>{
            state.quantity+=1
            state.product.push(action.payload)
            state.total = action.payload.price * action.payload.quantity;
        }
    }
})

export const {addProducts} = cartSlice.actions

export default cartSlice.reducer