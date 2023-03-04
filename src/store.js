import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./redux/slice/counterSlice";
export default configureStore({
    reducer:{
        counter: counterSlice
    }
})