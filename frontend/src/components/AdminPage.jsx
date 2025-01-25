import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminPage = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("authToken");

    useEffect(() => {
        const verifyAdmin = async () => {
            try {
                const res = await axios.get("/api/auth/verify", {
                    headers: { Authorization: token },
                });

                if (!res.data.isAdmin) {
                    navigate("/"); // Redirect if not admin
                }
            } catch (err) {
                navigate("/"); // Redirect on error
            }
        };

        verifyAdmin();
    }, [navigate, token]);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome, Admin! You can add new products here.</p>
            {/* Include Product Form Here */}
        </div>
    );
};

export default AdminPage;
