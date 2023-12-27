const express = require('express');
const cors = require("cors");
require("./config/db")

const userRouter = require("./routes/user.route")

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/api/users",userRouter);


//Router not found error
app.use((req,res,next) => {
    res.status(404).json({
        message:'Route not fount'
    })
})

//handling server error
app.use((err,req,res,next) => {
    res.status(500).json({
        message:'Something Broke in Server, please try again'
    })
})
module.exports = app;

