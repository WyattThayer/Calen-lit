import axios from "axios";
import { useEffect, useState } from "react";
import store from "../store";

const CalendarView = () => {

    

  let [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`/user/1`).then((res) => {
      setUser(res.data);
    });
  },[]);

  return (
    <div>
      <h1>Hello {user.username}</h1>
    </div>
  );
};

export default CalendarView;
