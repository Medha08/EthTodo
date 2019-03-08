const express = require("express");
const app = express();
const PORT = 3000;
//Serve static assets 
app.use(express.static('app'));
//Serve contract artifact files
app.use(express.static('build/contracts'));
//Serve index.html
app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/app/index.html`)
})
//If anything else is requested that's an error
app.get("*",(req,res)=>{
    res.send("Ooops... Bad Gateway!");
    //res.sendStatus(404);
    res.end('Cannot ' + req.method + ' ' + req.url);
})
//Start the server
app.listen(PORT,()=>{
    console.log(`Eth ToDo is running on port ${PORT}`);
})