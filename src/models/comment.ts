import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { User } from "./user";

export class Comment extends Model<InferAttributes<Comment>, InferCreationAttributes<Comment>>{
    declare commentId: number;
    declare commentTitle: string;
    declare userId: number;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function CommentFactory(sequelize: Sequelize) {
    Comment.init({
        commentId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
            commentTitle: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
 
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        freezeTableName: true,
        tableName: 'comments',
        sequelize
    });
};

export function AssociateUserCommentPost() {
    User.hasMany(Comment, { foreignKey: 'userId' });
    Comment.belongsTo(User, { foreignKey: 'userId' });
};