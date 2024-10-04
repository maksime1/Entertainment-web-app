import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";

import Home from "./Home";
import Movie from "./Movie";
import Tv from "./Tv";
import Bookmark from "./Bookmark";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <Movie />,
  },
  {
    path: "/tv-series",
    element: <Tv />,
  },
  {
    path: "/bookmarks",
    element: <Bookmark />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
