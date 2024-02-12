import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h2>error page coming soon</h2>,
    children: [
      {
        index: true,
        element: <h2>home</h2>,
      },
    ],
  },
]);

export default Router;
