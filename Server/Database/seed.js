import { User, Event, db } from "./model.js";
const promises = [];

promises.push(
  User.create({
    username: "lolcatk1",
    password: "lolcatk",
  })
);

promises.push(
  User.create({
    username: "lolcatk2",
    password: "lolcatk",
  })
);

promises.push(
  User.create({
    username: "lolcatk3",
    password: "lolcatk",
  })
);

promises.push(
  User.create({
    username: "lolcatk4",
    password: "lolcatk",
  })
);

promises.push(
  Event.create({
    desc: "it's my party",
    tag: "bday",
    time: new Date("02/15/2024 18:00:00").toLocaleTimeString(),
    date: new Date("02/15/2024"),
    place: "Chuck E Cheese",
    food: true,
    costume: false,
    present: true,
    user_id: 1,
  })
);

promises.push(
  Event.create({
    desc: "Halloween",
    tag: "boob",
    time: new Date("10/31/2023 20:00:00").toLocaleTimeString(),
    date: new Date("10/31/2023"),
    place: "school",
    food: true,
    costume: true,
    present: false,
    user_id: 2,
  })
);

promises.push(
  Event.create({
    desc: "White Trash Christmas Bash",
    tag: "xmas",
    time: new Date("12/20/2023 18:00:00").toLocaleTimeString(),
    date: new Date("12/20/2023"),
    place: "downtown",
    food: true,
    costume: true,
    present: true,
    user_id: 3,
  })
);

promises.push(
  Event.create({
    desc: "Valentines Orgy",
    tag: "xxx",
    time: new Date("02/14/2024 7:00:00").toLocaleTimeString(),
    date: new Date("02/14/2024"),
    place: "my place",
    food: false,
    costume: false,
    present: false,
    user_id: 4,
  })
);

await Promise.all(promises).catch(console.error);
