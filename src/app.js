const express = require("express")
const cookieParser = require("cookie-parser")

//require Routes
const authRouter = require("./routers/auth.router")
const postRouter = require("./routers/post.router")
const userRouter = require("./routers/user.route")

const app = express()
app.use(express.json())
app.use(cookieParser())

//using routes
app.use("/api/auth", authRouter)
app.use("/api/posts", postRouter)
app.use("/api/users",userRouter)


module.exports = app