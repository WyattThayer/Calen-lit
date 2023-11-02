import { User, Event, db } from "./model.js";
import bcryptjs from "bcryptjs";

await db.sync({ force: true });

let users = [];
users.push({
  username: "lolcatk1",
  password: bcryptjs.hashSync("lolcatk"),
});

users.push({
  username: "lolcatk2",
  password: bcryptjs.hashSync("lolcatk"),
});

users.push({
  username: "lolcatk3",
  password: bcryptjs.hashSync("lolcatk"),
});

users.push({
  username: "lolcatk4",
  password: bcryptjs.hashSync("lolcatk"),
});

await User.bulkCreate(users).catch(console.error);

let events = [];
events.push({
  desc: "it's my party",
  tag: "bday",
  time: new Date("02/15/2024 18:00:00").toLocaleTimeString(),
  date: new Date("02/15/2024"),
  place: "Chuck E Cheese",
  food: true,
  costume: false,
  present: true,
  userId: 1,
});

events.push({
  desc: "Halloween",
  tag: "BOO",
  time: new Date("10/31/2023 20:00:00").toLocaleTimeString(),
  date: new Date("10/31/2023"),
  place: "school",
  food: true,
  costume: true,
  present: false,
  userId: 2,
});

events.push({
  desc: "White Trash Christmas Bash",
  tag: "xmas",
  time: new Date("12/20/2023 18:00:00").toLocaleTimeString(),
  date: new Date("12/20/2023"),
  place: "downtown",
  food: true,
  costume: true,
  present: true,
  userId: 3,
});

events.push({
  desc: "Valentines Orgy",
  tag: "xxx",
  time: new Date("02/14/2024 7:00:00").toLocaleTimeString(),
  date: new Date("02/14/2024"),
  place: "my place",
  food: false,
  costume: false,
  present: false,
  userId: 4,
});

await Event.bulkCreate(events).catch(console.error);
