console.log("Web Serverni boshlash");
const express = require("express");
const app = express();

const fs = require("fs");


let user;
fs.readFile('./database/user.json', "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

// MongoDB chaqirish
const db = require("./server").db();

// 1.Kirish code
app.use(express.static("public"));  //MidleWare DP => public
app.use(express.json()); //MidleWeare DP => Rest API
app.use(express.urlencoded({extended: true})); // Midlware DP => Traditional API

// 2. Session code
// 3. Views code
app.set("views","views");
app.set("view engine", "ejs");

// 4. Routing code


app.post("/create-item", (req, res) => { 
    console.log("user entered /create-item");
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans")
    .insertOne({reja: new_reja}, (err, data) => {
        if (err) {
            console.log(err);
            res.end('something went wrong');
        } else {
            res.end("successfuly added")
        }
    });

});

app.get("/author", (req, res) => {
    res.render('author.ejs',{ user : user });
});




app.get("/", function (req, res) {
    console.log("user entered /");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        }else {
            
            res.render("reja", { items : data});
        }
    });
    
});

module.exports = app;




// Frontend development: BSSR(EJS) vs SPA(React)

/* API REQUEST 
        Types => Traditional API | Rest API | GraphQL API
        Structures => Header | Body
        Methods => get | post
*/        

//  PATTERN: Arcitecuture | Design

