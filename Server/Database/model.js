import connectToDB from "./connectdb.js";
import util from "util";
import { DataTypes, Model } from "sequelize";

const db = await connectToDB("postgresql:///calendar");

class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "user",
    sequelize: db,
  }
);

class Event extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tag: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
    },
    date: {
      type: DataTypes.DATE,
      // allowNull: false,
    },
    place: {
      type: DataTypes.STRING,
    },
    food: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    costume: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    present: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    modelName: "event",
    sequelize: db,
  }
);

User.hasMany(Event, { foreignKey: "userId" });
Event.belongsTo(User, { foreignKey: "userId", allowNull: false });

export { User, Event, db };
