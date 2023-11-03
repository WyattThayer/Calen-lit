import { User, Event, db } from "../Database/model.js";

export const handlerFunctions = {
  //* EVENTS
  createEvent: async (req, res) => {
    const { desc, tag, food, costume, present } = req.body;

    const newEvent = await User.createEvent({});
  },

  deleteEvent: async (req, res) => {
    const { desc, tag, food, costume, present } = req.body;

    const newEvent = await Event.destroy({});
  },

  updateEvent: async (req, res) => {
    // const { desc, tag, food, costume, present } = req.body;
    const changeableEventFields = [
      "desc",
      "tag",
      "place",
      "food",
      "costume",
      "present",
      "date",
      "time",
    ];
    const event = await Event.findByPk(req.params.id);

    for (let key of changeableEventFields) {
      if (typeof req.body[key] !== "undefined") {
        event[key] = req.body[key];
      }
    }
    const result = await event.save();
    res.send(result);
  },

  getEvents: async (req, res) => {
    const allEvents = await Event.findAll();
    res.json(allEvents);
  },

  getEvent: async (req, res) => {
    const event = await Event.findByPk(req.params.id);
    res.json(event);
  },

  //* USERS
  createUser: async (req, res) => {
    const { desc, tag, food, costume, present } = req.body;

    const newUser = await User.createUser({});
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
    const user = await User.findByPk(req.params.id, );
    res.send(user);
  },
};
