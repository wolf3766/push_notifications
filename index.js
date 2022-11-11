const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const socket = require("socket.io");
const api=require('./Routes/api')
const notification = require("../model/notificationModel");
const device =require("../model/userModal");


const app = express();

app.use(cors());
app.use(express.json());
app.use(api);

mongoose
  .connect("mongodb://localhost:27017/notif", { //while hoisting change its local address with mongoose deployed one. 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

  const PORT = process.env.PORT || 8080;

  const server = app.listen(PORT, () =>
  console.log(`Server started on ${PORT}`)
);

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",// change to frontend app link
    credentials: true,
  },
});


io.on("connection",(socket)=>{
    const Device=device.findOne({
        DeviceId:socket.id,
    });
    socket.on("send",(data)=>{ 
        const Data=notification.findOne({
          app:Device
        })
        socket.to(Device).emit("recieved",Data);
    })
})
