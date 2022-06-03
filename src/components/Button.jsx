import React from "react";

const Button = ({ nVal, paginate }) => {
  return (
    <button
      onClick={() => paginate(nVal)}
      className="flex items-center justify-center border border-slate-400 rounded-md py-1 px-2 w-max-content text-violet-400 text-sm hover:bg-violet-400 hover:text-white"
    >
      {nVal}
    </button>
  );
};

export default Button;
