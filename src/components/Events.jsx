import { Card, CardBody, CardHeader } from "react-bootstrap"

const EventCard = ({event})=>{
    const { desc, tag, place, food, costume, present } = event
    return(
        <Card className="text-center">
            <CardHeader>
                {desc}
            </CardHeader>
            <CardBody>
            {tag}<br/>
            {place}<br/>
            Food <input type='checkbox' defaultChecked={food ? true : false}/>
            <br/>
            Present <input type="checkbox" defaultChecked={present ? true : false}/>
            <br/>
            Costume <input type="checkbox" defaultChecked={costume ? true : false}/>
            
            </CardBody>
        
        </Card>
    )
}

export default EventCard