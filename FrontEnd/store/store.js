import { configureStore } from "@reduxjs/toolkit";
import hoursManagementReducer from "./Reducers/hoursManagementReducer";


export const store = configureStore({
    reducer:{
        hoursManagementReducer
    }
})