 import { useState,useEffect } from "react"
 import axios from "axios"
 import  Table  from "react-bootstrap/Table"
 import Button from "react-bootstrap/Button"

const DailyView = () => {

    const [desc,setDes] = useState('')
    const [tag,setTag] = useState('')
    const [food,setFood] = useState(false)
    const [costume,setCostume] = useState(false)
    const [present,setPresent] = useState(false)


    const addingEvent = async (event) => {
        event.preventDefault();
        await axios.post("/event", { desc, tag, food,costume,present }).then((res) => {
          dispatch({
            type: "SET_DESC",
            payload: desc,
          });
          dispatch({
            type: "SET_TAG",
            payload: tag,
          });
          dispatch({
            type: "SET_FOOD",
            payload: food,
          });
          dispatch({
            type: "SET_COSTUME",
            payload: costume,
          });
          dispatch({
            type: "SET_PRESENT",
            payload: present,
          });
        });
      };

return(
    <div>
        <Button onClick={e=>(addingEvent(e))}> Add New Event</Button>
        <Table>
            
        </Table>

    </div>
)
}

export default DailyView