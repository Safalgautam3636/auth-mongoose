const express=require('express');
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const app=express();
app.use(express.json())

const authRoute=require('./routes/auth')
const postRoute=require('./routes/posts')
dotenv.config();
mongoose.connect('mongodb://localhost/authjs',{useNewUrlParser:true})
            .then(()=>{console.log('Connected to db')})
            .catch((err)=>{console.log(err)})

app.use('/api/user/',authRoute)
app.use('/api/posts/',postRoute)
app.listen(3000,(err)=>{
    console.log("Server is up and running..")
})