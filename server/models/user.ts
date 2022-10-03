import Properties from './properties';
import { Model, DataTypes, BuildOptions, } from 'sequelize';
import db from './db';

interface IUser extends Model {
    id: number;
    first_name: string;
    email: string;
    password: string;
    role: string;
    register_data: number;
    timezone: number;
    createdAt: Date;
    updatedAt: Date;
}

const User = db.define('users', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },

    first_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },

    password: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },

    role: {
        type: DataTypes.ENUM('Admin','Seller','Buyer','Ghost'),
        allowNull: false,
        defaultValue: 'Ghost'
    },

    register_data:{
        type: DataTypes.BIGINT,

    },

    timezone:{
        type: DataTypes.BIGINT
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

// User.hasMany(Properties, {
//     as: 'proper', 
//     sourceKey: 'id', 
//     foreignKey: 'owner_user_id' 
// });

//     User.associate = function(models:any) {

// }
    //     User.associate = (models:any) =>{
    //     User.hasMany(models.Properties, { 
    //         foreignKey: 'owner_user_id', 
    //         onDelete: 'SET NULL' });
    // }



    // User.associate = models => {
    //     User.hasMany(Properties, { as: 'properties', sourceKey: 'id', foreignKey: 'id', onDelete: 'SET NULL' });
    // }
export default User;