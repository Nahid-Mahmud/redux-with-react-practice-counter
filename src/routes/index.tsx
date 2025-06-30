import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/home/Home";
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
    ],
  },
]);

export default router;
