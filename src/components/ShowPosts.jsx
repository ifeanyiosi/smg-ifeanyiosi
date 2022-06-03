import React from "react";
import { FcLike } from "react-icons/fc";

const ShowPosts = ({ singlePost }) => {

  if (singlePost)
    return (
      <div className="flex flex-col justify-center p-4 w-[22rem] max-h-[40rem] rounded-lg shadow-lg overflow-hidden">
        <img
          className="w-full h-36 object-cover rounded-xl"
          src={singlePost[0].image}
          alt="...Loading animal image"
        />
        <h1 className="text-slate-700 text-md capitalize mt-4">
          {singlePost[0].text}
        </h1>
        <span className="flex gap-2 items-center mt-2 text-red-500">
          <FcLike /> {singlePost[0].likes} Likes
        </span>
        <div className="flex flex-col mt-4">
          <h1 className="text-slate-400 uppercase font-bold">tags</h1>
          <div className="flex mt-2 gap-2">
            {singlePost[0].tags.map((tag) => {
              return (
                <span
                  key={tag}
                  className="border-2 border-blue-400 uppercase text-sm rounded-xl px-2 py-1 flex items-center"
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <div className="mt-4">
            <h1 className="text-slate-700 uppercase">owner</h1>
            <div className="flex items-center mt-2 gap-1">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={singlePost[0].owner.picture}
                alt=""
              />
              <h1 className="text-sm">
                {singlePost[0].owner.firstName} {singlePost[0].owner.lastName}
              </h1>
            </div>

            <h1 className="text-slate-400 uppercase mt-4 font-bold">
              full name
            </h1>
            <p className="capitalize">
              {singlePost[0].owner.title}. {singlePost[0].owner.firstName}{" "}
              {singlePost[0].owner.lastName}
            </p>

            <h1 className="text-slate-400 uppercase mt-4 font-bold">
              Email Address
            </h1>
            <p>{singlePost[0].owner.email || "No Email Found"}</p>

            <h1 className="text-slate-400 uppercase mt-4 font-bold">Phone</h1>
            <p>{singlePost[0].owner.phone || "No Phone Found"}</p>
          </div>
        </div>
      </div>
    );
};

export default ShowPosts;
