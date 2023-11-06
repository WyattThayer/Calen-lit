import { useState } from "react";
import CalendarView from "./components/CalendarView.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
