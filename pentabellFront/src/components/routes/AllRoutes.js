import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home.jsx";
import Account from "../../pages/Account";
import Signin from "../../pages/Signin";
import Signup from "../../pages/Signup";
import ProtectedRoutes from "./ProtectedRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Route>

      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Signin />} />
    </Routes>
  );
};

export default AllRoutes;
