import { useState, useEffect } from "react";
import axios from "axios";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import EventCard from "./Events.jsx";
import { Form } from "react-bootstrap";

const DailyView = () => {
  let navigate = useNavigate();

  let { date } = useParams();

  const [desc, setDesc] = useState("");
  const [tag, setTag] = useState("");
  const [food, setFood] = useState(false);
  const [costume, setCostume] = useState(false);
  const [present, setPresent] = useState(false);
  const [editing, setEditing] = useState(false);
  const [addedEvents, setAddedEvents] = useState([]);
  const [place, setPlace] = useState("");

  console.log(food);

  const events = addedEvents.map((event) => {
    console.log(event);
    console.log(event.id);
    return (
      <EventCard
        setAddedEvents={setAddedEvents}
        addedEvents={addedEvents}
        key={event.id}
        event={event}
      />
    );
  });

  const addEvent = async (event) => {
    event.preventDefault();
    await axios
      .post("/event", {
        desc: desc,
        tag: tag,
        place: place,
        present: present,
        costume: costume,
        food: food,
        date,
      })
      .then((res) => {
        setAddedEvents([...addedEvents, res.data]);
        setDesc("");
        setTag("");
        setFood(false);
        setCostume(false);
        setPresent(false);
        setEditing(false);
        setPlace("");
      });
  };

  const backButton = () => {
    navigate("/calendar");
  };

  const previousDay = () => {
    if (date.length > 9) {
      let day = date.slice(date.length - 2);
      navigate(`/DailyView/2023-10-${day - 1}`);
    } else {
      let day = date.slice(date.length - 1);
      navigate(`/DailyView/2023-10-${day - 1}`);
    }
    // console.log(day)
  };

  const nextDay = () => {
    if (date.length > 9) {
      let day = date.slice(date.length - 2);

      navigate(`/DailyView/2023-10-${+day + 1}`);
    } else {
      let day = date.slice(date.length - 1);
      navigate(`/DailyView/2023-10-${+day + 1}`);
    }
  };

  useEffect(() => {
    axios.get(`/event/${date}`).then((res) => {
      setAddedEvents(res.data);
    });
  }, [date]);

  return (
    <div>
      <Button variant="primary" size="lg" onClick={(e) => backButton(e)}>
        Calendar
      </Button>

      <br />
      <br />

      <ButtonToolbar className="justify-content-between">
        <Button variant="info" onClick={(e) => previousDay(e)}>Previous day</Button>
        <div>{date}</div>
        <Button variant="info" onClick={(e) => nextDay(e)}>Next Day</Button>
      </ButtonToolbar>

      <br />

      

      <br/>

      {editing ? (
        <Form
          onSubmit={(e) => {
            addEvent(e, {
              desc: desc,
              tag: tag,
              place: place,
              present: present,
              costume: costume,
              food: food,
              setAddedEvents
            });
          }}
        >
          <Form.Group size="sm" controlId="username">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="sm" controlId="password">
            <Form.Label>Tag</Form.Label>
            <Form.Control
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
            <Form.Label>Place</Form.Label>
            <Form.Control
              type="text"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
            <Form.Label>Food</Form.Label>
            <Form.Check
              value={food}
              onChange={() => {
                setFood(!food);
              }}
            />
            <Form.Label>Costume</Form.Label>
            <Form.Check
              value={costume}
              onChange={() => {
                setCostume(!costume);
              }}
            />
            <Form.Label>Present</Form.Label>
            <Form.Check
              value={present}
              onChange={() => {
                setPresent(!present);
              }}
            />
          </Form.Group>
          <br />
          <Button type="submit">Add Event</Button>
        </Form>
      ) : (
        <div className="d-grid gap-2">
        <Button variant="success" onClick={() => setEditing(true)}> Add New Event</Button>
      </div>
      )}
        <br/>
      {events}
    </div>
  );
};

export default DailyView;
