import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  id: "",
  desc: "",
  tag: "",
  food: false,
  costume: false,
  present: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      let newUsername = {
        ...state,
        username: action.payload,
      };
      console.log(`username`);
      return newUsername;

    case "SET_PASSWORD":
      let newPassword = {
        ...state,
        password: action.payload,
      };
      return newPassword;

    case "SET_ID":
      let id = {
        ...state,
        id: action.payload,
      };
      return id;
    case "SET_DESC":
      let desc = {
        ...state,
        desc: action.payload,
      };
      return desc;
    case "SET_TAG":
      let tag = {
        ...state,
        tag: action.payload,
      };
      return tag;
    case "SET_FOOD":
      let food = {
        ...state,
        food: action.payload,
      };
      return food;
    case "SET_COSTUME":
      let costume = {
        ...state,
        costume: action.payload,
      };
      return costume;
    case "SET_PRESENT":
      let present = {
        ...state,
        present: action.payload,
      };
      return present;

    default:
      console.log("hit default");
      return state;
  }
};

const store = configureStore({
  reducer: reducer,
});

export default store;
