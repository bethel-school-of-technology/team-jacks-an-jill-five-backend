"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFair = exports.updateFair = exports.searchFairs = exports.getFair = exports.createFair = exports.getAllFairs = void 0;
const comment_1 = require("../models/comment");
const fair_1 = require("../models/fair");
const user_1 = require("../models/user");
const auth_1 = require("../services/auth");
const sequelize_1 = require("sequelize");
const getAllFairs = async (req, res, next) => {
    let fairs = await fair_1.Fair.findAll();
    res.status(200).json(fairs);
};
exports.getAllFairs = getAllFairs;
const createFair = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    if (!user) {
        return res.status(403).send();
    }
    let newFair = req.body;
    newFair.UserUserId = user.userId;
    if (newFair.fairTitle) {
        let created = await fair_1.Fair.create(newFair);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
};
exports.createFair = createFair;
const getFair = async (req, res, next) => {
    // Comment.create({commentTitle: 'Test 2', FairFairId: 4});
    let fairId = req.params.fairId;
    let fairFound = await fair_1.Fair.findByPk(fairId, {
        include: [comment_1.Comment, user_1.User]
    });
    if (fairFound) {
        res.status(200).json(fairFound);
    }
    else {
        res.status(404).json();
    }
};
exports.getFair = getFair;
const searchFairs = async (req, res, next) => {
    // Comment.create({commentTitle: 'Test 2', FairFairId: 4});
    let searchQuery = req.params.searchQuery;
    let fairs = await fair_1.Fair.findAll({
        where: {
            [sequelize_1.Op.or]: [
                {
                    fairTitle: { [sequelize_1.Op.like]: `%${searchQuery}%` }
                },
                {
                    fairCity: { [sequelize_1.Op.like]: `%${searchQuery}%` }
                },
                {
                    fairState: { [sequelize_1.Op.like]: `%${searchQuery}%` }
                },
            ],
        }
    });
    if (fairs) {
        res.status(200).json(fairs);
    }
    else {
        res.status(404).json();
    }
};
exports.searchFairs = searchFairs;
const updateFair = async (req, res, next) => {
    let fairId = req.params.fairId;
    let newFair = req.body;
    let fairFound = await fair_1.Fair.findByPk(fairId);
    if (fairFound && fairFound.fairId == newFair.fairId
        && newFair.fairTitle && newFair) {
        await fair_1.Fair.update(newFair, {
            where: { fairId: fairId }
        });
        res.status(200).json();
    }
    else {
        res.status(400).json();
    }
};
exports.updateFair = updateFair;
const deleteFair = async (req, res, next) => {
    let fairId = req.params.fairId;
    let fairFound = await fair_1.Fair.findByPk(fairId);
    if (fairFound) {
        await fair_1.Fair.destroy({
            where: { fairId: fairId }
        });
        res.status(200).json();
    }
    else {
        res.status(404).json();
    }
};
exports.deleteFair = deleteFair;
