import Properties from 'server/models/properties';
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const properties = await Properties.findAll({
      where: {status_properties: 'Free'},
      limit: 100,
    });
    res.status(200).json({ properties });
  } catch (e) {
    res.status(400).json({
      error_code: 'get_properties',
    });
  }
}