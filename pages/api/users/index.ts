
import nc, {NextHandler} from "next-connect"
import { NextApiRequest, NextApiResponse } from 'next'
import BaseController from "server/controllers/BaseController";
import UserController from "server/controllers/UserController";


const controller = new UserController();

const handler = nc()


handler.get(controller.getAllUsers)



// handler.post(
//   async (req: NextApiRequest ,res: NextApiResponse, next: NextHandler) => {
//     console.log('req.body',req.body)
//       try {
//         const {id, first_name,email,password, role, register_data, timezone,createdAt,updatedAt} = req.body
//         const userss = await User.create({
//          id: id,
//          first_name: first_name,
//          email: email,
//          password: password,
//          role: role,
//          register_data: register_data,
//          timezone: timezone,
//          createdAt: createdAt,
//          updatedAt: updatedAt
//         });
//         res.json({data:"Users created"});
//         res.status(200).json({ userss });  
//       } catch (error) {
//         next(error);
//       }
// })


export default handler