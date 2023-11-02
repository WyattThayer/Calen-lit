import express from "express";
import ViteExpress from "vite-express";
import morgan from "morgan";
import  { User, Event, db } from "./Database/model.js";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());

//Routes
const router = express.Router();

// Home page route.
router.get("/helloworld", function (req, res) {
  res.send({ mydata: "thing" });
});

app.use(router);

//opening the server
ViteExpress.listen(app, 6969, () =>
  console.log(`listening on http://localhost:6969`)
);
