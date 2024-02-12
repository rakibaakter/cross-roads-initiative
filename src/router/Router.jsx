import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";

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
    ],
  },
]);

export default Router;
