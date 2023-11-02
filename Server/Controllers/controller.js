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
    const { desc, tag, food, costume, present } = req.body;

    const event = await Event.findOne({});

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

    const newUser = await User.createUser({});
  },

  updateUser: async (req, res) => {
    const { desc, tag, food, costume, present } = req.body;

    const newUser = await User.createUser({});
  },

  getUsers: async (req, res) => {
    const allUsers = await User.findAll();
    res.json(allUsers);
  },

  getUser: async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  },
};
