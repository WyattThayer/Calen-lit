import { User, Event, db } from "../Database/model.js"



const handlerFunctions = {
    createEvent: async (req,res)  => { 
        const{ desc, tag, food, costume, present} = req.body

        const newEvent = await User.createEvent({

        })
    }
}