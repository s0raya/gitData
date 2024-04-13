import { configureStore } from "@reduxjs/toolkit";//configura
import userReducer from "./userSlice.js";

export default configureStore({
    reducer: {
        user: userReducer,
    },
});