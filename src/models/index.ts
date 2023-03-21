import { config } from "dotenv";
import { Sequelize } from "sequelize";
import { CommentFactory } from "./comment";
import { AssociateUserFairPost, FairFactory } from "./fair";
import { UserFactory } from "./user";

config();

const dbName = 'fairdb';
const username = 'wkhammersmith';
const password = 'jacksandjill5'

const sequelize = new Sequelize(dbName, username, password, {
    host: 'db4free.net',
    port: 3306,
    dialect: 'mysql'
});

UserFactory(sequelize);
FairFactory(sequelize);
CommentFactory(sequelize);
AssociateUserFairPost();

export const db = sequelize;