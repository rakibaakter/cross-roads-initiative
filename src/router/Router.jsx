import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import ErrorPage from "../pages/error/ErrorPage";
import ComingSoon from "../components/ComingSoon";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/courses",
        element: <ComingSoon />,
      },
      {
        path: "/dashboard",
        element: <ComingSoon />,
      },
      {
        path: "/sign-in",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <Register />,
      },
    ],
  },
]);

export default Router;
