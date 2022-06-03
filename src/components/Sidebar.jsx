import React from "react";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { HiDocumentSearch } from "react-icons/hi";
import Ifeanyi from "../assets/ifeanyi.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    
    <div className="relative z-50 h-[100%] w-80 flex flex-col space-y-12 p-6 bg-purple-400">
     
      <div className="flex space-x-2 items-center mb-12">
        <div className="h-16 w-16 bg-slate-400 rounded-full overflow-hidden">
          <img
            src={Ifeanyi}
            alt="Ifeanyi"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-slate-100 text-xl">User Groove</h1>
          <p className="text-slate-300 text-xs">By Ifeanyi Osi-Okeke</p>
        </div>
      </div>

      {/* The Dashborad Navigations */}
      <div className="flex flex-col space-y-1 text-slate-100">
        <Link
          to="/"
          className="hover:bg-violet-300 flex items-center p-3 gap-4"
        >
          <AiFillHome className="text-xl" />
          Home
        </Link>
        <Link
          to="/"
          className="hover:bg-violet-300 flex items-center p-3 gap-4"
        >
          <MdSpaceDashboard className="text-xl" />
          Dashboard
        </Link>
        <Link
          to="/Admin-page"
          className="hover:bg-violet-300 flex items-center p-3 gap-4"
        >
          <HiDocumentSearch className="text-xl" />
          Search Post
        </Link>
        <Link
          to="/Created-Users"
          className="hover:bg-violet-300 flex items-center p-3 gap-4"
        >
          <FaUser className="text-xl" />
          Created Users
        </Link>
        <Link
          to="/Add-user"
          className="hover:bg-violet-300 flex items-center p-3 gap-4"
        >
          <FaUserPlus className="text-xl" />
          Add User
        </Link>
      </div>

      

      
    </div>
  );
};

export default Sidebar;
