import { NextApiRequest, NextApiResponse } from 'next'
import Reviews from 'server/models/reviews';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const reviews = await Reviews.findAll({
      limit: 100,
    });
    res.status(200).json({ reviews });
  } catch (e) {
    res.status(400).json({
      error_code: 'get_reviews',
    });
  }
}