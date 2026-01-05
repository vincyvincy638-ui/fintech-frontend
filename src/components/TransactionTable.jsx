import React from "react";

const TransactionTable = ({ transactions }) => {
  return (
    <table border="1" cellPadding="8" style={{ marginTop: 20, width: "100%" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Type</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t) => (
          <tr key={t.id}>
            <td>{t.id}</td>
            <td>{t.date}</td>
            <td>{t.type}</td>
            <td>₹{t.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
