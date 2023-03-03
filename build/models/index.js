"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const dotenv_1 = require("dotenv");
const sequelize_1 = require("sequelize");
const fair_1 = require("./fair");
(0, dotenv_1.config)();
const dbName = 'fairDB';
const username = 'root';
const password = process.env.DB_PASSWORD; // For Kyle 'Password1!'
// For Sam  'Password'
const sequelize = new sequelize_1.Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
(0, fair_1.FairFactory)(sequelize);
exports.db = sequelize;
