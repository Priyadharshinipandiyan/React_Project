import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes for alternative

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Register from './components/Register';
import MyAppBar from './components/common/Navbar';

function App() {
    return (
        <Router>
            <MyAppBar />
            {/* <Header /> */}
            <Routes> {/* Use Routes as an alternative to Switch */}
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
