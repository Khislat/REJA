const http = require("http");
console.log("Step 1st: Mongodb Express packagen chaqirib olamiz")
const mongodb = require("mongodb");

let db;
console.log("Step 2nd: MongoDB atlasidan link olamiz")
const connectionString = "mongodb+srv://Khislatbek:PxpSgl09iF49BHCK@cluster0.kjeuf.mongodb.net/Reja"

console.log("Step 3rd: MongoDBni connect qilamiz")
mongodb.connect(connectionString, {useNewUrlParser: true,
    useUnifiedTopology: true,
}, 
(err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succesed");
        module.exports = client;
        console.log("Step 4th: MongoDB connect succesed after Back-end server connect")
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT,function () {
            console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`);
});
        
    }
})



