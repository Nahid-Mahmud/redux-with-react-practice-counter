import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/home/Home";
import Posts from "@/pages/posts/Posts";
import SinglePost from "@/pages/posts/SinglePost";
import User from "@/pages/users/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <User />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <SinglePost />,
      },
    ],
  },
]);

export default router;
