import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/Home";
import Root from "./Root";
import Register from "../page/register/Register";
import Course from "../page/course/Course";
import Login from "../page/login register/Login";
import CourseDetail from "../page/course detail/CourseDetail";
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
      {
        path: "/courseDetail",
        element: <CourseDetail />,
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
