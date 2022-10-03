import { Model, DataTypes, BuildOptions } from 'sequelize';
import db from './db';
import Properties from './properties'
import Categories from './categories'

interface IPropCat extends Model {
    id: number;
    categories_id: number;
    property_id: number;
}

const PropCat = db.define('property_categories', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    
    categories_id:{
        type: DataTypes.BIGINT,
    },

    property_id:{
        type: DataTypes.BIGINT,
    },
});


// Properties.belongsToMany(Categories, { through: PropCat })
// Categories.belongsToMany(Properties, { through: PropCat })

export default PropCat;