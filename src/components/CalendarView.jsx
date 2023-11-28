import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CalendarView = () => {
  const userId = useSelector((state) => state.id);
  const username = useSelector((state) => state.username);
  const [date, setDate] = useState("");
  const [addedEvents, setAddedEvents] = useState([]);
  //* console.log(date)
  useEffect(() => {
    let fullDate = new Date();
    findEvent();
    let fixedMonth = fullDate.getMonth()+1
    //* console.log(fixedMonth)
    setDate(fullDate.getFullYear() + "-" + fixedMonth);
  }, []);

  const navigate = useNavigate();

  const dailyView = async (e, i) => {
    e.preventDefault();

    navigate(`/DailyView/${date}-${i}`);
  };

  const dailyViewNov = async (e, i) => {
    e.preventDefault();

    navigate(`/DailyView/2023-11-${i}`);
  };

  const dailyViewJan = async (e, i) => {
    e.preventDefault();

    navigate(`/DailyView/2023-01-${i}`);
  };

  const findEvent = async (e, i) => {
    await axios.get(`/event/${date}`).then((res) => {
      setAddedEvents(res.data.tag);
      // console.log(i)
    });
  };

  const dateArr = [];
  for (let i = 1; i <= 2; i++) {
    dateArr.push(
      <td key={i}>
        {i}
        <br></br>
        <Button
        variant="info"
          size="sm"
          onClick={(e) => {
            dailyView(e, i);
          }}
        >
          View Day
        </Button>
      </td>
    );
  }
  const dateArr2 = [];
  for (let i = 3; i <= 9; i++) {
    dateArr2.push(
      <td key={i}>
        {i}
        <br></br>
        <Button
        variant="info"
          size="sm"
          onClick={(e) => {
            dailyView(e, i);
          }}
        >
          View Day
        </Button>
      </td>
    );
  }
  const dateArr3 = [];
  for (let i = 10; i <= 16; i++) {
    dateArr3.push(
      <td key={i}>
        {i}
        <br></br>
        <Button
        variant="info"
          size="sm"
          onClick={(e) => {
            dailyView(e, i);
          }}
        >
          View Day
        </Button>
      </td>
    );
  }
  const dateArr4 = [];
  for (let i = 17; i <= 23; i++) {
    dateArr4.push(
      <td key={i}>
        {i}
        <br></br>
        <Button
        variant="info"
          size="sm"
          onClick={(e) => {
            dailyView(e, i);
          }}
        >
          View Day
        </Button>
      </td>
    );
  }
  const dateArr5 = [];
  for (let i = 24; i <= 30; i++) {
    dateArr5.push(
      <td key={i}>
        {i}
        <br></br>
        <Button
        variant="info"
          size="sm"
          onClick={(e) => {
            dailyView(e, i);
          }}
        >
          View day
        </Button>
      </td>
    );
  }
  const dateArr6 = [];
  for (let i = 26; i <= 30; i++) {
    dateArr6.push(
      <td key={i}>
        {i}
        <br></br>
        <Button
          size="sm"
          variant='secondary'
          onClick={(e) => {
            dailyViewNov(e, i);
          }}
        >
          View day
        </Button>
      </td>
    );
  }
  const dateArr7 = [];
  for (let i = 31; i <= 31; i++) {
    dateArr7.push(
      <td key={i}>
        {i}
        <br></br>
        <Button
          size="sm"
          variant='info'
          onClick={(e) => {
            dailyViewNov(e, i);
          }}
        >
          View day
        </Button>
      </td>
    );
  }
  const dateArr8 = [];
  for (let i = 1; i <= 6; i++) {
    dateArr8.push(
      <td key={i}>
        {i}
        <br></br>
        <Button
          size="sm"
          variant='secondary'
          onClick={(e) => {
            dailyViewJan(e, i);
          }}
        >
          View day
        </Button>
      </td>
    );
  }

  return (
    <div>
      <h2 className="text-center">December</h2>
      <Table  hover bordered variant="dark">
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
          <tr>{dateArr6}{dateArr}</tr>
          <tr>{dateArr2}</tr>
          <tr>{dateArr3}</tr>
          <tr>{dateArr4}</tr>
          <tr>{dateArr5}</tr>
          <tr>{dateArr7}{dateArr8}</tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CalendarView