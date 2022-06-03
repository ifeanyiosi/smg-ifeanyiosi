import React from "react";

const Tags = ({ string, number }) => {
  return (
    <div className="flex items-center justify-between w-[15rem] h-12 px-4 border border-solid rounded-lg bg-gray-300 text-slate-700 hover:bg-transparent hover:border-violet-400 hover:text-violet-400">
      <span>{string}</span>
      <span>{number}</span>
    </div>
  );
};

export default Tags;
