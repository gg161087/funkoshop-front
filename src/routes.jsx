import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/home/home.jsx';
import { AuthCheck } from './service/AuthCheck.jsx';

export const AppRoutes = () => {
    return (
        <Routes>
             <AuthCheck element={Home}></AuthCheck>          
        </Routes>
    );
};