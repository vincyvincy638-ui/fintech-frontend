import React, { useEffect, useState, useCallback } from "react";
import { getMyTransactions, transferMoney } from "../services/userService";

const UserDashboard = () => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  const [transactions, setTransactions] = useState([]);
  const [toUser, setToUser] = useState("");
  const [amount, setAmount] = useState("");

  const fetchTransactions = useCallback(async () => {
    const data = await getMyTransactions(username, password);
    setTransactions(data);
  }, [username, password]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const handleTransfer = async () => {
    await transferMoney(username, toUser, amount, username, password);
    alert("Transfer success");
    fetchTransactions();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>User Dashboard</h2>

      <h3>Transfer</h3>
      <input placeholder="To User" onChange={e => setToUser(e.target.value)} />
      <input type="number" placeholder="Amount" onChange={e => setAmount(e.target.value)} />
      <button onClick={handleTransfer}>Send</button>

      <h3>My Transactions</h3>
      <table border="1">
        <thead>
          <tr>
            <th>From</th><th>To</th><th>Amount</th><th>Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(t => (
            <tr key={t.id}>
              <td>{t.fromUser}</td>
              <td>{t.toUser}</td>
              <td>{t.amount}</td>
              <td>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDashboard;
