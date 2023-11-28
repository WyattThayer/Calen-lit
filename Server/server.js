import express from "express";
import ViteExpress from "vite-express";
import morgan from "morgan";
import { handlerFunctions } from "./Controllers/controller.js";
import session from 'express-session'

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
// app.use(express.static("public"));
app.use(express.json());
app.use(session({
  secret: 'gettinjiggywitit',
  saveUninitialized: false,
  resave: false
}))

//Routes
app.get("/user", handlerFunctions.getUsers);
app.post("/login", handlerFunctions.getUser);
// app.delete("/user/:id", handlerFunctions.deleteUser);
// app.put("/user/:id", handlerFunctions.updateUser);
app.post("/user", handlerFunctions.createUser);

app.get("/event", handlerFunctions.getEvents);
app.get("/event/:date", handlerFunctions.getEvent);
app.delete("/event/:id", handlerFunctions.deleteEvent);
app.put("/event", handlerFunctions.updateEvent);
app.post("/event", handlerFunctions.createEvent);

//opening the server
ViteExpress.listen(app, 6969, () =>
  console.log(`listening on http://localhost:6969`)
);
