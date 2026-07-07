const mongoose = require("mongoose")

const followSchema = new mongoose.Schema({
    follower:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        require:[true,"follower is require"]
    },
    followee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        require:[true,"follower is require"]
    },
    createdAt:{
        timestamps:true
    }
})

const followModel = mongoose.model("follows",followSchema)

module.exports = followModel