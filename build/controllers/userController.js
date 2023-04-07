"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getCurrentUser = exports.updateUser = exports.loginUser = exports.createUser = void 0;
const fair_1 = require("../models/fair");
const user_1 = require("../models/user");
const auth_1 = require("../services/auth");
const createUser = async (req, res, next) => {
    let newUser = req.body;
    if (newUser.username && newUser.password) {
        let hashedPassword = await (0, auth_1.hashPassword)(newUser.password);
        newUser.password = hashedPassword;
        let created = await user_1.User.create(newUser);
        res.status(201).json({
            username: created.username,
            userId: created.userId
        });
    }
    else {
        res.status(400).send('Username and password required');
    }
};
exports.createUser = createUser;
const loginUser = async (req, res, next) => {
    let existingUser = await user_1.User.findOne({
        where: { username: req.body.username }
    });
    if (existingUser) {
        let passwordsMatch = await (0, auth_1.comparePasswords)(req.body.password, existingUser.password);
        if (passwordsMatch) {
            let token = await (0, auth_1.signUserToken)(existingUser);
            res.status(200).json({ token });
        }
        else {
            res.status(401).json('Invalid password');
        }
    }
    else {
        res.status(401).json('Invalid username');
    }
};
exports.loginUser = loginUser;
const updateUser = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    if (!user) {
        return res.status(401).send();
    }
    let userId = req.params.userId;
    let updatedUser = req.body;
    let userFound = await user_1.User.findByPk(userId);
    if (userFound && userFound.userId == updatedUser.userId
        && updatedUser.userState && updatedUser.userCity
        && updatedUser.userZip && updatedUser.userEmail
        && updatedUser.userImage && updatedUser.username && updatedUser) {
        await user_1.User.update(updatedUser, {
            where: { userId: userId }
        });
        res.status(200).json();
    }
    else {
        res.status(400).json();
    }
};
exports.updateUser = updateUser;
const getCurrentUser = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    let userFound = await user_1.User.findByPk(user?.userId, {
        include: fair_1.Fair
    });
    if (userFound) {
        let { userId, username, userCity, userState, userZip, userEmail, userReferral, userImage, Fairs } = userFound;
        res.status(200).json({
            userId,
            username,
            userCity,
            userState,
            userZip,
            userEmail,
            userReferral,
            userImage,
            Fairs
        });
    }
    else {
        res.status(401).send();
    }
};
exports.getCurrentUser = getCurrentUser;
const getUserById = async (req, res, next) => {
    let userId = req.params.userId;
    let userFound = await user_1.User.findByPk(userId, {
        include: fair_1.Fair
    });
    if (userFound) {
        let { userId, username, userCity, userState, userReferral, userImage, Fairs } = userFound;
        res.status(200).json({
            userId,
            username,
            userCity,
            userState,
            userReferral,
            userImage,
            Fairs
        });
    }
    else {
        res.status(404).send();
    }
};
exports.getUserById = getUserById;
