import express from "express";
import {PORT , mongoDBURL} from "./config.js";
import mongoose from "mongoose";
//import {Book} from "./models/bookmodel.js";
import bookRoute from "./routers/bookRoute.js";
import cors from "cors";

const app = express()
app.use(express.json());
app.use(cors());

const mongoDB = "mongodb://127.0.0.1:27017/bookstore";

app.get("/", (req,res) =>{
    res.status(235).send("Welcome to my MERN APP")
})

app.use("/books", bookRoute);



mongoose
    .connect(mongoDB)
    .then(()=>{
        console.log("App is connected to mongoose")  
        app.listen(PORT, () =>{
            console.log(`Listening to port ${PORT}`)
        })
    })
    .catch((error) =>{
        console.log(error)
    })

