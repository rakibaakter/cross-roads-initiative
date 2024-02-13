import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h2>error page coming soon</h2>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default Router;
