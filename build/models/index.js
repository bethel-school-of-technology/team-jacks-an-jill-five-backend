"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const fair_1 = require("./fair");
const user_1 = require("./user");
const dbName = 'fairDB';
const username = 'root';
const password = 'Password'; // For Kyle 'Password1!'
const sequelize = new sequelize_1.Sequelize(dbName, username, password, {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
});
(0, fair_1.FairFactory)(sequelize);
(0, user_1.UserFactory)(sequelize);
(0, fair_1.AssociateUserFairPost)();
exports.db = sequelize;
