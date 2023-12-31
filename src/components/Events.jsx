import { Card, CardBody, CardHeader } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EventCard = ({ event, setAddedEvents }) => {
  const { desc, tag, place, food, costume, present, id } = event;

  let { date } = useParams();

  const [editing, setEditing] = useState(false);
  const [descState, setDesc] = useState(desc);
  const [tagState, setTag] = useState(tag);
  const [foodState, setFood] = useState(food);
  const [costumeState, setCostume] = useState(costume);
  const [presentState, setPresent] = useState(present);
  const [placeState, setPlace] = useState(place);
  const userId = useSelector((state)=>state.userId)


  const edit = () => {
    setEditing(!editing);
    // console.log(editing)
  };

  const editingEvent = async (event) => {
    event.preventDefault();
    await axios
      .put("/event", {
        descState,
        tagState,
        foodState,
        costumeState,
        presentState,
        date,
        placeState,
        id,
        userId,
      })
      .then((res) => {
        setAddedEvents(res.data);
        // setAddedEvents((currentEvents) =>
        //   currentEvents.map((currentEvent) =>{
        //     if(currentEvent.id === id){
        //       return res.data
        //     } return res.data
        //   }));
        setEditing(false);
      });
  };

  const deleteEvent = async () => {
    await axios.delete(`/event/` + id).then((res) => {
      setEditing(false);
      setAddedEvents((currentEvents) =>
        currentEvents.filter((event) => event.id !== id)
      );
    });
  };

  return (
    <div>
      {editing ? (
        <div>
          <Form
            onSubmit={(e) => {
              editingEvent(e);
            }}
          >
            <Form.Group size="sm" controlId="username">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={descState}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="sm" controlId="password">
              <Form.Label>Tag</Form.Label>
              <Form.Control
                type="text"
                maxLength={5}
                value={tagState}
                onChange={(e) => setTag(e.target.value)}
              />
              <Form.Label>Place</Form.Label>
              <Form.Control
                type="text"
                value={placeState}
                onChange={(e) => setPlace(e.target.value)}
              />
              <Form.Label>Food</Form.Label>
              <Form.Check
                checked={foodState}
                value={foodState}
                onChange={() => {
                  setFood(!food);
                }}
              />
              <Form.Label>Costume</Form.Label>
              <Form.Check
                checked={costumeState}
                value={costumeState}
                onChange={() => {
                  setCostume(!costume);
                }}
              />
              <Form.Label>Present</Form.Label>
              <Form.Check
                checked={presentState}
                value={presentState}
                onChange={() => {
                  setPresent(!present);
                }}
              />
            </Form.Group>
            <br />
            <Button variant="success" type="submit">
              Update Event
            </Button>
          </Form>
          <br></br>
          <Button
            variant="danger"
            onClick={(e) => {
              deleteEvent(e);
            }}
          >
            Delete
          </Button>
        </div>
      ) : (
        <Card className="text-center">
          <CardHeader>{desc}</CardHeader>
          <CardBody>
            {tag}
            <br />
            {place}
            <br />
            Food{" "}
            <input
              type="checkbox"
              disabled
              defaultChecked={food ? true : false}
            />
            <br />
            Present{" "}
            <input
              type="checkbox"
              disabled
              defaultChecked={present ? true : false}
            />
            <br />
            Costume{" "}
            <input
              type="checkbox"
              disabled
              defaultChecked={costume ? true : false}
            />
            <br />
            <Button
              variant="success"
              className="text-right"
              onClick={(e) => edit(e)}
            >
              Edit
            </Button>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default EventCard;
