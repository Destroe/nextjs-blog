import Properties from '../../../../server/models/properties';
import nc, {NextHandler} from "next-connect"
import db from "../../../../server/models/db"
import { NextApiRequest, NextApiResponse } from 'next'
import PropertyController from 'server/controllers/PropertyController';
import User from 'server/models/user';
import Reviews from 'server/models/reviews';
import Categories from 'server/models/categories';


const controller = new PropertyController();

const handler = nc()

handler.get(controller.getOneProperty)


export default handler