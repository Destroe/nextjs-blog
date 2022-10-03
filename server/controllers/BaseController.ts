import { NextApiRequest, NextApiResponse } from 'next'

export default class BaseController{

    public onError(error:any, req: NextApiRequest ,res: NextApiResponse)  {
        console.error(error.stack);
        res.status(501).json({error: `Sorry something Happened! ${error.message}`});
    };
    
    public onNoMatch(req: NextApiRequest ,res: NextApiResponse) {
        res.status(405).json({error: `Method ${req.method} Not Allowed`});
    }
}