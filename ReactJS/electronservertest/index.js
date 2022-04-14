const express = require("express")
const koa = require("koa")
const fs = require("fs")
const path = require("path")
const app = express();

app.use(express.json());
app.get("/", (req,res)=>{
    res.send("Muyaho~")
})

app.get("/fs", (req,res)=>{
    res.send(fs.readFileSync(path.join("D:","PACSPLUS","Electron.txt")));
})

app.listen(3030, ()=>{
    console.log("server Run!! 3030")
})