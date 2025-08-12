import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import POS from "./components/layout/Pos";
import Login from "./pages/Login";
import Reports from "./pages/Reports"; // import your Reports page

function DashboardLayout() {
  return (
    // Make this fill the App's available height
    <div className="flex h-full">
      <Sidebar />
      {/* Main is the scrolling container */}
      <main className="flex-1 bg-gray-50 overflow-y-auto">
        <div className="min-h-full">
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/pos" element={<POS />} />
            <Route path="/inventory" element={<h1>Inventory Page</h1>} />
            <Route path="/reports" element={<Reports />} />
            <Route path="*" element={<div className="p-6">Page Not Found</div>} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    // App root provides the overall screen height
    <div className="flex flex-col h-screen">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<DashboardLayout />} />
      </Routes>
    </div>
  );
}
