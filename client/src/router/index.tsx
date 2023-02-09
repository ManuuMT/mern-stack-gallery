import { createBrowserRouter } from "react-router-dom";
import { HomePage, PostForm, NotFoundPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/form",
    element: <PostForm />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/:id",
    element: <PostForm />,
    errorElement: <NotFoundPage />,
  },
]);
