import { Outlet } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import { Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const newAccount = (event) => {
    event.preventDefault();
    navigate("/createAccount");
  };

  const login = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="justify-content">
        <Navbar.Brand>CALEN-LIT</Navbar.Brand>
        <Button variant="primary" onClick={(e) => login(e)}>Login</Button>
        <br></br>
        <Button variant="success"
          onClick={(e) => {
            newAccount(e);
          }}
        >
          Create account
        </Button>
      </Navbar>
      <MainPage />
      <Outlet />
    </>
  );
}

export default App;
