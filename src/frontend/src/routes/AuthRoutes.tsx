import { ForgotPassword } from "@/pages/auth/forgotPassword/ForgotPassword";
import { Login } from "@/pages/auth/login/Login";
import { Signup } from "@/pages/auth/signup/Signup";
import { Route, Routes } from "react-router-dom";

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="*" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
    )
}