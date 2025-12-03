import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./forms/Login";
import Register from "./forms/Register";
import Footer from "./components/Footer";
import ForgetPassword from "./forms/ForgetPassword";
import ChangePassword from "./forms/ChangePassword";
import Dashboard from "./userPanel/Dashboard";
import Profile from "./userPanel/Profile";
import PartnerProgram from "./userPanel/PartnerProgram";
import Home from "./mainpages/Home";
import ProtectedRoute from "./redux/ProtectedRoute";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/home" element={<Home />} />

      
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/partner" element={<PartnerProgram />} />
        </Route>

        <Route
          path="*"
          element={
            <h1 style={{ color: "white", textAlign: "center" }}>
              404 - Page Not Found
            </h1>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


