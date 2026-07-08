const followModel = require("../models/follow.model")

async function followController(reqq,res) {
    const followerUsername = reqq.user.username
    const followeeUsername = reqq.params.username


    if (followeeUsername === followerUsername){
        return res.status(400).json({
            message:"you cannot follow yourself"
        })
    }

    const isfollowerExists = await followModel.findOne({
        username:followeeUsername
    })

    if(isfollowerExists){
        return res.status(404).json({
            message:"user you trying to follow is not exists"
        })
    }

    const isAlreadyFollowing = await followModel.findOne({
        follower:followerUsername,
        followee:followeeUsername
    })

    if(isAlreadyFollowing){
        return res.status(200).json({
            message:`you are already following ${followeeUsername}`,
            follow:isAlreadyFollowing
        })
    }

    const followRecord = await followModel.create({
        follower:followerUsername,
        followee:followeeUsername
    })

    res.status(201).json({
        message:`you are now following ${followeeUsername}`,
        follow:followRecord
    })
}

async function unfollowController(req,res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isUserfollowing = await followModel.findOne({
        follower:followerUsername,
        followee:followeeUsername
    })

    if(!isUserfollowing){
        return res.status(200).json({
            message:`you are not following ${followeeUsername}`
        })
    }

    await followModel.findByIdAndDelete(isUserfollowing._id)

    res.status(200).json({
        message:`you have unfollowed ${followeeUsername}`
    })
}

module.exports={
    followController,
    unfollowController
}