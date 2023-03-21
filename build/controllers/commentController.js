"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.updateComment = exports.getComment = exports.createComment = exports.getAllComments = void 0;
const comment_1 = require("../models/comment");
const auth_1 = require("../services/auth");
const getAllComments = async (req, res, next) => {
    let comments = await comment_1.Comment.findAll();
    res.status(200).json(comments);
};
exports.getAllComments = getAllComments;
const createComment = async (req, res, next) => {
    let user = await (0, auth_1.verifyUser)(req);
    if (!user) {
        return res.status(403).send();
    }
    let newComment = req.body;
    newComment.userId = user.userId;
    if (newComment.commentTitle) {
        let created = await comment_1.Comment.create(newComment);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
};
exports.createComment = createComment;
const getComment = async (req, res, next) => {
    let commentId = req.params.commentId;
    let commentFound = await comment_1.Comment.findByPk(commentId);
    if (commentFound) {
        res.status(200).json(commentFound);
    }
    else {
        res.status(404).json();
    }
};
exports.getComment = getComment;
const updateComment = async (req, res, next) => {
    let commentId = req.params.commentId;
    let newComment = req.body;
    let commentFound = await comment_1.Comment.findByPk(commentId);
    if (commentFound && commentFound.commentId == newComment.commentId
        && newComment.commentTitle && newComment.userId) {
        await comment_1.Comment.update(newComment, {
            where: { commentId: commentId }
        });
        res.status(200).json();
    }
    else {
        res.status(400).json();
    }
};
exports.updateComment = updateComment;
const deleteComment = async (req, res, next) => {
    let commentId = req.params.commentId;
    let commentFound = await comment_1.Comment.findByPk(commentId);
    if (commentFound) {
        await comment_1.Comment.destroy({
            where: { commentId: commentId }
        });
        res.status(200).json();
    }
    else {
        res.status(404).json();
    }
};
exports.deleteComment = deleteComment;