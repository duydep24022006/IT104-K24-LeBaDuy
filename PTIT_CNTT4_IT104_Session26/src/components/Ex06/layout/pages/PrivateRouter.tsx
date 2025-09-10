import React from 'react'
import { Navigate} from 'react-router-dom';
interface PrivateRouteProps {
  element: React.ReactNode;
}

export default function PrivateRouter({ element }: PrivateRouteProps) {
  const isLogin = localStorage.getItem("isLogin");
  if (isLogin !== "true") {
    return <Navigate to="/login" replace />;
  }

  return <>{element}</>;
}
