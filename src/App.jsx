import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./assets/components/Header";

import Assignment from "./assets/components/Assignment";
import Marks from "./assets/components/Mark";
import Attendance from "./assets/components/Attendence";
import Dashboard from "./assets/components/Dashboard";
import Footer from "./assets/components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";

import AddStudentDetails from "./pages/AddStudentDetails";
import ListStudentDetails from "./pages/ListStudentDetails";
import EditStudentDetails from "./pages/EditStudentDetails";

import { ToastContainer } from "react-toastify";
import Auth from "./assets/components/Auth";
import ListUsers from "./pages/ListUsers";
import Unauthorized from "./assets/components/unAuthorized";

function App() {

    return (

        <BrowserRouter>

            <Header />

            <ToastContainer
                position="top-center"
                autoClose={1500}
            />

            <Routes>

                <Route
                    path="/"
                    element={<Dashboard />}
                />

                <Route
                    path="/assignments"
                    element={<Assignment />}
                />

                <Route
                    path="/marks"
                    element={<Marks />}
                />

                <Route
                    path="/attendence"
                    element={<Attendance />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />


                <Route
                    path="/unauthorized"
                    element={
                        <Auth>
                            <Unauthorized />
                        </Auth>
                    }
                />

                <Route
                    path="/admin/student-details"
                    element={
                        <Auth requiredRole={["admin", "seller", "user"]}>

                            <AddStudentDetails />
                        </Auth>

                    }
                />



                <Route
                    path="/admin/list-details"
                    element={
                        <Auth requiredRole={["admin", "seller", "user"]}>

                            <ListStudentDetails />
                        </Auth>
                    }
                />



                <Route
                    path="/admin/edit-student/:id"
                    element={<EditStudentDetails />}
                />

                <Route
                    path="/admin/list-users"
                    element={
                        <Auth
                            requiredRole={["admin"]}
                        >
                            <ListUsers />
                        </Auth>
                    }
                />

            </Routes>

            <Footer />

        </BrowserRouter>
    );
}

export default App;