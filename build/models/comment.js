"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentFactory = exports.Comment = void 0;
const sequelize_1 = require("sequelize");
const user_1 = require("./user");
const fair_1 = require("./fair");
class Comment extends sequelize_1.Model {
}
exports.Comment = Comment;
function CommentFactory(sequelize) {
    Comment.init({
        commentId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        commentTitle: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        UserUserId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        FairFairId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true
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
        tableName: 'comments',
        sequelize
    });
    Comment.belongsTo(user_1.User);
    Comment.belongsTo(fair_1.Fair);
    fair_1.Fair.hasMany(Comment);
}
exports.CommentFactory = CommentFactory;
;
