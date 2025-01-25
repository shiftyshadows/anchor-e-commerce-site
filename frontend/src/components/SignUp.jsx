import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("/api/auth/signup", { email, password });
            const { isAdmin } = res.data;

            if (isAdmin) {
                alert("You are the first user and have been granted admin access.");
                navigate("/admin");
            } else {
                alert("Signup successful. Welcome!");
                navigate("/user-dashboard");
            }
        } catch (err) {
            setError("Signup failed. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <h1>Signup</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Signup</button>
        </form>
    );
};

export default Signup;
