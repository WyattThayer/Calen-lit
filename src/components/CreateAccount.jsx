import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateAccount = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    return username.length > 0 && password.length > 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/user", {
        username,
        password,
      });
      console.log("🚀 ~ file: Login.jsx:17 ~ handleSubmit ~ res:", data);
      dispatch({
        type: "LOGIN",
        payload: { username: data?.username, userId: data?.userId },
      });

      navigate("/Calendar");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Account container-sm d-flex card mt-5">
      <div className="welcome">Welcome to Calen-Lit</div>
      <br/>
      <br/>
      <Form onSubmit={(e) => handleSubmit(e)} className="w-50">
        <Form.Group className="mb-3" size="sm" controlId="username">
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
        
        <Button
          variant="dark"
          size="sm"
          type="submit"
          disabled={!validateForm()}
        >
          Create Account
        </Button>
      </Form>
    </div>
  );
};

export default CreateAccount;
