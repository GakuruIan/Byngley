import {createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0
    },
    reducers:{
        addProducts:(state,action)=>{
            state.quantity+=1
            state.products.push(action.payload)
            state.total = action.payload.price * action.payload.quantity;
        },
        clearCart:(state)=>{
            state.products= [],
            state.quantity = 0
            state.total = 0
        },
        removeProduct:(state,action)=>{
            const index = state.products.findIndex((product)=>product._id === action.payload);

            if(index !== -1){
                state.products.splice(index,1)
                state.quantity === 1 ? state.quantity = 0 : state.quantity -=1 

                if(state.products.length > 0){
                    state.total = state.products.reduce((total,product)=>{
                        total = product.price * product.quantity
                    })
                }
                else{
                    state.total = 0
                }
                
            }
        },
        addQuantity:(state,action)=>{
            const index = state.products.findIndex((product)=>product._id === action.payload);

            if(index !== -1){
                state.products[index].quantity += 1
                state.quantity +=1

                state.total = state.products.reduce(
                    (total, product) => total + product.price * product.quantity,
                    0
                  );
            }
        },
        reduceQuantity:(state,action)=>{
            const index = state.products.findIndex((product)=>product._id === action.payload)

            if(index !== -1){
                 // check if the quantity is equal to one remove product
                if(state.products[index].quantity === 1){
                    state.products.splice(index,1)
                    
                    state.quantity === 1 ? state.quantity = 0 : state.quantity  -=1
                }
                else{
                    state.products[index].quantity -= 1
                }

               
            state.total = state.products.reduce(
                (total, product) => total + product.price * product.quantity,
                0
              );
            }
        }
    }
})

export const {addProducts,clearCart,removeProduct,addQuantity,reduceQuantity} = cartSlice.actions

export default cartSlice.reducer