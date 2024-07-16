import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Logout } from '@mui/icons-material';

const MyAppBar = () => {
    return (
        <AppBar position="static" color='warning'>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    MyApp
                </Typography>
                <Button color="inherit" component={Link} to="/login">Login</Button>
                <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
                <Button color="inherit" component={Link} to="/register">Register</Button>
                <IconButton edge="start" color="inherit" component={Link} to="/login" aria-label="menu" sx={{ ml: 2 }}>
                    <Logout />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default MyAppBar;
