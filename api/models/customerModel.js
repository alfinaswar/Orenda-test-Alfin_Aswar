import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Customer = db.define('customers',{
    name:{
        type: DataTypes.STRING
    },
    phone:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    address:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

export default Customer;