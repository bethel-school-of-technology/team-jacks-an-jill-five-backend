"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateUserFairPost = exports.FairFactory = exports.Fair = void 0;
const sequelize_1 = require("sequelize");
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
            allowNull: false,
            unique: false
        },
        fairEndDate: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        fairDescription: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: false
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
        tableName: 'fairs',
        sequelize
    });
}
exports.FairFactory = FairFactory;
;
function AssociateUserFairPost() {
    user_1.User.hasMany(Fair, { foreignKey: 'userId' });
    Fair.belongsTo(user_1.User, { foreignKey: 'userId' });
}
exports.AssociateUserFairPost = AssociateUserFairPost;
;
