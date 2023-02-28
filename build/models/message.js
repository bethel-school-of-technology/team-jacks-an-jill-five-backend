"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageFactory = exports.Message = void 0;
const sequelize_1 = require("sequelize");
class Message extends sequelize_1.Model {
}
exports.Message = Message;
function MessageFactory(sequelize) {
    Message.init({
        messageId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        message: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        username: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
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
        tableName: 'messages',
        sequelize
    });
}
exports.MessageFactory = MessageFactory;
