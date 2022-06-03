import React from "react";
import UserDetail from "./UserDetail";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../Features/users";
import useFetch from "../../useFetch";
import { update } from "../../Features/upctTotal";

const ShowUser = ({
  singleUser,
  singleUserPost,
  singleUserComment,
  setDisplayState,
}) => {
  const dispatch = useDispatch();

  const { deleteUser: delUser } = useFetch("https://dummyapi.io/data/v1/user");

  const handleDeleteUser = (user) => {
    dispatch(deleteUser(user));
    dispatch(update({ singleUserComment, singleUserPost }));
    setTimeout(() => {
      delUser(user.id);
      setDisplayState(false);
    }, 300);
  };

  if (singleUser)
    return (
      <div className="flex flex-col items-center justify-center w-[22rem] max-h-[40rem] rounded-lg shadow-lg overflow-hidden">
        <div className="w-full p-4">
          <div className="flex gap-4 py-4 border-b-2">
            {singleUser?.picture ? (
              <img
                src={singleUser?.picture}
                alt="null"
                className="h-[8rem] w-32 object-cover shadow-xl rounded-xl"
              />
            ) : (
              <div className="flex items-center justify-center bg-violet-400 h-[8rem] w-32 object-cover shadow-xl rounded-xl">
                <h1 className="text-white font-bold text-xl">
                  {singleUser.lastName.substr(0, 1)}
                </h1>
              </div>
            )}

           
            <div className="flex flex-col gap-2">
              <UserDetail
                header={"Full name"}
                information={[
                  singleUser.title + ".",
                  " ",
                  singleUser.firstName,
                  " ",
                  singleUser.lastName,
                ]}
              />
              <UserDetail
                header={"Email Address"}
                information={singleUser.email}
              />
              <UserDetail
                header={"Phone number"}
                information={singleUser.phone}
              />
            </div>
          </div>
        </div>

       
        <div className="grid gap-y-4 grid-cols-2 w-full h-full p-4 border-b-2">
          <UserDetail header={"Gender"} information={singleUser.gender} />
          <UserDetail
            header={"Date of Birth"}
            information={singleUser.dateOfBirth.split("T")[0]}
          />
          <UserDetail
            header={"Street"}
            information={[singleUser?.location?.street]}
          />
          <UserDetail
            header={"City"}
            information={[singleUser?.location?.city]}
          />
          <UserDetail
            header={"State"}
            information={[singleUser.location?.state]}
          />
          <UserDetail
            header={"Country"}
            information={[singleUser.location?.country]}
          />
        </div>

        
        <div className="grid gap-y-4 grid-cols-2 w-full h-full p-4 border-b-2">
          <UserDetail
            header={"Registered"}
            information={[singleUser.registerDate.split("T")[0]]}
          />
          <UserDetail
            header={"Last Updated"}
            information={[singleUser.registerDate.split("T")[0]]}
          />
          <UserDetail header={"Posts"} information={[singleUserPost]} />
          <UserDetail header={"Comments"} information={[singleUserComment]} />
        </div>
        <button
          onClick={() => handleDeleteUser(singleUser)}
          className="flex justify-center items-center bg-red-600 w-[90%] shadow-lg rounded-lg py-2 text-slate-100 font-light text-sm my-4 hover:shadow-xl hover:bg-red-500"
        >
          Delete
        </button>
      </div>
    );
};

export default ShowUser;
