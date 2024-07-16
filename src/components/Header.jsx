import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory
import { useDispatch } from 'react-redux';
import { logout } from '../services/auth/authSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // useNavigate instead of useHistory

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login'); // navigate instead of history.push
    };

    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Profile</Link>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </header>
    );
};

export default Header;
