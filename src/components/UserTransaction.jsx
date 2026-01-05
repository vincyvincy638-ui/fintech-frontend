import { useEffect, useState } from "react";
import { getMyTransactions } from "../services/api";
import { getUser } from "../utils/auth";

function UserTransactions() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const u = getUser();
    getMyTransactions(u.username, u.password).then(setData);
  }, []);

  return (
    <div>
      <h3>My Transactions</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default UserTransactions;
