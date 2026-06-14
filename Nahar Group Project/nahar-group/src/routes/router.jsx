import {
  createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import CompanyDetails from "../pages/CompanyDetails";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
  path: "/company/:id",
  element: <CompanyDetails />,
},
{
  path: "/contact",
  element: <Contact />,
},
{
  path: "*",
  element: <NotFound />,
},
    ],
  },
]);

export default router;