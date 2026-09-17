import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import studentReducer from "./studentSlice";

const store = configureStore({
    reducer: {
        userState: userReducer,
        studentState: studentReducer
    }
});

export default store;