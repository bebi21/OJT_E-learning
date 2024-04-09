import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/Home";
import Root from "./Root";
import Register from "../page/register/Register";
import Course from "../page/course/Course";
import Login from "../page/login register/Login";
// chia router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>tran web bị lỗi</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/course",
        element: <Course />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
