export function login(username, password) {
  localStorage.setItem("user", JSON.stringify({ username, password }));
}

export function logout() {
  localStorage.removeItem("user");
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}
