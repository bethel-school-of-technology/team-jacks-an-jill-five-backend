"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFair = exports.updateFair = exports.getFair = exports.createFair = exports.getAllFairs = void 0;
const fair_1 = require("../models/fair");
const auth_1 = require("../services/auth");
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
    newFair.userId = user.userId;
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
    let fairId = req.params.fairId;
    let fairFound = await fair_1.Fair.findByPk(fairId);
    if (fairFound) {
        res.status(200).json(fairFound);
    }
    else {
        res.status(404).json();
    }
};
exports.getFair = getFair;
const updateFair = async (req, res, next) => {
    let fairId = req.params.fairId;
    let newFair = req.body;
    let fairFound = await fair_1.Fair.findByPk(fairId);
    if (fairFound && fairFound.fairId == newFair.fairId
        && newFair.fairTitle && newFair.userId) {
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
