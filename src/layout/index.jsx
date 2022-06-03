import React from "react";
import ProfilePane from "../components/ProfilePane";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex mx-auto w-[90rem] overflow-hidden bg-gray-50">
      <div className="h-[90%]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
        <div className="left-0">
          <ProfilePane />
        </div>
        <div className="w-full mt-12 p-6 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
