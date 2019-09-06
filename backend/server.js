const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port =process.env.PORT || 6000;  //Checking PORT 

//**dataBase_Connectiion**//
mongoose.connect("mongodb+srv://ARP_Tool:GU1UbKIVxO9vtNjH@cluster0-etshk.mongodb.net/test?retryWrites=true&w=majority"
,{ useNewUrlParser: true})
.then(() => {
  console.log("connected to data base");
})
.catch(() => {
  console.log("connection failed");
});


app.use(cors());
app.use(express.json());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin,X-requested-With,Content-Type,application/json,Accept,Authorization");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,DELETE,OPTIONS");
});
  

app.listen(port ,() => {
 console.log(`port is running on the port:${port}`);
});