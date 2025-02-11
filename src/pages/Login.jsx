import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppNav from "../components/AppNav";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="page-container">
      <AppNav />
      <div className="page">
        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
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
