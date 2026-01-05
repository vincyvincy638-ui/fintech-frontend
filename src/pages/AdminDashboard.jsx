import React, { useEffect, useState } from "react";
import { getAdminDashboard } from "../services/userService";

const AdminDashboard = () => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({});

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const data = await getAdminDashboard(username, password);
        setTransactions(data.transactions || []);
        setSummary(data.perUserSummary || {});
      } catch (err) {
        alert(err.message);
      }
    };

    fetchAdminData();
  }, [username, password]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>

      <h3>All Transactions</h3>
      <table border="1">
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.fromUser}</td>
              <td>{t.toUser}</td>
              <td>{t.amount}</td>
              <td>{t.type}</td>
              <td>{new Date(t.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Per User Summary</h3>
      <pre>{JSON.stringify(summary, null, 2)}</pre>
    </div>
  );
};

export default AdminDashboard;
