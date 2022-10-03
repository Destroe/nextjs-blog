import { Model, DataTypes, BuildOptions } from 'sequelize';
import db from './db';

interface ICategories extends Model {
    id: number;
    categor_name: string;
}

const Categories = db.define('categories', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },

    categor_name:{
        type: DataTypes.ENUM('House','Apartment','Loft','Townhouse'),
    },
});

export default Categories;