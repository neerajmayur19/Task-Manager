const express = require('express');
const app = express();
const tasks = require('./Routers/tasks');
const connectdB = require('./database/connect');
require('dotenv').config()

const port = 3000;
//middleware
app.use(express.static('./public'));
app.use(express.json());

app.get('/home', (req,res)=>{
    res.send("This is the home page");
})

app.use('/api/v1/tasks', tasks);


const dbCall = async()=>{
    try {
        await connectdB(process.env.MONGO_URI)
        app.listen(3000, console.log(`This is the part of the most important part ${port}`));
    } catch (error) {
        console.log(error);
    }
}

dbCall();