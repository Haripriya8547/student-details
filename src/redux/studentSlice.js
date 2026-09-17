import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: "studentSlice",

    initialState: {
        student: JSON.parse(localStorage.getItem("products")) || [],
        cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],

    },

    reducers: {
        addStudent: (state, action) => {
            state.student.push(action.payload);
            localStorage.setItem(
                "student",
                JSON.stringify(state.student)
            );
        },
        editStudent: (state, action) => {
            const studentIndex = state.student.findIndex(
                (student) => student.id === action.payload.id
            );

            if (studentIndex !== -1) {
                state.student[studentIndex] = action.payload;

                localStorage.setItem(
                    "student",
                    JSON.stringify(state.student)
                );
            }
        },
        deleteStudent: (state, action) => {

            state.student = state.student.filter(
                (student) => student.id !== action.payload
            );

            localStorage.setItem(
                "student",
                JSON.stringify(state.student)
            );
        },


       
    }




});

export const { addStudent, editStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;