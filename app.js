import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Offers from "./src/components/Offers";
import Error from "./src/components/Error";
import HelpClass from "./src/components/HelpClass";
import { Menu } from "./src/components/Menu";

// Header
// Body
// Footer

const Profile = lazy(()=> {
  return import("./src/components/Profile");
});

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("swiggy"));


const appRouter = createBrowserRouter(
  [
    {
      path:"/",
      element:<AppLayout/>,
      children:[
          {
            path:"/",
            element:<Body/>,
            errorElement:<Error/>
          },
          {
            path:"/offers",
            element:<Offers/>
          },
          {
            path:"/help",
            element:<HelpClass/>
          },
          {
            path:"/profile",
            element:<Suspense fallback = {<h2>Loading</h2>} ><Profile/></Suspense>
          },
          {
            path:"/menu/:resId",
            element:<Menu/>
          }
      ]
    },

  ]
)

root.render(<RouterProvider router={appRouter}/>);
