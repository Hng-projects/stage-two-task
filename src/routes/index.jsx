import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import { Checkout, ErrorPage, Products } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Products /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

export default router;
