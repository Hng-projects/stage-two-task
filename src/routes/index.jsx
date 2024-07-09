import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import { Cart, Checkout, ErrorPage, Payment, Products } from "../pages";

const router = createBrowserRouter([
  {
    path: "/stage-two-task/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Products /> },
      {
        path: "cart",
        element: <Cart />,
      },
      { path: "cart/checkout", element: <Checkout /> },
      { path: "cart/checkout/payment", element: <Payment /> },
    ],
  },
]);

export default router;
