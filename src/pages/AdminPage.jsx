import React, { useEffect, useState } from "react";
import { AiFillPrinter, AiOutlineStop, AiTwotoneFileAdd } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import Table from "../components/Table";
import { loadedPosts } from "../Features/posts";
import Layout from "../layout";
import useFetch from "../useFetch";

const AdminSearchPage = () => {
  const dispatch = useDispatch();

 
  const { userData, loading } = useFetch(
    "https://dummyapi.io/data/v1/post?page=3&limit=50"
  );

 
  useEffect(() => {
    userData && dispatch(loadedPosts(userData));
  }, [userData]);


  const postsDataBase = useSelector((state) => state.post.value);

  
  const tableHead = {
    id: "ID",
    title: "TITLE",
    likes: "LIKES",
    published: "PUBLISHED DATE",
    owner: "OWNER",
  };

 
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPAge, setPostsPerPAge] = useState(20);

  const indexOfLastPost = currentPage * postsPerPAge;
  const indexOfFirstPost = indexOfLastPost - postsPerPAge;
  const currentPosts =
    postsDataBase && postsDataBase.slice(indexOfFirstPost, indexOfLastPost);

  //   Setting the number of Buttons
  const [number, setNumber] = useState([]);
  useEffect(() => {
    let num = [];
    if (userData)
      for (let i = 0; i < userData.page; i++) {
        num.push(i + 1);
      }
    setNumber(num);
  }, [userData]);

  //Function to set the current page
  const paginate = (pageValueNumber) => {
    setCurrentPage(pageValueNumber);
  };

  //Function to handle going to the previous page
  const handlePrev = () => {
    if (currentPage > 1)
      setCurrentPage((prevNumber) => {
        return prevNumber - 1;
      });
  };

  //   Function to handle going to the next page
  const handleNext = () => {
    if (currentPage < 3)
      setCurrentPage((prevNumber) => {
        return prevNumber + 1;
      });
  };

  return (
    <Layout>
      {/* The search panel */}
      <form className="flex -translate-y-6 py-2  px-2 items-center border border-slate-500 rounded-xl h-8 w-96 overflow-hidden">
        <BiSearch />
        <input
          className="pl-4 text-sm w-full bg-transparent  placeholder:text-sm outline-none"
          type="search"
          placeholder="Search"
        />
      </form>

      {/* The Decoration buttons i decided to just code everything here since i was not gonna reuse it */}
      <div className="flex justify-between border-t border-b py-2 mt-4">
        <div className="flex gap-2">
          <div className="h-8 w-8 bg-white border flex items-center justify-center">
            <span className="h-4 w-4 rounded-full bg-slate-400"></span>
          </div>
          <div className="h-8 w-8 bg-white border flex items-center justify-center">
            <span className="h-4 w-4 rounded-full bg-slate-400"></span>
          </div>
          <div className="h-8 w-8 bg-white border flex items-center justify-center">
            <span className="h-4 w-4 rounded-full bg-violet-400"></span>
          </div>
          <div className="h-8 w-8 bg-white border flex items-center justify-center">
            <span className="h-4 w-4 rounded-full bg-violet-400"></span>
          </div>
          <div className="h-8 w-8 bg-white border flex items-center justify-center">
            <span className="h-4 w-4 rounded-full bg-violet-400"></span>
          </div>
        </div>

       
        <div className="flex gap-4 items-center text-gray-400">
          <span className="text-sm text-gray-500 font-bold">
            {currentPage} - {postsDataBase && postsDataBase.length} of{" "}
            {postsPerPAge} records
          </span>
          <FaEnvelope className="cursor-pointer" />
          <AiFillPrinter className="cursor-pointer" />
          <AiTwotoneFileAdd className="cursor-pointer" />
          <AiOutlineStop className="cursor-pointer" />
        </div>
      </div>

     
      <div className="w-[100%] max-h-[30rem] mt-8 overflow-auto">
        {loading ? (
          <div className="flex items-center justify-center w-full h-full">
            <h1 className="text-slate-900 text-2xl font-bold animate-pulse">
              Loading...
            </h1>
          </div>
        ) : (
          <Table dataBase={currentPosts} tableHead={tableHead} />
        )}
      </div>
      <div className="flex mt-4 gap-2">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center border border-slate-400 rounded-md py-1 px-2 w-max-content text-violet-400 text-sm hover:bg-violet-400 hover:text-white"
        >
          Prev
        </button>
        {number.map((a) => (
          <Button key={a} nVal={a} paginate={paginate} />
        ))}
        <button
          onClick={handleNext}
          className="flex items-center justify-center border border-slate-400 rounded-md py-1 px-2 w-max-content text-violet-400 text-sm hover:bg-violet-400 hover:text-white"
        >
          Next
        </button>
      </div>
    </Layout>
  );
};

export default AdminSearchPage;
