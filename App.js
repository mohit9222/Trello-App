import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "../src/App.css";
import About from "./components/About";
import Header from "./components/Header";

// AppLayout component that includes Header and Outlet for routing
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

// Create a router with routes for Body and About components
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/", // Root path
        element: <Body />, // Body component is rendered when the root path is accessed
      },
      {
        path: "/about",
        element: <About />, // About component is rendered when "/about" path is accessed
      },
    ],
    errorElement: <Error />, // Display an error element if any route errors occur
  },
]);

// Create a root and render the app with the configured router
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
