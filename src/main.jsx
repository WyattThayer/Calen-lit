import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CalendarView from "./components/CalendarView.jsx";
import CreateAccount from "./components/CreateAccount.jsx";
import DailyView from "./components/DailyView.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Calendar",
        element: <CalendarView />,
      },
      {
        path: "DailyView/:date",
        element: <DailyView />,
      },
      {
        path: "/createAccount",
        element: <CreateAccount />,
      },
      {
        path:"/login",
        element:<Login/>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
