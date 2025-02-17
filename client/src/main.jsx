import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PseudoScroll from "./PseudoScroll";
import Navbar from "./components/Navbar";
import Mobile from "./components/Mobile";
import ResponsiveRedirect from "./ResponsiveRedirect"; // Import
import FullScreenNahneed from "./components/Nahneed";
import Unsubscribe from "./components/Unsubscribe";
import Feedback from "./components/Feedback";
import "./fonts.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/blurt"
        element={
          <>
            <PseudoScroll />
            <ResponsiveRedirect /> {/* It must be inside a route */}
          </>
        }
      />
      <Route
        path="/blurtmobile"
        element={
          <>
            <Mobile />
            <ResponsiveRedirect />
          </>
        }
      />
      <Route
        path="/"
        element={
          <>
            <FullScreenNahneed />
          </>
        }
      />
      <Route
        path="/feedback"
        element={
          <>
            <Feedback />
          </>
        }
      />
      <Route
        path="/unsubscribe"
        element={
          <>
            <Unsubscribe />
          </>
        }
      />
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
