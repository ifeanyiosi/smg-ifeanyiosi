import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./Features/users";
import totalReducer from "./Features/upctTotal";
import postReducer from "./Features/posts";

const store = configureStore({
  reducer: {
    user: userReducer,
    total: totalReducer,
    post: postReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
