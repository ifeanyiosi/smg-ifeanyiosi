import React from "react";

const Upct = ({ headline, digits }) => {
  return (
    <div className="flex flex-col justify-center w-56 h-30 shadow-md p-6 bg-white hover:bg-violet-400 rounded-lg hover:text-slate-100">
      <h1 className="text-sm">{headline}</h1>
      <span className="text-3xl font-bold">{digits}</span>
    </div>
  );
};

export default Upct;
