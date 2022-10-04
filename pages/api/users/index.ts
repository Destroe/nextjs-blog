
import nc, {NextHandler} from "next-connect"
import { NextApiRequest, NextApiResponse } from 'next'
import BaseController from "server/controllers/BaseController";
import UserController from "server/controllers/UserController";


const controller = new UserController();

const handler = nc()

handler.get(controller.getAllUsers)

handler.post(controller.createUser)


export default handler