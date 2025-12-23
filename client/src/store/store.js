import { configureStore } from "@reduxjs/toolkit";
import monumentsReducer from "./slices/monumentsSlice"

export const store = configureStore({
    reducer: {
        monumentsState:monumentsReducer
    }
})