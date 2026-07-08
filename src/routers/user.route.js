const express = require("express")
const userController = require("../controllers/user.controller")
const { route } = require("./post.router")
const IdentifyUser = require("../middlewares/auth.middleware")

const userRouter = express.Router()

// @route Post /api/user/follow/:username
// @description follow a user
//@access private
userRouter.post("/follow/:username", IdentifyUser, userController.followController)
userRouter.post("/unfollow/:username", IdentifyUser, userController.unfollowController)

module.exports = userRouter