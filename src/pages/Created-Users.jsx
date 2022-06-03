import React, { useEffect, useState } from "react";
import LayoutTwo from "../components/layoutTwo";
import Table from "../components/Table";
import ShowUser from "../components/ShowUser/ShowUser";
import useFetch from "../useFetch";
import { BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { loadedUsers } from "../Features/users";
import { Link } from "react-router-dom";

const ViewCreatedUsers = () => {
  
  const {
    singleUserComment,
    singleUserPost,
    singleData: result,
    forApiCallsWithId,
  } = useFetch("https://dummyapi.io/data/v1/user");

  const usersDataBase = useSelector((state) => state.user.value);
  const [displayState, setDisplayState] = useState(false);
  const tableHead = { id: "ID", title: "TITLE", name: "NAME" };

  const { userData, loading } = useFetch(
    "https://dummyapi.io/data/v1/user?created=1"
  );

  useEffect(() => {
    console.log(userData);
    userData && dispatch(loadedUsers(userData));
  }, [userData]);
  const dispatch = useDispatch();

  return (
    <LayoutTwo>
      <div className="flex items-start justify-between mt-[3rem]">
        <div className="w-[65%] max-h-[35rem] overflow-auto">
          {loading ? (
            <div className="flex items-center justify-center w-full h-full">
              <h1 className="text-slate-900 text-2xl font-bold animate-pulse">
                Loading...
              </h1>
            </div>
          ) : (
            <Table
              handleId={forApiCallsWithId}
              setDisplayState={setDisplayState}
              dataBase={usersDataBase}
              tableHead={tableHead}
            />
          )}
        </div>
        <div>
          {!displayState ? (
            <div className="flex flex-col items-center justify-center w-[22rem] h-[35rem] rounded-lg shadow-lg overflow-hidden">
              <BiUser className="text-8xl stroke-0" />
              <p className="text-sm">
                View a selected user's full details here
              </p>
            </div>
          ) : (
            <ShowUser
              singleUser={result}
              singleUserPost={singleUserPost}
              singleUserComment={singleUserComment}
              setDisplayState={setDisplayState}
            />
          )}
        </div>
      </div>
    </LayoutTwo>
  );
};

export default ViewCreatedUsers;
