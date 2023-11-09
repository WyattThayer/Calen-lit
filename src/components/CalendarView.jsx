import axios from "axios";
import { useEffect, useState } from "react";
import store from "../store";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CalendarView = () => {
  const userId = useSelector((state) => state.id);
  const username = useSelector((state) => state.username);
  const [date,setDate] = useState('')

    useEffect(()=>{
        let fullDate = new Date()
        setDate(fullDate.getFullYear()+'-'+fullDate.getMonth())
    },[])

  const navigate = useNavigate();

    const dailyView = async (e, i) => {
        e.preventDefault();
        
        navigate(`/DailyView/${date}-${i}`);
  };

  const dateArr = [];
  for (let i = 1; i <= 7; i++) {
    dateArr.push(
      <td>
        {i}
        <br></br>
        <Button
          onClick={(e) => {
            dailyView(e, i);
          }}
        >
          addEvent
        </Button>
      </td>
    );
  }
  const dateArr2 = [];
  for (let i = 8; i <= 14; i++) {
    dateArr2.push(
      <td>
        {i}
        <br></br>
        <Button
          onClick={(e) => {
            dailyView(e, i);
          }}
        >
          addEvent
        </Button>
      </td>
    );
  }
  const dateArr3 = [];
  for (let i = 15; i <= 21; i++) {
    dateArr3.push(
      <td>
        {i}
        <br></br>
        <Button
          onClick={(e) => {
            dailyView(e, i);
          }}
        >
          addEvent
        </Button>
      </td>
    );
  }
  const dateArr4 = [];
  for (let i = 22; i <= 28; i++) {
    dateArr4.push(
      <td>
        {i}
        <br></br>
        <Button
          onClick={(e) => {
            dailyView(e, i);
          }}
        >
          addEvent
        </Button>
      </td>
    );
  }
  const dateArr5 = [];
  for (let i = 29; i <= 31; i++) {
    dateArr5.push(
      <td>
        {i}
        <br></br>
        <Button
          onClick={(e) => {
            dailyView(e, i);
          }}
        >
          addEvent
        </Button>
      </td>
    );
  }

  return (
    <div>
      <h2 className="text-center">October</h2>
      <Table striped hover bordered variant="dark">
        <thead>
          <tr>
            <th padding="15px">Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>{dateArr}</tr>
          <tr>{dateArr2}</tr>
          <tr>{dateArr3}</tr>
          <tr>{dateArr4}</tr>
          <tr>{dateArr5}</tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CalendarView;