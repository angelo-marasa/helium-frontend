import React, { useEffect } from 'react'
import '../App.css';
import { Navigate } from 'react-router-dom';

const Logout = () => {
    useEffect(() => {
        localStorage.removeItem("logged");
        localStorage.removeItem("email");
        localStorage.removeItem("ID");
        localStorage.removeItem("name");
      }, []);
    return (
        <div className="App">
            <Navigate to="/" />
        </div>
    )
}

export default Logout
