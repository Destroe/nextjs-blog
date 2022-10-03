import { Model, DataTypes, BuildOptions, Deferrable } from 'sequelize';
import db from './db';
import User from './user';
import Reviews from './reviews';
import Categories from './categories'
import PropCat from './property_category';

interface IProperties extends Model {
    id: number;
    property_name: string;
    price: number;
    description: string;
    year_build: number;
    bed: number,
    bath: number,
    star: number,
    views: number,
    country: string,
    city: string,
    streetAddess: string,
    balcony: boolean,
    parking: boolean,
    pool: boolean,
    beach: boolean,
    pet_friendly: boolean,
    kid_friendly: boolean,
    air_conditioning: boolean,
    categori_id: number,
    owner_user_id: number,
    customer_user_id: number,
    status_properties: string,
    createdAt: Date,
    updatedAt: Date
}


const Properties = db.define('properties', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },

    property_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },

    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    year_build:{
        type: DataTypes.BIGINT,

    },
    
    bed:{
        type: DataTypes.BIGINT,
    },

    bath:{
        type: DataTypes.BIGINT,
    },

    star:{
        type: DataTypes.BIGINT,
    },

    views:{
        type: DataTypes.BIGINT,
    },

    country:{
        type: DataTypes.STRING(60),
    },
    
    city:{
        type: DataTypes.STRING(60),
    },

    streetAddress:{
        type: DataTypes.STRING(60),
    },
    
    balcony:{
        type: DataTypes.BOOLEAN,
    },

    parking:{
        type: DataTypes.BOOLEAN,
    },

    pool:{
        type: DataTypes.BOOLEAN,
    },

    beach:{
        type: DataTypes.BOOLEAN,
    },

    pet_friendly:{
        type: DataTypes.BOOLEAN,
    },

    kid_friendly:{
        type: DataTypes.BOOLEAN,
    },

    air_conditioning:{
        type: DataTypes.BOOLEAN,
    },

    categori_id:{
        type: DataTypes.BIGINT,
        references: {
            model: "categori",
            key: 'id',
        },
    },

    owner_user_id:{
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: "user",
            key: 'id',
        },
    },

    customer_user_id:{
        type: DataTypes.BIGINT,
        allowNull: false,
    },

    status_properties: {
        type: DataTypes.ENUM('Free','Buzy','Repair','Ban'),
        allowNull: false,
    },

    createdAt: {
        type: DataTypes.BIGINT,
        allowNull: false
    },

    updatedAt: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
});

Properties.belongsTo(User, { as: 'owner', foreignKey: 'owner_user_id'});
Properties.belongsTo(User, { as: 'customer', foreignKey: 'customer_user_id'});
Properties.hasMany(Reviews, {as: 'reviews', foreignKey: 'id_property'});
Properties.belongsTo(Categories, {as: 'categories', foreignKey: 'categori_id'})
// Properties.belongsToMany(Categories, { through: PropCat })


export default Properties;