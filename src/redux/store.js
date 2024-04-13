import { configureStore } from "@reduxjs/toolkit";//configura el store
import userReducer from "./userSlice.js";//importa el use Reducer desde otro documento

//exporto el Store y defino el reducer como userReducer
export default configureStore({
    reducer: {
        user: userReducer,
    },
});