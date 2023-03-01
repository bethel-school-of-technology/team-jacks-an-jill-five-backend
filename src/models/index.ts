import { Sequelize } from "sequelize";
import { FairFactory } from "./fair";

const dbName = 'fairDB';
const username = 'root';
const password = 'Password';  // For Kyle 'Password1!'


const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

FairFactory(sequelize);

export const db = sequelize;