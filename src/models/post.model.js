const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    img_url:{
        type:String,
        require:[true,"image url is require for the post"]
    },
    user:{
        type:mongoose.Schema.type.objectId,
        ref:"users",
        require:[true,"user id is require for creating a post"]
    }
})