const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    imgUrl:{
        type:String,
        require:[true,"image url is require for the post"]
    },
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: [true, "User ID is required for creating a post"]
}
})

const postModel = mongoose.model("posts", postSchema)

module.exports = postModel