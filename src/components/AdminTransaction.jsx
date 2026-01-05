import { useEffect, useState } from "react";
import { getAllTransactions } from "../services/api";
import { getUser } from "../utils/auth";

function AdminTransactions() {
  const [data, setData] = useState({});

  useEffect(() => {
    const u = getUser();
    getAllTransactions(u.username, u.password).then(setData);
  }, []);

  return (
    <div>
      <h3>All Transactions (Admin)</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default AdminTransactions;
