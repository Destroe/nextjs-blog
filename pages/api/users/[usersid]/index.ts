import User from '../../../../server/models/user';
import nc, {NextHandler} from "next-connect"
import db from "../../../../server/models/db"
import { NextApiRequest, NextApiResponse } from 'next'
import UserController from 'server/controllers/UserController';


const controller = new UserController

const handler = nc()

handler.get(controller.getOneUsers)

export default handler