"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const dotenv_1 = require("dotenv");
const sequelize_1 = require("sequelize");
const comment_1 = require("./comment");
const fair_1 = require("./fair");
const user_1 = require("./user");
(0, dotenv_1.config)();
// const dbName = 'fairDB';
// const username = 'root';
// const password = 'Password1!'
const dbName = 'fairdb';
const username = 'wkhammersmith';
const password = 'jacksandjill5';
const sequelize = new sequelize_1.Sequelize(dbName, username, password, {
    // host: 'localhost',
    host: 'db4free.net',
    port: 3306,
    dialect: 'mysql'
});
(0, user_1.UserFactory)(sequelize);
(0, fair_1.FairFactory)(sequelize);
(0, comment_1.CommentFactory)(sequelize);
// Re-coded this into the CommentsFactory
// AssociateUserFairPost();
exports.db = sequelize;
