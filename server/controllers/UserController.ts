import User from 'server/models/user';
import { NextApiRequest, NextApiResponse } from 'next'
import BaseController from './BaseController';

export default class UserController extends BaseController {

    public getAllUsers(req: NextApiRequest, res: NextApiResponse) {
        return User.findAll({})
            .then(users => {
                res.status(200).json({ users });
            });
    }

    public getOneUsers(req: NextApiRequest, res: NextApiResponse) {
        const { usersid } = req.query
        return User.findOne({
            where:
            {
                id: Number(usersid)
            }
        })
            .then(user => {
                res.status(200).json({ user });
                res.json({ user })
            }
            )
    }

    public createUser(req: NextApiRequest, res: NextApiResponse) {
        // console.log('name:', body.data.firstName)
        // console.log('email:', body.data.email)
        // console.log('password', body.data.password)
        // console.log('role:', body.data.role)
        const {body}= req
        const { firstName, email, password, role, register_data} = body.data
        return User.create({
            // id: '131',
            first_name: firstName,
            email: email,
            password: password,
            role: role,
            register_data: register_data,
            // timezone: "31313",
            // createdAt: createdAt,
            // updatedAt: updatedAt
        })
            .then(userss => {
                res.json({ data: "Users created" });
                res.status(200).json({ userss });
            })
    }

}