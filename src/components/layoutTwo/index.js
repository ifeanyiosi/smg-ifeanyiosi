import React, { useEffect } from "react";
import ProfilePane from "../ProfilePane";
import Sidebar from "../../components/Sidebar";
import Upct from "../Act-details";
import PopularTags from "../../components/PopularTags";
import { useDispatch, useSelector } from "react-redux";
import {
  userTotal,
  postTotal,
  tagTotal,
  commentTotal,
} from "../../Features/upctTotal";
import useFetch from "../../useFetch";

const LayoutTwo = ({ children }) => {
  
  const { userData: tusers } = useFetch("https://dummyapi.io/data/v1/user");

 
  const { userData: tpost } = useFetch("https://dummyapi.io/data/v1/post");


  const { userData: tcomment } = useFetch(
    "https://dummyapi.io/data/v1/comment"
  );

  const { userData: ttag } = useFetch("https://dummyapi.io/data/v1/tag");

  const dispatch = useDispatch();

  const totUsers = useSelector((state) => state.total.userValue);
  const totPosts = useSelector((state) => state.total.postValue);
  const totComments = useSelector((state) => state.total.commentValue);
  const totTags = useSelector((state) => state.total.tagValue);

  useEffect(() => {
    tusers && dispatch(userTotal(tusers.total));
    tpost && dispatch(postTotal(tpost.total));
    tcomment && dispatch(commentTotal(tcomment.total));
    ttag && dispatch(tagTotal(ttag.data.length));
  }, [tusers, tcomment]);

  return (
    <div className="h-screen flex mx-auto w-[90rem] overflow-hidden bg-gray-50">
      <div className="h-[100%]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
        <div className="left-0">
          <ProfilePane />
        </div>
        <div className="w-full mt-12 p-6 overflow-auto">
          
          <div className="flex items-center justify-between flex-1 h-64">
           
            <div className="grid grid-cols-2 gap-4 h-full">
              {tusers && <Upct headline={"Users"} digits={totUsers} />}
              {tpost && <Upct headline={"Posts"} digits={totPosts} />}
              {tcomment && <Upct headline={"Comments"} digits={totComments} />}
              {ttag && <Upct headline={"Tags"} digits={totTags} />}
            </div>

           
            <PopularTags ttag={ttag} />
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutTwo;
