import { User, Event, db } from "./model.js";

await db.sync({ force: true });

let users = [];
users.push({
  username: "lolcatk1",
  password: "lolcatk",
});

users.push({
  username: "lolcatk2",
  password: "lolcatk",
});

users.push({
  username: "lolcatk3",
  password: "lolcatk",
});

users.push({
  username: "lolcatk4",
  password: "lolcatk",
});

await User.bulkCreate(users).catch(console.error);

let events = [];
events.push({
  desc: "it's my party",
  tag: "bday",
  date: "2023-12-30",
  place: "Chuck E Cheese",
  food: true,
  costume: false,
  present: true,
  userId: 1,
});

events.push({
  desc: "Christmas",
  tag: "HOHO",
  date: "2023-12-25",
  place: "Grandma's",
  food: true,
  costume: true,
  present: false,
  userId: 2,
});

events.push({
  desc: "White Trash Christmas Bash",
  tag: "xmas",
  date: "2023-12-23",
  place: "downtown",
  food: true,
  costume: true,
  present: true,
  userId: 3,
});

events.push({
  desc: "Feast",
  tag: "yum",
  date: "2023-12-28",
  place: "my place",
  food: false,
  costume: false,
  present: false,
  userId: 4,
});

await Event.bulkCreate(events).catch(console.error);
