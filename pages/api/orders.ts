import { NextApiRequest, NextApiResponse } from 'next'
import Orders from 'server/models/orders';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const orders = await Orders.findAll({
      limit: 100,
    });
    res.status(200).json({ orders });
  } catch (e) {
    res.status(400).json({
      error_code: 'get_orders',
    });
  }
}