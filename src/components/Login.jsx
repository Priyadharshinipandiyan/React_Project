import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthData } from '../services/auth/authSlice';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://reqres.in/api/login', {
                email: username,
                password: password,
            });
            dispatch(setAuthData({ token: response.data.token, username }));
            Swal.fire('Success', 'Logged in successfully', 'success');
        } catch (error) {
            Swal.fire('Error', 'Login failed', 'error');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    <br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
