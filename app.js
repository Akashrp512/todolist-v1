//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
  
    var today = new Date();
    if(today.getDay() === 6 || today.getDay() === 0){
        res.send("<h1>Yah it's the Weekend!</h1>")
    }
    else{
        res.sendFile(__dirname+ '/index.html' )
    }
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});

//use res.write to write multiple pieces of data coz res.send will only send one data