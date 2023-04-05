import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { User } from "./user";
import { Fair } from "./fair"

export class Comment extends Model<InferAttributes<Comment>, InferCreationAttributes<Comment>>{
    declare commentId: number;
    declare commentTitle: string;
    declare UserUserId: number;
    declare FairFairId: number;
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
            unique: false
        },
        UserUserId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        FairFairId: {
            type: DataTypes.INTEGER,
            allowNull: true
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

    Comment.belongsTo(User);
    Comment.belongsTo(Fair);
    Fair.hasMany(Comment)

    // User.belongsToMany(Fair, { through: Comment });
    // Fair.belongsToMany(User, { through: Comment });
    // User.belongsToMany(Fair, { through: Comment, foreignKey: "userId" });
    // Fair.belongsToMany(User, { through: Comment, foreignKey: "movieId" });  
};

