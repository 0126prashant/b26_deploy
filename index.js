const express=require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const { noteRouter } = require("./routes/note.route");
require("dotenv").config()
const cors = require("cors")

const app=express();
app.use(cors())
app.use(express.json());
app.use("/users",userRouter)
app.use("/notes",noteRouter)
app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log(`server is running at port ${process.env.PORT}`)
        console.log("Connected to the DB")
    } catch (error) {
        console.log(error.message)
        console.log("error")
    }
})