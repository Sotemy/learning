const asyncHandler = require("express-async-handler")

const Posts = require("../database/schemas/post.schema")

const postsController = asyncHandler(async (req, res) => {

    const posts = await Posts.find()

    return res.status(200).json(posts);

})

const createPostController = asyncHandler(async (req, res) => {

    if (!req.body.text){
        res.status(400)
        throw new Error('please add text')
    }

    const item = await Posts.create({
        title: req.body.title,
        text: req.body.text,
        author: req.user.id
    })

    return res.status(200).json(item);

})

module.exports = {postsController, createPostController}