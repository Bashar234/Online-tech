import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import BuySms from "./component/buyMsg/BuySms";
import PrivateRouter from "./component/router/PrivateRouter";
import Main from "./layout/Main";
import Blog from "./screen/blog/Blog";
import Checkout from "./screen/checkout/Checkout";
import Course from "./screen/course/Course";
import SingleCourse from "./screen/course/SingleCourse";
import Faq from "./screen/faq/Faq";
import Home from "./screen/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://ass10server-bashar234.vercel.app/api/course"),
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/course",
        loader: () =>
          fetch("https://ass10server-bashar234.vercel.app/api/course"),
        element: <Course />,
      },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(
            `https://ass10server-bashar234.vercel.app/api/course/${params.id}`
          ),
        element: <SingleCourse />,
      },
      {
        path: "/user/login",
        element: <Login />,
      },
      {
        path: "/user/register",
        element: <Register />,
      },
      {
        path: "/course/checkout",
        element: (
          <PrivateRouter>
            <Checkout />
          </PrivateRouter>
        ),
      },
      {
        path: "/buy/success",
        element: <BuySms />,
      },
    ],
  },
  { path: "*", element: <h1 className="text-center mt-5">Not Found!</h1> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
