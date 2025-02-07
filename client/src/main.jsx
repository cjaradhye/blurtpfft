import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PseudoScroll from "./PseudoScroll";
import App from "./App";
import Navbar from "./components/Navbar";
import Bento from "./components/bento";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Mobile from "./components/Mobile";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><PseudoScroll /></>,
  },
  {
    path: "/mobile",
    element: <Mobile />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
