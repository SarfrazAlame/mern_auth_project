import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const currentUser = useSelector((state) => state.user);
  const token = localStorage.getItem('token')
  return token?<Outlet/>:<Navigate to='login'/>
};

export default PrivateRoute;
