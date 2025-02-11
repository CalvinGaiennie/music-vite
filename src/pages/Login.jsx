import { useState } from "react";
import AppNav from "../components/AppNav";

const BACKEND_URL = import.meta.env.PROD
  ? "https://music-vite.onrender.com"
  : "http://localhost:5001";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Attempting to send to database:", formData);
    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(
        data.success ? "✅ Saved to database" : "❌ Failed to save to database"
      );
    } catch (error) {
      console.log("❌ Failed to connect to server");
    }
  };

  return (
    <div className="page-container">
      <AppNav />
      <div className="page">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
