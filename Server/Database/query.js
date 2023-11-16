import {User,db} from "./model.js"

const user = await User.scope('withPassword').findOne({
//     scope:{
//         status:'withPassword'
//     }
})

console.log(user)

await db.close()