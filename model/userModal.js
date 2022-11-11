const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
    DeviceId:{
        type:String,
        unique:true,
        required:true
    },
    userToken:Array
});

module.exports=mongoose.model("Users",UserSchema);