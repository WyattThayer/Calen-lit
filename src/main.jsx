import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CalendarView from "./components/CalendarView.jsx";
import CreateAccount from "./components/CreateAccount.jsx";
import DailyView from "./components/DailyView.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login.jsx";
import { PrivateRoutes } from "./components/PrivateRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        element: <PrivateRoutes />,
        children: [
          {
            path: "Calendar",
            element: <CalendarView />,
          },
          {
            path: "DailyView/:date",
            element: <DailyView />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/createAccount",
    element: <CreateAccount />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
