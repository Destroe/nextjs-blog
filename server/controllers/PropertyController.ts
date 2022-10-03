import Property from 'server/models/properties';
import { NextApiRequest, NextApiResponse } from 'next'
import BaseController from './BaseController';
import User from 'server/models/user';
import Reviews from 'server/models/reviews'
import Categories from 'server/models/categories'


export default class PropertyController extends BaseController {

    public getAllProperty(req: NextApiRequest, res: NextApiResponse) {
        return Property.findAll({})
            .then(properties => {
                res.status(200).json({ properties });
            });
    }

    public getOneProperty(req: NextApiRequest, res: NextApiResponse) {
        const { propertyid } = req.query
        return Property.findOne({
            where: {
                id: Number(propertyid)
            },
            include: [
                {
                    model: User, as: 'owner',
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
        })
            .then(properties => {
                res.status(200).json({ properties });
                res.json({ properties })
            }
            )
    }

    public createProperty(req: NextApiRequest, res: NextApiResponse) {
        const {
            id,property_name,price,description, year_build, bed, bath, star, views, country, city, streetAddress, 
            balcony, parking,pool,beach,pet_friendly,kid_friendly,air_conditioning,categori_id, owner_user_id, customer_user_id, status_properties,createdAt,updatedAt} = req.body
        return Property.create({
            id: id,
            property_name: property_name,
            price: price,
            description: description,
            year_build: year_build,
            bed: bed,
            bath: bath,
            star: star,
            views: views,
            country: country,
            city: city,
            streetAddress: streetAddress,
            balcony: balcony,
            parking: parking,
            pool: pool,
            beach: beach,
            pet_friendly: pet_friendly,
            kid_friendly: kid_friendly,
            air_conditioning: air_conditioning,
            categori_id: categori_id,
            owner_user_id: owner_user_id,
            customer_user_id: customer_user_id,
            status_properties: status_properties,
            createdAt: createdAt,
            updatedAt: updatedAt
        })
        .then(propertiess => {

            res.json({ data: "Property created" });
            res.status(200).json({ propertiess });
        })
    }

}