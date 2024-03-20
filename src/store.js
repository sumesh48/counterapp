import { configureStore } from "@reduxjs/toolkit";
import counerSlice from "./redux/counerSlice";

export const store = configureStore({

/* reducer is perdefind key which is an object that can hold more than one reducer as key value paires   */
    reducer:{
        counter:counerSlice
    }
})