import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateAccount = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    return userName.length > 0 && password.length > 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("/user", { userName, password }).then((res) => {
      dispatch({
        type: "SET_USERNAME",
        payload: userName,
      });
      dispatch({
        type: "SET_PASSWORD",
        payload: password,
      });
      dispatch({
        type: "SET_ID",
        payload: res.data.userId,
      });
      navigate("/calendar");
    });
  };

  return (
    <div className="Account">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group size="sm" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={userName}
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
        <Button size="sm" type="submit" disabled={!validateForm()}>
          Create Account
        </Button>
      </Form>
    </div>
  );
};

export default CreateAccount;
