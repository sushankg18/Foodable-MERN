const express = require('express')
const app =express();
const port = 5000;
const mongoDB = require('./db');
mongoDB();
app.get('/' , (req, res)=>{
    res.send("HELLO IT'S HOME PAGE")
});
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.use(express.json());
app.use('/api',require('./Routes/createUser'));
app.listen(port , ()=>{
    console.log(`APP RUNNING ON PORT : ${port}`)
})