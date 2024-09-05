const express = require("express");
const app = express();
const port = 80;

app.get("/", (req, res)=>{
    res.status(200).send("node-app connection successful!");
})


app.listen(port, (error, result)=>{
    console.log("Server is listening on port " + port);
})

