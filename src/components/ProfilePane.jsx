import React from "react";
import { FaRegBell } from "react-icons/fa";
import ProfilePicture from "../assets/ifeanyi.jpg";

const ProfilePane = () => {
  return (
    <div className="flex items-center justify-between h-16 w-full bg-white shadow-md px-8">
      <h1 className="text-slate-900 text-xl">Dashboard</h1>
      <div className="flex items-center gap-6">
        <FaRegBell />
        <img
          className="w-9 h-9 rounded-full object-cover border-2 border-slate-800 border-solid"
          src={ProfilePicture}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProfilePane;
