import { createBrowserRouter } from "react-router-dom";
import { HomePage, PostForm, NotFoundPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/posts/new",
    element: <PostForm />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/posts/:id",
    element: <PostForm />,
    errorElement: <NotFoundPage />,
  },
]);
