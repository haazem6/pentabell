import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";


const ProtectedRoutes = () => {
  const user = useSelector((state) => state?.user?.currentUser);

  const location = useLocation();

  if (user) {
    return  <Outlet />;
  } else {
    return <Navigate to="/login" replace state={{from: location}} />;
  }
};

export default ProtectedRoutes;
