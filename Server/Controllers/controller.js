import { User, Event, db } from "../Database/model.js";
import bcryptjs from "bcryptjs";

export const handlerFunctions = {
  //* EVENTS
  createEvent: async (req, res) => {
    const { desc, tag, food, costume, present, date, place } = req.body;

    const newEvent = await Event.create({
      desc: desc,
      tag: tag,
      food: food,
      costume: costume,
      date: date,
      present: present,
      place: place,
    });
    res.send(newEvent);
  },

  deleteEvent: async (req, res) => {
    const { id, date } = req.params;

    console.log(id);

    try {
      const event = await Event.findByPk(id);

      if (!event) {
        return res.status(404).send("Event not found");
      }

      await event.destroy();

      res.send("event destroyed");
    } catch (error) {
      console.error("Error deleting event:", error);
      res.status(500).send("internal server error");
    }
  },

  updateEvent: async (req, res) => {
    const {
      descState,
      tagState,
      foodState,
      costumeState,
      presentState,
      id,
      placeState,
    } = req.body;
    console.log(id);
    const event = await Event.findByPk(id);
    let originalDate = event.date;

    const updatedEvent = await event.update({
      tag: tagState,
      place: placeState,
      food: foodState,
      costume: costumeState,
      present: presentState,
      desc: descState,
    });
    console.log(updatedEvent);
    const events = await Event.findAll({
      where: {
        date: originalDate,
      },
    });
    res.send(events);
  },

  getEvents: async (req, res) => {
    const allEvents = await Event.findAll();
    res.send(allEvents);
  },

  getEvent: async (req, res) => {
    let date = req.params.date;
    console.log(date);

    const event = await Event.findAll({
      where: {
        date: date,
      },
    });

    res.send(event);
  },

  //* USERS
  createUser: async (req, res) => {
    const { userName, password } = req.body;

    const newUser = await User.create({
      username: userName,
      password: password,
    });

    console.log(newUser);

    res.send({ userId: newUser.id });
  },

  deleteUser: async (req, res) => {
    const { desc, tag, food, costume, present } = req.body;

    const newUser = await User.destroy({});
  },

  updateUser: async (req, res) => {
    const changeableUserFields = ["username", "password"];
    const user = await User.findByPk(req.params.id);

    for (let key of changeableUserFields) {
      if (typeof req.body[key] !== "undefined") {
        user[key] = req.body[key];
      }
    }

    const result = await user.save();

    res.send(result);
  },

  getUsers: async (req, res) => {
    const allUsers = await User.findAll({
      attributes: { exclude: ["password"] },
    });

    res.send(allUsers);
  },

  getUser: async (req, res) => {
    const { username, password } = req.body;
    console.log(username)
    try {
      const logged = await User.scope('withPassword').findOne({
        where: {
          username: username,
        },
      });
      
      console.log(logged.password)

      if (!logged) {
        return res.status(404).send("user not found");
      }

      const auth = bcryptjs.compareSync(password,logged.password)

      

      res.send(logged);

    } catch (error) {
      console.log("Error logging in", error);
      res.status(500).send("internal error");
    }
  },
};
