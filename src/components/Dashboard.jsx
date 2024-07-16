import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../services/user/userSlice';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Login.css';

const Dashboard = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get('https://reqres.in/api/users/2');
                dispatch(setUserDetails(response.data.data));
                Swal.fire('Success', 'User details fetched', 'success');
            } catch (error) {
                Swal.fire('Error', 'Failed to fetch user details', 'error');
            }
        };

        if (auth.token) {
            fetchUserDetails();
        }
    }, [auth.token, dispatch]);

    if (!auth.token) {
        return (
        <div className="login-container">
            <div className="login-box">
                <p>Please log in first</p>
            </div>
        </div>
        );
    }

    return (
        <div>
            <div className="login-container">
                <div className="login-box">
                    <h1>Dashboard</h1>
                    {user.details && (
                        <div>
                            <img src={user.details.avatar} className="img" alt="user" />
                            <p>Name: {user.details.first_name} {user.details.last_name}</p>
                            <p>Email: {user.details.email}</p>
                        </div>
                    )}
                    <p>Username: {auth.username}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
