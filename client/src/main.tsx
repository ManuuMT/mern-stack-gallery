import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { PostProvider } from "./context/";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PostProvider>
      <RouterProvider router={router} />
    </PostProvider>
  </React.StrictMode>
);
