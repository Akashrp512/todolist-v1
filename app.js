//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const items = ['buy food', 'cook food'] ;
const WorkList = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  
    const today = new Date();
    const options = {
        weekday: "long",
        day: 'numeric',
        month: "long"
    };
    const day = today.toLocaleDateString("en-US", options);

    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", (req,res)=>{
  const  item = req.body.newItem;
     if(req.body.list === 'Work'){
       WorkList.push(item);
       res.redirect("/work");
     } else {
       items.push(item);
       res.redirect("/");
     }
    items.push(item);
  res.redirect("/");
});

app.get("/work", (req,res)=>{
   res.render("list",{listTitle: "Work List", newListItems:WorkList})
});

app.post("/work", (req,res)=>{
  let item= req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});

//use res.write to write multiple pieces of data coz res.send will only send one data