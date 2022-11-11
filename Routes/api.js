const express=require("express");
const router=express.Router();
const routecontroller=require("../Controller/deviceController");

router.post('/register',routecontroller.register_user);
router.post('.meals',routecontroller.notify)

module.exports=router;
