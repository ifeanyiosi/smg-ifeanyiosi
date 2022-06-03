import React from "react";

const UserDetail = ({ header, information }) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-slate-400 font-semibold text-[0.7rem] uppercase">
        {header}
      </h4>
      <h4 className="text-slate-900 text-sm capitalize">{information}</h4>
    </div>
  );
};

export default UserDetail;
