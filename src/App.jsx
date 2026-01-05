import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import PortfolioDashboard from "./components/PortfolioDashboard";

// Week 4 imports
import AuditPage from "./pages/AuditPage";
import StatementPage from "./pages/StatementPage";

// future use
// import TransactionDashboard from "./components/TransactionDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboards */}
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Week 3 – Portfolio */}
        <Route path="/portfolio" element={<PortfolioDashboard />} />

        {/* Week 4 – Audit & Compliance */}
        <Route path="/audit" element={<AuditPage />} />
        <Route path="/statement" element={<StatementPage />} />

        {/* Future */}
        {/* <Route path="/transactions" element={<TransactionDashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
