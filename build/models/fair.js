"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairFactory = exports.Fair = void 0;
const sequelize_1 = require("sequelize");
// const comment = require("./comment");
// import { Comment } from "./comment";
const user_1 = require("./user");
class Fair extends sequelize_1.Model {
}
exports.Fair = Fair;
function FairFactory(sequelize) {
    Fair.init({
        fairId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        fairTitle: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        fairCity: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        fairState: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        fairZip: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        fairStartDate: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        fairEndDate: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        fairDescription: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
            unique: false
        },
        fairWebsite: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        fairImage: {
            type: sequelize_1.DataTypes.STRING(512),
            allowNull: true,
            unique: false
        },
        UserUserId: {
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
        tableName: 'fairs',
        sequelize
    });
    Fair.belongsTo(user_1.User);
    // Fair.hasMany(Comment);
}
exports.FairFactory = FairFactory;
;
// Re-coded this into the CommentFactory
// export function AssociateUserFairPost() {
//     User.hasMany(Fair, { foreignKey: 'userId' });
//     Fair.belongsTo(User, { foreignKey: 'userId' });
// };
