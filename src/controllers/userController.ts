import { RequestHandler } from "express";
import { Fair } from "../models/fair";
import { User } from "../models/user";
import { comparePasswords, hashPassword, signUserToken, verifyUser } from "../services/auth";


export const createUser: RequestHandler = async (req, res, next) => {
    let newUser: User = req.body;
    if (newUser.username && newUser.password) {
        let hashedPassword = await hashPassword(newUser.password);
        newUser.password = hashedPassword;
        let created = await User.create(newUser);
        res.status(201).json({
            username: created.username,
            userId: created.userId
        });
    }
    else {
        res.status(400).send('Username and password required');
    }
};

export const loginUser: RequestHandler = async (req, res, next) => {

    let existingUser: User | null = await User.findOne({
        where: { username: req.body.username }
    });

    if (existingUser) {
        let passwordsMatch = await comparePasswords(req.body.password, existingUser.password);

        if (passwordsMatch) {
            let token = await signUserToken(existingUser);
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

export const updateUser: RequestHandler = async (req, res, next) => {
    let user: User | null = await verifyUser(req);

    if (!user) {
        return res.status(401).send();
    }

    let userId = req.params.userId
    let updatedUser: User = req.body;

    let userFound = await User.findByPk(userId);

    if (userFound && userFound.userId == updatedUser.userId
        && updatedUser.userState && updatedUser.userCity
        && updatedUser.userZip && updatedUser.userEmail
        && updatedUser.userImage && updatedUser.username && updatedUser) {
        await User.update(updatedUser, {
            where: { userId: userId }
        });
        res.status(200).json();
    } else {
        res.status(400).json();
    }
};

export const getCurrentUser: RequestHandler = async (req, res, next) => {
    let user: User | null = await verifyUser(req);

    if (!user) {
        return res.status(401).send();
    }

    let userFound = await User.findByPk(user.userId, {
        include: Fair
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



export const getUserById: RequestHandler = async (req, res, next) => {

    let userId = req.params.userId;
    let userFound = await User.findByPk(userId, {
        include: Fair
    });

    if (userFound) {
        let { userId, username, userCity, userState, userZip, userReferral, userImage, Fairs } = userFound;
        res.status(200).json({
            userId,
            username,
            userCity,
            userState,
            userZip,
            userReferral,
            userImage,
            Fairs
        });
    }
    else {
        res.status(404).send();
    }
};