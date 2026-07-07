const express = require("express")
const postController = require("../controllers/post.controller")
const postRouter = express.Router()
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage()})
const IdentifyUser = require("../middlewares/auth.middleware")

postRouter.post("/",upload.single("image"),IdentifyUser,postController.createPostController)
postRouter.get("/",IdentifyUser, postController.getPostController)
postRouter.get("/details/:postId", IdentifyUser, postController.getPostDetailsController)

module.exports = postRouter