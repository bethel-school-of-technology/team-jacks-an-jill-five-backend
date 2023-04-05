import { RequestHandler } from "express";
import { Comment } from "../models/comment";
import { Fair } from "../models/fair";
import { User } from "../models/user";
import { verifyUser } from "../services/auth";

export const getAllFairs: RequestHandler = async (req, res, next) => {
    let fairs = await Fair.findAll();
    res.status(200).json(fairs);
}

export const createFair: RequestHandler = async (req, res, next) => {
    let user: User | null = await verifyUser(req);

    if (!user) {
        return res.status(403).send();
    }

    let newFair: Fair = req.body;
    newFair.UserUserId = user.userId;

    if (newFair.fairTitle) {
        let created = await Fair.create(newFair);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
}

export const getFair: RequestHandler = async (req, res, next) => {
    // Comment.create({commentTitle: 'Test 2', FairFairId: 4});
    let fairId = req.params.fairId;
    let fairFound = await Fair.findByPk(fairId, {
        include: [Comment, User]
    });

    if (fairFound) {
        res.status(200).json(fairFound);
    }
    else {
        res.status(404).json();
    }
}

export const updateFair: RequestHandler = async (req, res, next) => {
    let fairId = req.params.fairId;
    let newFair: Fair = req.body;

    let fairFound = await Fair.findByPk(fairId);

    if (fairFound && fairFound.fairId == newFair.fairId
        && newFair.fairTitle && newFair) {
        await Fair.update(newFair, {
            where: { fairId: fairId }
        });
        res.status(200).json();
    }
    else {
        res.status(400).json();
    }
}

export const deleteFair: RequestHandler = async (req, res, next) => {
    let fairId = req.params.fairId;
    let fairFound = await Fair.findByPk(fairId);

    if (fairFound) {
        await Fair.destroy({
            where: { fairId: fairId }
        });
        res.status(200).json();
    }
    else {
        res.status(404).json();
    }
}