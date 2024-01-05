import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";

// Header
// Body
// Footer

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("swiggy"));


const appRouter = createBrowserRouter(
  [
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>
    },
    {
      path:"/about",
      element:<About/>
    }
  ]
)

root.render(<RouterProvider router={appRouter}/>);
