const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router=require('./router/route.js');
require('dotenv').config()
const app=express();

const PORT=5500;
const options = {
    origin : "*",
    method : ["GET", "POST", "PUT", "PATCH", "DELETE"]
}
app.use(cors(options))
app.use(express.json())
app.use(router)

mongoose.connect(process.env.MONGO_STRING)
.then(()=>console.log('db connected'))
.catch(()=>console.log('db not connected'))

app.listen(PORT,()=>{
    console.log(`Server in running at port ${PORT}`);
})


