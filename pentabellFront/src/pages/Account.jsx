import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {resetPassword} from "../api/user";
import {logout} from "../redux/features/userSlice";

const Account = () => {
  const user = useSelector((state) => state?.user?.currentUser);
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const resetHandler = () => {
    resetPassword({oldPassword, newPassword, confirmNewPassword}, dispatch);
    dispatch(logout())
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="text-white text-3xl font-bold">
          Hello {user?.lastName} {user?.firstName}
        </h1>
        <p className="text-black font-bold text-center text-xl mt-3">
          Welcome to your Personnal Account
        </p>
      </div>

      <div className="bg-white rounded-xl my-10 w-full">
        <h1 className="text-center text-xl font-semibold my-5">Reset Your Password</h1>
        <input className="w-[90%] p-3 m-3 border-black border-b-2" placeholder="Enter Your Old Password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}/>
        <input className="w-[90%] p-3 m-3 border-black border-b-2" placeholder="Enter Your New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
        <input className="w-[90%] p-3 m-3 border-black border-b-2" placeholder="Confirm Your New Password" vlaue={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)}/>
        <div className="flex items-center justify-center">
        <button className="p-3 m-3 rounded-xl bg-[#FFAA33] w-[30%] text-white text-2xl hover:bg-[#8b5203]" onClick={resetHandler}>Reset Password</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
