import { Sequelize } from "sequelize";
import { AssociateUserFairPost, FairFactory } from "./fair";
import { UserFactory } from "./user";

const dbName = 'fairDB';
const username = 'root';
const password = 'Password';  // For Kyle 'Password1!'


const sequelize = new Sequelize(dbName, username, password, {
    host: '127.0.0.1', // or 'localhost'
    port: 3306,
    dialect: 'mysql'
});

FairFactory(sequelize);
UserFactory(sequelize);
AssociateUserFairPost()

export const db = sequelize;