const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const server = require("http").createServer(app);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req,res)=>{
    res.send("demo");
});
server.listen(port, (req, res) => {
    console.log("Server is runing port: " + port);
})