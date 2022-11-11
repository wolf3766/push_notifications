const notification = require("../model/notificationModel");
const device =require("../model/userModal");

module.exports.register_user=async(req,res)=>{ //api to register user.
    await device.create(req.body).then(function(UUID){
        res.send(UUID);
    }).catch(e=>{
        res.send(e);
        console.log(e);
    });
}

module.exports.notify=async (req,res)=>{ //api to add custom notifications.
    console.log(req.body);
    await notification.create(req.body).then(function(noti){
        res.send(noti);
    }).catch(e=>{
        res.send(e);
        console.log(e);
    });
}