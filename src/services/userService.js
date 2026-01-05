const BASE_URL = "http://localhost:8080/api";

// LOGIN
export const loginUser = async (username, password) => {
  const res = await fetch(`${BASE_URL}/user/hello`, {
    headers: {
      Authorization: "Basic " + btoa(username + ":" + password),
    },
  });

  if (!res.ok) throw new Error("Invalid credentials");

  return {
    username,
    role: username === "admin" ? "ADMIN" : "USER",
  };
};

// GET USER TRANSACTIONS
export const getMyTransactions = async (username, password) => {
  const res = await fetch(`${BASE_URL}/transactions/my`, {
    headers: {
      Authorization: "Basic " + btoa(username + ":" + password),
    },
  });

  if (!res.ok) throw new Error("Failed to fetch transactions");

  return res.json();
};

// GET ADMIN DASHBOARD
export const getAdminDashboard = async (username, password) => {
  const res = await fetch(`${BASE_URL}/admin/all-transactions`, {
    headers: {
      Authorization: "Basic " + btoa(username + ":" + password),
    },
  });

  if (!res.ok) throw new Error("Failed to fetch admin dashboard");

  return res.json();
};

// TRANSFER MONEY
export const transferMoney = async (from, to, amount, username, password) => {
  const res = await fetch(
    `${BASE_URL}/transfer?from=${from}&to=${to}&amount=${amount}`,
    {
      method: "POST",
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password),
      },
    }
  );

  if (!res.ok) throw new Error("Transfer failed");

  return res.text();
};
