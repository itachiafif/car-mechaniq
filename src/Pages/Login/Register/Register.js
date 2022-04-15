import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.value.name;
        const email = event.target.value.email;
        const password = event.target.value.password;
    }
    return (
        <div className="register-from">
            <h2 className="text-center text-primary">Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder="Your name" />
                <input type="email" name="email" id="" placeholder="Your email" required />
                <input type="password" name="password" id="" placeholder="password" />
                <input className="" type="button" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" onClick={navigateLogin} className="text-danger text-decoration-none">Please Login</Link></p>
        </div>
    );
};

export default Register;