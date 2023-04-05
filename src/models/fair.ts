import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
// const comment = require("./comment");
// import { Comment } from "./comment";
import { User } from "./user";

export class Fair extends Model<InferAttributes<Fair>, InferCreationAttributes<Fair>>{
    declare fairId: number;
    declare fairTitle: string;
    declare fairCity: string;
    declare fairState: string;
    declare fairZip: string;
    declare fairStartDate: string;
    declare fairEndDate: string;
    declare fairDescription: string;
    declare fairWebsite: string;
    declare fairImage: string;
    declare UserUserId: number;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function FairFactory(sequelize: Sequelize) {
    Fair.init({
        fairId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        fairTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        fairCity: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        fairState: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        fairZip: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        fairStartDate: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        fairEndDate: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        fairDescription: {
            type: DataTypes.TEXT,
            allowNull: true,
            unique: false
        },
        fairWebsite: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        fairImage: {
            type: DataTypes.STRING(512),
            allowNull: true,
            unique: false
        },
        UserUserId: {
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
        tableName: 'fairs',
        sequelize
    });

    Fair.belongsTo(User);

    // Fair.hasMany(Comment);
};

// Re-coded this into the CommentFactory
// export function AssociateUserFairPost() {
//     User.hasMany(Fair, { foreignKey: 'userId' });
//     Fair.belongsTo(User, { foreignKey: 'userId' });
// };