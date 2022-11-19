//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
  
    var today = new Date();
    if(today.getDay() === 6 || today.getDay() === 0){
        res.send("Yah it's the Weekend!")
    }
    else{
        res.send("Boo! I have to Work")
    }
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
