import React from "react";
import Logo from "./Components/Header/Logo";
import ResturantContainer from "./Components/Body/ResturantContainer";
import Error from "./Components/Error";
import AboutUs from "./Components/AboutUs";
import Contactus from "./Components/Contactus";
import ResturantManu from "./Components/ResturantManu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Main Layout Component
const Layout = () => (
  <>
    <Logo />
    <Outlet /> {/* This renders the children routes */}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Common Layout
    errorElement: <Error />, // Error Page for all nested routes
    children: [
      {
        index: true, // Default route for "/"
        element: <ResturantContainer />, // Home Page
      },
      {
        path: "AboutUs", // Nested "/AboutUs"
        element: <AboutUs />,
      },
      {
        path: "Contactus", // Nested "/Contactus"
        element: <Contactus />,
      },

      {
        path:"restaurants/:resId",
        element: <ResturantManu/>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
