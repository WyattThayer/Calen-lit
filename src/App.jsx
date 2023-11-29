import { Outlet } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import { Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import './app.css'

function App() {

  const dispatch =  useDispatch()
  const isAuth = useSelector((state)=>state.isAuth)
  


  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="justify-content">
        <Navbar.Brand>CALEN-LIT</Navbar.Brand>
        {isAuth ?<Button variant="primary" onClick={()=>dispatch({type:'LOGOUT'})}>Logout</Button> :(
        <>
        <Link to="/login">
          <Button variant="primary" >Login</Button>
        </Link>
                <Link to="/createAccount">
        <Button variant="success">
          Create account
        </Button>
        </Link>
        </>
        )}

      </Navbar>
      <MainPage />
      <Outlet />
    </>
  );
}

export default App;
