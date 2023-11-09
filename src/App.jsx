import { useState } from "react";
import CalendarView from "./components/CalendarView.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import DailyView from "./components/DailyView.jsx";
import MainPage from "./components/MainPage.jsx";
import { Navbar } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";



function App() {

  const navigate = useNavigate()

  const newAccount = (event) =>{
      event.preventDefault()
      navigate('/createAccount')
      
  }

  return (
    <>
    <Navbar bg='primary' >
      CALEN-LIT
      <Button>Login</Button>
      <br></br>
      <Button onClick={e=>{newAccount(e)}}>Create account</Button>
    </Navbar>
      <MainPage/>
      <Outlet />
      
    </>
  );
}

export default App;
