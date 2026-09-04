import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./assets/components/Header";

import Assignment from "./assets/components/Assignment";
import Marks from "./assets/components/Mark";
import Attendance from "./assets/components/Attendence";
import Dashboard from "./assets/components/Dashboard";
import Footer from "./assets/components/Footer";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Register from "./pages/Register";

function App() {





  return (
    <BrowserRouter>

      <Header />
      <ToastContainer position="top-center" autoClose={1500} />
      <Routes >
        <Route path="/" element={<Dashboard />} />

        <Route path="/assignments" element={<Assignment />} />
        <Route path="/marks" element={<Marks />} />
        <Route path="/attendence" element={<Attendance />} />
        <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Register />} />


      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;