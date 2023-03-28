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
            unique: true
        },
        //     userId: {
        //         type: DataTypes.INTEGER,
        //         allowNull: false
        //   },
        //     fairId: {
        //         type: DataTypes.INTEGER,
        //         allowNull: false
        // },
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
    user_1.User.belongsToMany(fair_1.Fair, { through: Comment });
    fair_1.Fair.belongsToMany(user_1.User, { through: Comment });
}
exports.CommentFactory = CommentFactory;
;
