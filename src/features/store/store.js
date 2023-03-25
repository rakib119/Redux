import { configureStore } from "@reduxjs/toolkit"; 
import bookingSlice from "../slice/bookingSlice";

const store  = configureStore({
    reducer: {
        bookingList : bookingSlice
    }
});
export default store; 