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
const mongodb = require("mongodb");

// 1.Kirish code
app.use(express.static("public"));  //MidleWare DP => public
app.use(express.json()); //MidleWeare DP => Rest API
app.use(express.urlencoded({extended: true})); // Midlware DP => Traditional API

// 2. Session code
// 3. Views code
app.set("views","views");
app.set("view engine", "ejs");

// 4. Routing code

// console.log("1st Step: Client entered to Front end")
app.get("/", function (req, res) {
    console.log("user entered /");
    //console.log("2nd Step: Cliet API orqali Backendga request jonatadi")

    //console.log("3rd Step: Back-end => Dabasega request jonatadi")
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            //console.log("4th Step: Database => Backendga malumotni olib response jonatadi")
            // console.log(data)
           // console.log("5th Step: Database => Back-end Front-endga response jonatadi")
            res.render("reja", { items : data});
        }
    });
    
});


app.post("/create-item", (req, res) => { 
    console.log("user entered /create-item");
// Step 3rd: Front-enddan kelgan malumotni qabul qilib olindi
    const new_reja = req.body.reja;
// Step 4th: Front-enddan kelgan malumot DBga insert qilindi    
    db.collection("plans")
    .insertOne({reja: new_reja}, (err, data) => {
// Step 5th: Databasedagi malumot Front-endga yubordi        
        res.json(data.ops[0]);
       
    });

});
// Step 4th: Back-end front-endan sorovni qabul qilib oladi
app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    // Step 5th: Databasedan 1ta malumot ochiriladi
    db.collection("plans").deleteOne( {_id : new mongodb.ObjectId(id)},
    // Step 6th: Front-endga javob yuboradi
     function(err, data) {
        res.json({state: "succes"} );
    }
  );
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate({_id: new mongodb.ObjectId(data.id)}, {$set: {reja: data.new_input} },
    function(err,data) {
        res.json({state: "succes"} );
    });
});

app.post("/delete-all", (req,res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({state: "Hamma rejalar o'chirildi"});
        });   
    }
});

app.get("/author", (req, res) => {
    res.render('author.ejs',{ user : user });
});




module.exports = app;




// Frontend development: BSSR(EJS) vs SPA(React)

/* API REQUEST 
        Types => Traditional API | Rest API | GraphQL API
        Structures => Header | Body
        Methods => get | post
*/        

//  PATTERN: Arcitecuture | Design

