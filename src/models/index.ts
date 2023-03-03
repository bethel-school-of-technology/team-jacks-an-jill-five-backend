import { config } from "dotenv";
import { Sequelize } from "sequelize";
import { AssociateUserFairPost, FairFactory } from "./fair";
import { UserFactory } from "./user";

config();

const dbName = 'fairDB';
const username = 'root';
const password = process.env.DB_PASSWORD  // For Kyle 'Password1!'
                              // For Sam  'Password'

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

UserFactory(sequelize);
FairFactory(sequelize);
AssociateUserFairPost();

export const db = sequelize;