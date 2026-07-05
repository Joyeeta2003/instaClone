const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true, "username already exists"],
        require:true
    },
    email:{
        type:String,
        unique:[true,"email already exsist"],
        require:true
    },
    password:{
        type:String,
        unique:[true, "password already exists"]
    },
    bio:String,
    profile_image:{
        type:String,
        default:"https://ik.imagekit.io/twybpqdct/profile%20image.avif"
    }
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel