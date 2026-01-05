import UserTransactions from "./UserTransactions";
import AdminTransactions from "./AdminTransactions";
import { getUser } from "../utils/auth";

function Dashboard() {
  const user = getUser();

  if (user.username === "admin") {
    return <AdminTransactions />;
  }
  return <UserTransactions />;
}

export default Dashboard;
