import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import App from "./App";
import { Customer } from "./pages/Customer";
import { CustomerProfile } from "./pages/CustomerProfile";
import { CustomerTask } from "./pages/CustomerTask";
import { CustomerHistory } from "./pages/CustomerHistory";
import { ProductPage } from "./pages/ProductPage";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePgae";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id",
        element: <ProductPage />,
      },
    ],
  },

  {
    path: "customer/:id",
    element: <Customer />,
    children: [
      {
        path: "profile",
        element: <CustomerProfile />,
      },
      {
        path: "history",
        element: <CustomerHistory />,
      },
      {
        path: "task",
        element: <CustomerTask />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router}></RouterProvider>;
}
