import { Model, DataTypes, BuildOptions } from 'sequelize';
import db from './db';

interface IReviews extends Model {
    id: number;
    id_user: number;
    description: string;
    id_property: number;
    createdAt: Date;
    updatedAt: Date;
}

const Reviews = db.define('reviews', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },

    id_user: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    id_property: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },

    createdAt: {
        type: DataTypes.BIGINT,
        allowNull: false
    },

    updatedAt: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
})

export default Reviews;