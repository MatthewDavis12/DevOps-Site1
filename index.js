const express = require("express");
const app = express();
const port = 80;

app.get("/", (req, res)=>{
    res.status(200).sendFile("/home/matthew/www/site_1/index.html");
})


app.listen(port, (error, result)=>{
    console.log("Server is listening on port " + port);
})

