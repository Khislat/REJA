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


app.post("/create-item", (req, res) => { // Bu kod serverga kelayotgan POST so‘rovdagi ma'lumotlarni o‘qiydi va ularga javoban oddiy JSON javob qaytaradi.
   console.log(req.body);
   res.json({test: "I know your password"});
});

app.get("/author", (req, res) => {
    res.render('author.ejs',{ user : user });
});




app.get("/", function (req, res) {
    res.render("reja");
});

module.exports = app;




// Frontend development: BSSR(EJS) vs SPA(React)

/* API REQUEST 
        Types => Traditional API | Rest API | GraphQL API
        Structures => Header | Body
        Methods => get | post
*/        

//  PATTERN: Arcitecuture | Design

