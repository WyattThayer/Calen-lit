import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      const { data } = await axios.post("/login", {
        username,
        password,
      });
      //* console.log("🚀 ~ file: Login.jsx:17 ~ handleSubmit ~ res:", data);
      dispatch({
        type: "LOGIN",
        payload: { username: data?.username, userId: data?.id },
      });

      navigate("/Calendar");
    } catch (error) {
      console.error(error);
      if (error.response.status === 404) setErrorMsg("User not found");
      else setErrorMsg(error.message);
    }
  };

  const validateForm = () => {
    return username.length > 0 && password.length > 0;
  };

  return (
    <div className="Account container-sm d-flex">
      <Form onSubmit={(e) => handleSubmit(e)} className="w-50">
        <Form.Group size="sm" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="sm" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br />
        {errorMsg ? <p style={{ color: "red" }}>{errorMsg}</p> : ""}
        <Button
          variant="dark"
          size="sm"
          type="submit"
          disabled={!validateForm()}
        >
          Login
        </Button>

        <Link className="float-end" to="/createAccount">
          Create an account
        </Link>
      </Form>
    </div>
  );
};

export default Login;
