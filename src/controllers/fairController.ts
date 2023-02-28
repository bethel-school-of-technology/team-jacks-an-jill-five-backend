import { RequestHandler } from "express";
import { Fair } from "../models/fair";

export const getAllFairs: RequestHandler = async (req, res, next) => {
    let fairs = await Fair.findAll();
    res.status(200).json(fairs);
}

export const createFair: RequestHandler = async (req, res, next) => {
    let newFair: Fair = req.body;
    if (newFair.fairTitle && newFair.username) {
        let created = await Fair.create(newFair);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
}

export const getFair: RequestHandler = async (req, res, next) => {
    let fairId = req.params.fairId;
    let fairFound = await Fair.findByPk(fairId);
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
        && newFair.fairTitle && newFair.username) {
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