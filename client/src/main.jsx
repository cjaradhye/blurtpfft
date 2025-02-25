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
import Chat from "./components/blurts/Chat";
import AfterLogin from "./components/blurts/AfterLogin";
import PrivateRoute from "./components/Protected";
import Dashboard from "./components/blurts/Dashboard";
import Settings from "./components/blurts/Settings";
import EditAvatar from "./components/blurts/EditAvatar";
import ToImage from "./components/image-converter/ToImage";
import Style from "./components/image-converter/Style";
import DownloadButton from "./components/image-converter/Download";
import NewPrivate from "./components/NewProtected";
import Google from "./components/GoogleFull";


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
      <Route
        path="/blurt/thefirst"
        element={

            <div className="chatthingy">
              <Chat />
            </div>
        }
      />
      <Route
        path="/trying"
        element={
            <AfterLogin />
        }
      />
      <Route
        path="/blurt/main"
        element={
            <Dashboard />
        }
      />
      <Route
        path="/settings"
        element={
            <Settings />
        }
      />
      <Route
          path="/blurt/edit-avatar"
          element={
              <EditAvatar />
          }
        />
        <Route
          path="/blurt/image"
          element={
              <ToImage />
          }
        />
        <Route
          path="/style"
          element={
            <div>
                <DownloadButton />
                <Style />
            </div>
          }
        />
        <Route
          path="/blurt/login"
          element={
            <Google />
          }
        />
      </Routes>
  </BrowserRouter>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
