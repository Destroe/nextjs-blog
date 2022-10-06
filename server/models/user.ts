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

// async function hashPassword(user, options) {
//     if (user.changed('password')) {
//       const { password } = user
//       const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
//       user.password = hashedPassword
//     }
//   }

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
},
{
    hooks : {
        beforeCreate : (User, options) => {
            User.dataValues.createdAt = Math.floor(Date.now() / 1000);
            User.dataValues.updatedAt = Math.floor(Date.now() / 1000);
        },
        beforeUpdate : (record, options) => {
            User.dataValues.updatedAt = Math.floor(Date.now() / 1000);
        }
    }
});



export default User;