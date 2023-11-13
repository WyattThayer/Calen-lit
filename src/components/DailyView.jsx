import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
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
  const [place, setPlace] = useState('')

  console.log(food);

  const events = addedEvents.map((event) => {
    console.log(event);
    return <EventCard key={event.id} event={event} />;
  });
  
  

  const addingEvent = async (event) => {
    event.preventDefault();
    await axios
      .post("/event", { desc, tag, food, costume, present, date, place })
      .then((res) => {
        setAddedEvents([...addedEvents, res.data]);
        setDesc("");
        setTag("");
        setFood(false);
        setCostume(false);
        setPresent(false);
        setEditing(false);
        setPlace("")
      });
  };

  const backButton = () => {
    navigate("/calendar");
  };

  const previousDay = () => {
    
    if(date.length > 9){

        let day = date.slice(date.length - 2)
        navigate (`/DailyView/2023-10-${day - 1}`);
        // window.location.reload()
    }
    else{
        let day = date.slice(date.length - 1)
        navigate (`/DailyView/2023-10-${day - 1}`);
    }

    console.log(day)
    
  };

  const nextDay = ()=>{
    if(date.length > 9){

        let day = date.slice(date.length - 2)
        
        navigate (`/DailyView/2023-10-${+day + 1}`);
        
    }
    else{
        let day = date.slice(date.length - 1)
        navigate (`/DailyView/2023-10-${+day + 1}`);
        
    }
  }

  useEffect(() => {
    axios.get(`/event/${date}`).then(res=>{
      setAddedEvents(res.data)
    })
  }, [date])

  return (
    <div>
      <Button onClick={(e) => backButton(e)}> Calendar</Button>
      <br></br>
      <br></br>
      <Button onClick={(e) => previousDay(e)}>Previous day</Button>
      <br></br>
      <br></br>
      <Button onClick={(e) => nextDay(e)}>Next Day</Button>
      <br></br>
      <br></br>
      <Button onClick={() => setEditing(true)}> Add New Event</Button>

      

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
        ""
      )}
      
      {events}
    </div>
  );
};

export default DailyView;
