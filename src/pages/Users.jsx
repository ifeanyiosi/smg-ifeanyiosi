import React, { useEffect, useState } from "react";
import LayoutTwo from "../components/layoutTwo";
import Table from "../components/Table";
import ShowUser from "../components/ShowUser/ShowUser";
import useFetch from "../useFetch";
import { BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { loadedUsers } from "../Features/users";
import { Link } from "react-router-dom";
import useFullPageLoader from "../components/UseFullPageLoader";
import snake from './../assets/snake.gif'

const Users = ({ isPosts, isUsers, activeLink, setActiveLink }) => {
  const  [loader, showLoader, hideLoader] = useFullPageLoader();
 
  const {
    singleUserComment,
    singleUserPost,
    singleData: result,
    forApiCallsWithId,
  } = useFetch("https://dummyapi.io/data/v1/user");

  useEffect(() => {
    window.document.URL.includes("/Posts")
      ? setActiveLink("recent-posts")
      : setActiveLink("recent-users");
  }, [window]);

  const usersDataBase = useSelector((state) => state.user.value);
  const [displayState, setDisplayState] = useState(false);
  const tableHead = { id: "ID", title: "TITLE", name: "NAME" };

  const { userData, loading } = useFetch("https://dummyapi.io/data/v1/user");

  useEffect(() => {
    console.log(userData);
    userData && dispatch(loadedUsers(userData));
  }, [userData]);
  const dispatch = useDispatch();

  return (
    <LayoutTwo>
     
      <div className="relative flex w-[13.5rem] gap-6 mt-12 h-4 text-slate-900 font-bold">
        <Link to="/">Recent Users</Link>
        <Link to="/Posts">Recent Posts</Link>
        <div
          className={activeLink === "recent-posts" ? isPosts : isUsers}
        ></div>
      </div>
      <div className="flex items-start justify-between mt-[1rem]">
        <div className="w-[65%] max-h-[35rem] overflow-auto">
          {loading ? (
            <div className="flex items-center justify-center w-full h-full">
              <h1 className="text-slate-900 text-2xl font-bold animate-pulse">
                <img src={snake} alt="" />
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

export default Users;
