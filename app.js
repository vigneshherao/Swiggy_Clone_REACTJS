import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./src/components/Error";
import { Menu } from "./src/components/Menu";
import Dishes from "./src/components/Dishes";
import UserContext from "./src/utils/userContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";
import MobileHeader from "./src/components/MobileHeader";
import Help from "./src/components/Help";
import Footer from "./src/components/Footer";

// Header
// Body
// Footer

const Mart = lazy(() => {
  return import("./src/components/Mart");
});

const AppLayout = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername("Vignesh");
  }, []);

  
  return (
    <Provider store = {appStore}>
    <div className="app">
      <UserContext.Provider value={{ name: username }}>
        <Header />
        <MobileHeader/>
      </UserContext.Provider>
      <Outlet />
      <Footer/>
    </div>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("swiggy"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/help",
        element: <Help/>,
      },
      {
        path: "/mart",
        element: (
          <Suspense fallback={<h2>New File</h2>}>
            <Mart/>
          </Suspense>
        ),
      },
      {
        path: "/menu/:resId",
        element: <Menu />,
      },
      {
        path: "item/:id",
        element: <Dishes />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
