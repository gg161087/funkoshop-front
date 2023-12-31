import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import { AuthProvider } from './routes/auth/AuthProvider.jsx';
import { Login } from './routes/auth/Login/index.jsx';
import { ProtectedRoute } from './routes/auth/ProtectedRoute.jsx';
import { Home } from './routes/Home/index.jsx';
import { Shop } from './routes/shop/Shop/index.jsx';
import { Register } from './routes/auth/Register/index';

const router = createBrowserRouter([
    {
        path:"/",
        element: <Login/>,
    },
    {
        path:"/register",
        element: <Register/>,
    },
    {
        path:"/",
        element: <ProtectedRoute />,
        children: [
            {
                path:'/home',
                element: <Home/>,
            },
            {
                path:"/shop",
                element: <Shop/>,
            },
        ]
    },
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>   
        {/* <Header></Header>
        <Hero></Hero>
        <Main></Main>
        <Footer></Footer> */}

    </React.StrictMode>,
)
