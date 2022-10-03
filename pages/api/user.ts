import User from 'server/models/user';
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await User.findAll({
      where: {role: 'Admin'},
      limit: 100,
    });
    res.status(200).json({ users });
  } catch (e) {
    res.status(400).json({
      error_code: 'get_users',
    });
  }
  console.log(req.method)
}