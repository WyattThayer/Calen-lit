import { useState } from "react";
import CalendarView from "./components/CalendarView.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import DailyView from "./components/DailyView.jsx";



function App() {
  return (
    <>
    <h1>Calen-lit</h1>
      <Outlet />
    </>
  );
}

export default App;
