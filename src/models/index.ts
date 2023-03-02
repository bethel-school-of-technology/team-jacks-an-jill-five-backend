import { Sequelize } from "sequelize";
import { FairFactory } from "./fair";

const dbName = 'fairDB';
const username = 'root';
const password = 'Password1!';  // For Kyle 'Password1!'
                              // For Sam  'Password'

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

FairFactory(sequelize);

export const db = sequelize;