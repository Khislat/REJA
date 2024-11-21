console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");


let user;
fs.readFile('./database/user.json', "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

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
   res.json({test: "You loser"});
});

app.get("/author", (req, res) => {
    res.render('author.ejs',{ user : user });
});




app.get("/", function (req, res) {
    res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT,function () {
    console.log(`The server is running succesfully on port: ${PORT}`);
});


// Frontend development: BSSR(EJS) vs SPA(React)

/* API REQUEST 
        Types => Traditional API | Rest API | GraphQL API
        Structures => Header | Body
        Methods => get | post
*/        

//  PATTERN: Arcitecuture | Design

