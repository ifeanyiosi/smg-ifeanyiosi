import React, { useEffect, useState } from "react";
import LayoutTwo from "../components/layoutTwo";
import Table from "../components/Table";
import useFetch from "../useFetch";
import { TiDocumentText } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadedPosts, onePost } from "../Features/posts";
import ShowPosts from "../components/ShowPosts";

const Posts = ({ isPosts, isUsers, activeLink, setActiveLink }) => {
  const dispatch = useDispatch();

  
  const { userData, loading } = useFetch("https://dummyapi.io/data/v1/post");


  useEffect(() => {
    window.document.URL.includes("/Posts")
      ? setActiveLink("recent-posts")
      : setActiveLink("recent-users");
  }, [window]);

  
  useEffect(() => {
    userData && dispatch(loadedPosts(userData));
  }, [userData]);

  const postsDataBase = useSelector((state) => state.post.value);
  const onePostData = useSelector((state) => state.post.monoPostVal);

 
  const getASinglePost = (idValue) => {
    dispatch(onePost(idValue));
  };

  const [displayState, setDisplayState] = useState(false);

  
  const tableHead = {
    id: "ID",
    title: "TITLE",
    published: "PUBLISHED DATE",
    owner: "OWNER",
  };

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
                Loading...
              </h1>
            </div>
          ) : (
            <Table
              handleOnePost={getASinglePost}
              dataBase={postsDataBase}
              tableHead={tableHead}
              setDisplayState={setDisplayState}
            />
          )}
        </div>
        <div>
          {!displayState ? (
            <div className="flex flex-col items-center justify-center w-[22rem] h-[35rem] rounded-lg shadow-lg overflow-hidden">
              <TiDocumentText className="text-8xl stroke-0" />
              <p className="text-sm">
                View a selected post's full details here
              </p>
            </div>
          ) : (
            <ShowPosts singlePost={onePostData} />
          )}
        </div>
      </div>
    </LayoutTwo>
  );
};

export default Posts;
