import Properties from '../../../server/models/properties';
import nc, {NextHandler} from "next-connect"
import db from "../../../server/models/db"
import { NextApiRequest, NextApiResponse } from 'next'
import PropertyController from 'server/controllers/PropertyController';



const controller = new PropertyController();


const handler = nc()

handler.get(controller.getAllProperty)

handler.post(controller.createProperty)


export default handler