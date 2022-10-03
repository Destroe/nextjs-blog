import { NextApiRequest, NextApiResponse } from 'next'
import Categories from 'server/models/categories';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const categories = await Categories.findAll({
      limit: 100,
    });
    res.status(200).json({ categories });
  } catch (e) {
    res.status(400).json({
      error_code: 'get_categories',
    });
  }
}