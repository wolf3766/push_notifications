const mongoose=require("mongoose");

const notificationSchema=mongoose.Schema({
    tile:{
        type:String,
        required:true,
        unique:true
    }, body:{
        type:String,
        requred:true
    },app:{
        type:String
    },userId:{
        type:String
    }
});

module.exports=mongoose.model("notification",notificationSchema);