import { useEffect, useState } from "react";
import api from "../api/api";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function LoginPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const response = await api.get("/auth/users");
    setUsers(response.data);
  };

  const login = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "/documents";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Select User</h1>

      {users.map((user) => (
        <div key={user.id}>
          <button onClick={() => login(user)}>
            {user.name}
          </button>
        </div>
      ))}
    </div>
  );
}