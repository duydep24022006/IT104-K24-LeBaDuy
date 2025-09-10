import React from 'react'
import { Navigate } from 'react-router-dom';
interface PrivateRouteProps {
  element: React.ReactNode;
}

export default function PrivateRouter({ element }: PrivateRouteProps) {
    const isLogin = true;
    if (!isLogin) {
        return <Navigate to='/login' replace/>
    }
    return <div>{element}</div>;
}
