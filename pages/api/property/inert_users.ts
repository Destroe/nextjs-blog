import Properties from '../../../server/models/properties';
import nc, {NextHandler} from "next-connect"
import db from "../../../server/models/db"
import { NextApiRequest, NextApiResponse } from 'next'
import User from '../../../server/models/user';
import Reviews from '../../../server/models/reviews'
import Categories from '../../../server/models/categories'






const handler = nc({
  onError: (error, req: NextApiRequest ,res: NextApiResponse, next: NextHandler) => {
    console.error(error.stack);
    res.status(501).json({error: `Sorry something Happened! ${error.message}`});
  },
  onNoMatch: (req: NextApiRequest ,res: NextApiResponse) => {
    res.status(405).json({error: `Method ${req.method} Not Allowed`});
  },
})

handler.get(
  async (req: NextApiRequest ,res: NextApiResponse, next: NextHandler) => { 
    const properties = await Properties.findAll(
        {
            include:[
            {
                model: User, as: 'owner'
            },
            {
                model: User, as: 'customer'
            },
            {
                model: Reviews, as: 'reviews'
            },
            {
                model: Categories, as: 'categories'
            }
            ]
        }
        
    );
    res.status(200).json({ properties });  
});

export default handler

        // include: [
        //     {
        //     model: User,
        //     as: 's_user',
        //     attributes: ['owner_user_id']
            // }
        // ]