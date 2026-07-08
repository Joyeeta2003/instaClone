const express = require("express")
const postController = require("../controllers/post.controller")
const postRouter = express.Router()
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage()})
const IdentifyUser = require("../middlewares/auth.middleware")

postRouter.post("/",upload.single("image"),IdentifyUser,postController.createPostController)
postRouter.get("/",IdentifyUser, postController.getPostController)
postRouter.get("/details/:postId", IdentifyUser, postController.getPostDetailsController)

// @route POST /api/posts/like/:postid
// @description like a post with the id provided in the request params

postRouter.post("/like/:postId",IdentifyUser,postController.likePostController)

module.exports = postRouter