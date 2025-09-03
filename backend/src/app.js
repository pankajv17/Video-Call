import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import connectToSocket from "./controllers/socketManager.js";

import cors from 'cors'
import userRoutes from "./routes/usersroutes.js"

import { connect } from "node:http2";

const app= express();
const server =createServer(app);
const io =connectToSocket(server);

app.set("port",(process.env.PORT || 8000))
app.use((cors));
app.use(express.json({limit:"40kb"}))
app.use(express.urlencoded({limit:"40kb" , extended:true}))

app.use("/api/v1/users",userRoutes);

app.get("/home",(req,res)=>{
    return res.json({"hello":"worlld"})
});

const start = async ()=>{
app.set("mongo_user")
const connectionDB = await mongoose.connect("mongodb+srv://pankajkumarverma598_db_user:<your_pasword>@call.znbd0y8.mongodb.net/")
console.log(`MONGO connected DB Host : ${connectionDB.connection.host}`)
    server.listen(app.get ("port"),()=>{
        console.log(`app is listen 8000`)
    });

}

start();


