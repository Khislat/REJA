const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://Khislatbek:PxpSgl09iF49BHCK@cluster0.kjeuf.mongodb.net/Reja"

mongodb.connect(connectionString, {useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succesed");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT,function () {
            console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`);
});
        
    }
})


