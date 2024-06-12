import { Chat } from "@/pages/app/chat/Chat";
import { Dashboard } from "@/pages/app/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="*" element={<Chat />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}
