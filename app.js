import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Offers from "./src/components/Offers";
import Error from "./src/components/Error";
import Help from "./src/components/Help";

// Header
// Body
// Footer

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
            element:<Help/>
          }
      ]
    },

  ]
)

root.render(<RouterProvider router={appRouter}/>);
