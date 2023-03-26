import { createSlice } from "@reduxjs/toolkit";

export const bookingSlice = createSlice({
    name:'Booking',
    initialState:{ 
        booking: localStorage.getItem('bookingList') ? JSON.parse(localStorage.getItem('bookingList')) : null,
    },
    reducers:{
        bookingList: (state,action)=>{
            state.booking = action.payload
        },
    }
});
export const {bookingList} = bookingSlice.actions;
export default bookingSlice.reducer;