const express = require("express");
const {postsController, createPostController} = require("../controllers/posts.controllers");

const {useAuth} = require("../middlewares/useAuth");

const postsRouter = express.Router();

postsRouter.get('/posts', useAuth, postsController)
postsRouter.post('/posts', useAuth, createPostController)


module.exports = postsRouter