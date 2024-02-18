import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Offers from "./src/components/Offers";
import Error from "./src/components/Error";
import HelpClass from "./src/components/HelpClass";
import { Menu } from "./src/components/Menu";
import Dishes from "./src/components/Dishes";
import UserContext from "./src/utils/userContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

// Header
// Body
// Footer

const Profile = lazy(() => {
  return import("./src/components/Profile");
});

const AppLayout = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername("new name");
  }, []);

  
  return (
    <Provider store = {appStore}>
    <div className="app">
      <UserContext.Provider value={{ name: username }}>
        <Header />
      </UserContext.Provider>
      <Outlet />
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
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <HelpClass />,
      },
      {
        path: "/profile",
        element: (
          <Suspense fallback={<h2>Loading</h2>}>
            <Profile />
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
