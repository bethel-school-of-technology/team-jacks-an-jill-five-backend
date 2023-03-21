"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateUserCommentPost = exports.CommentFactory = exports.Comment = void 0;
const sequelize_1 = require("sequelize");
const user_1 = require("./user");
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
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
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
        tableName: 'comments',
        sequelize
    });
}
exports.CommentFactory = CommentFactory;
;
function AssociateUserCommentPost() {
    user_1.User.hasMany(Comment, { foreignKey: 'userId' });
    Comment.belongsTo(user_1.User, { foreignKey: 'userId' });
}
exports.AssociateUserCommentPost = AssociateUserCommentPost;
;
