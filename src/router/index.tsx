import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout";

const Home = lazy(() => import("../pages/Home"));
const Product = lazy(() => import("../pages/Product"));
const ErrorPage = lazy(() => import("../pages/Error"));

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "product/:category",
          element: <Product />,
        },
      ],
    }
  ]);

export default router;