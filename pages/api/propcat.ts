import { NextApiRequest, NextApiResponse } from 'next'
import PropCat from 'server/models/property_category';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const propcat = await PropCat.findAll({
      limit: 100,
    });
    res.status(200).json({ propcat });
  } catch (e) {
    res.status(400).json({
      error_code: 'get_propcat',
    });
  }
}