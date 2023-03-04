"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = exports.User = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
;
function UserFactory(sequelize) {
    User.init({
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        userEmail: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        userCity: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        userState: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        userZip: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        userReferral: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        }
    }, {
        freezeTableName: true,
        tableName: 'users',
        sequelize
    });
}
exports.UserFactory = UserFactory;
;
