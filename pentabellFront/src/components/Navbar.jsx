import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/features/userSlice";

const Navbar = () => {
  const user = useSelector((state) => state?.user?.currentUser);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-transparent p-7">
      <div className="text-5xl text-[#FFAA33] font-bold itlaic">
        <Link to="/">Pentabell</Link>
      </div>
      {
        user?.email ? (<div className="space-x-9">
        <button className="p-3 rounded-lg border-black border-2 w-32 hover:bg-[#330000]">
          <h1 className="text-white text-lg">
            <Link to="/account">Account</Link>
          </h1>
        </button>
        <button className="p-3 rounded-lg border-black border-2 w-32 hover:bg-[#330000] text-white text-lg" onClick={ () => dispatch(logout())}>
            LOGOUT
        </button>
      </div>) : (
        <div className="space-x-9">
        <button className="p-3 rounded-lg border-black border-2 w-32 hover:bg-[#330000]">
          <h1 className="text-white text-lg">             
            <Link to="/login">LOGIN</Link>
          </h1>
        </button>
        <button className="p-3 rounded-lg border-black border-2 w-32 hover:bg-[#330000]">
          <h1 className="text-white text-lg">
            <Link to="/register">REGISTER</Link>
          </h1>
        </button>
      </div>
      )
      }
    </div>
  );
};

export default Navbar;
