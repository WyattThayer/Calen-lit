import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import EventCard from "./Events.jsx";
import { Form } from "react-bootstrap";

const DailyView = () => {
  const { dailyView } = useLoaderData();

  let { date } = useParams;

  const [desc, setDesc] = useState("");
  const [tag, setTag] = useState("");
  const [food, setFood] = useState(false);
  const [costume, setCostume] = useState(false);
  const [present, setPresent] = useState(false);
  const [editing, setEditing] = useState(false);
  const [addedEvents, setAddedEvents] = useState(dailyView);

  console.log(food);

  const events = addedEvents.map((event) => {
    console.log(event);
    return <EventCard key={event.id} event={event} />;
  });

  const addingEvent = async (event) => {
    event.preventDefault();
    await axios
      .post("/event", { desc, tag, food, costume, present })
      .then((res) => {
        setAddedEvents([...addedEvents, res.data]);
        setDesc("");
        setTag("");
        setFood(false);
        setCostume(false);
        setPresent(false);
        setEditing(false);
      });
  };

  return (
    <div>
      <Button onClick={() => setEditing(true)}> Add New Event</Button>

      {events}

      {editing ? (
        <Form
          onSubmit={(e) => {
            addingEvent(e);
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
        ""
      )}
    </div>
  );
};

export default DailyView;
