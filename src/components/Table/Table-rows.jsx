import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";

const TableRows = ({ handleOnePost, handleId, data, setDisplayState }) => {
  //   You may find me using the Ampersand (&&) symbol all around my code and that is because some of the codes run before the information is available and that throws errors in the console. the Ampersand makes the codes run only when the data required is made available.

  // State that determines when the box select color would change based on its boolean value
  const [color, setColor] = useState(false);

  // State that determines when the delete button would show based on its boolean value
  const [showDel, setShowDel] = useState(false);

  // function to toggle the box selection
  const handleColor = () => {
    setColor(!color);
  };

  // function to toggle the delete button
  const handleShowDel = (e) => {
    setShowDel(!showDel);
  };

  // Class to show the delete button when you click on the tripple dots
  const deleteBtn =
    "flex items-center h-[50%] translate-y-[-50%] top-[50%] justify-center absolute w-12 right-6 top-0 bottom-0 shadow-lg bg-slate-100 hover:shadow-xl";

  // Class to toggle the state of the id select boxes
  const inActiveClass =
    "border border-solid border-slate-500 h-4 w-4 cursor-pointer";
  const activeClass =
    "bg-violet-400 border border-solid border-slate-500 h-4 w-4 cursor-pointer";

  return (
    <tr
      onClick={() => {
        handleId && handleId(data.id); //Function for the request of a singleUser information
        handleOnePost && handleOnePost(data.id); //Function for the request of a singlePost information
        setTimeout(() => {
          setDisplayState(true);
        }, 1000);
      }}
      className="bg-white shadow-md border-b-8 border-solid border-slate-100 hover:bg-slate-100"
    >
      <td className="py-4  pl-6">
        <div className="flex items-center gap-2">
          <div
            onClick={() => {
              handleColor();
            }}
            className={!color ? inActiveClass : activeClass}
          ></div>
          {data.id.substr(0, 8) + "..."}
        </div>
      </td>

      {/* To conditionally display the title or the owner title if we are on the recent users page or recent post page */}
      {!document.URL.includes("/Admin-page") && (
        <td className="py-4 capitalize">{data.title || data.owner.title}.</td>
      )}

      {/* To conditionally display the title of a post if we are on the Admin page */}
      {document.URL.includes("/Admin-page") && (
        <td className="py-4 capitalize w-60 pr-4">
          {data.text.length > 20 ? data.text.substr(0, 20) + " ..." : data.text}
        </td>
      )}
      <td className="py-4">
        <div className="flex items-center gap-1">
          {data?.picture || data?.owner?.picture ? (
            <img
              className="h-12 w-12 rounded-full object-cover shadow-md "
              src={data?.picture || data?.owner?.picture}
              alt="Test"
            />
          ) : (
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-violet-400 object-cover shadow-md ">
              <h1 className="text-white font-bold text-xl">
                {data.lastName.substr(0, 1)}
              </h1>
            </div>
          )}
          <div className="flex flex-col">
            <h1 className="text-violet-400">
              {/* To conditionally display the firstname based on whether we are on the user page or the post page */}
              {data.firstName || data.owner.firstName}{" "}
              {data.lastName || data.owner.lastName}
            </h1>
          </div>
        </div>
      </td>

      {/* To conditionally display likes information when we are on the admin page */}
      {document.URL.includes("/Admin-page") && data.likes && (
        <td className="w-32">
          <div className="flex items-center gap-2">
            <AiOutlineLike /> {data.likes}
          </div>
        </td>
      )}

      {/* To display publish date if it is available, and that is when we are on the post page */}
      {data.publishDate && <td>{data.publishDate.split("T")[0]}</td>}
      <td className="py-4 relative">
        <BiDotsVerticalRounded
          onClick={handleShowDel}
          className="cursor-pointer"
        />
        <div className={!showDel ? "hidden" : deleteBtn}>
          <FaTrash className="cursor-pointer" />
        </div>
      </td>
    </tr>
  );
};

export default TableRows;
