import { Model, DataTypes, BuildOptions } from 'sequelize';
import db from './db';

interface IUOrders extends Model {
    id: number;
    owner_user_id: number;
    customer_user_id: number;
    property_id: number;
    order_data: number;
    timezone: number;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}

const Orders = db.define('orders', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },

    owner_user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },

    customer_user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },

    property_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },

    order_data: {
        type: DataTypes.BIGINT,
    },

    timezone:{
        type: DataTypes.BIGINT
    },

    price:{
        type: DataTypes.DECIMAL(10,2)
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

export default Orders;