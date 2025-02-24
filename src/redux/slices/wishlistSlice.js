import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'Wishlist',
    initialState:[],
    reducers:{
        addToWishlist : (state, action)=>{
            state.push(action.payload)
        },
        removeItem : (state, action)=>{
           return state.filter((item)=>item.id != action.payload)
        }
    }
})

export const {addToWishlist, removeItem}=wishlistSlice.actions
export default wishlistSlice.reducer