import React, { useState } from "react";
import Users from "./pages/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import AdminSearchPage from "./pages/AdminPage";
import AddUser from "./pages/Add-user";
import ViewCreatedUsers from "./pages/Created-Users";

function App() {
  const isPosts =
    "absolute bottom-[-0.75rem] h-1 w-24 bg-violet-500 transition ease-in-out translate-x-28 duration-600";
  const isUsers =
    "absolute bottom-[-0.75rem] h-1 w-24 bg-violet-500 transition ease-in-out translate-x-0 duration-600";
  const [activeLink, setActiveLink] = useState("");

  const handleActiveLink = (val) => {
    setActiveLink(val);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Users
              isPosts={isPosts}
              isUsers={isUsers}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              handleActiveLink={handleActiveLink}
            />
          }
        />
        <Route
          path="/Posts"
          element={
            <Posts
              isPosts={isPosts}
              isUsers={isUsers}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              handleActiveLink={handleActiveLink}
            />
          }
        />
        <Route path="/Admin-page" element={<AdminSearchPage />} />
        <Route path="/Created-Users" element={<ViewCreatedUsers />} />
        <Route path="/Add-user" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
