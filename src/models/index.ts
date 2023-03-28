import { config } from "dotenv";
import { Sequelize } from "sequelize";
import { CommentFactory } from "./comment";
import { FairFactory } from "./fair";
import { UserFactory } from "./user";

config();

// const dbName = 'fairDB';
// const username = 'root';
// const password = 'Password1!'

const dbName = 'fairdb';
const username = 'wkhammersmith';
const password = 'jacksandjill5'

const sequelize = new Sequelize(dbName, username, password, {
    // host: 'localhost',
    host: 'db4free.net',
    port: 3306,
    dialect: 'mysql'
});

UserFactory(sequelize);
FairFactory(sequelize);
CommentFactory(sequelize);

// Re-coded this into the CommentsFactory
// AssociateUserFairPost();

export const db = sequelize;