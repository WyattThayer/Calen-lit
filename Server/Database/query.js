import { User, db } from "./model.js";

const user = await User.scope("withPassword").findOne();

console.log(user);

await db.close();
