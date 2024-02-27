const mongoose = require('mongoose');
const { Schema } = mongoose
// SCHEMA IN MONGO DB IS LIKE A BLUEPRINT OR A PLAN FOR HOW YOUR DATA SHOULD LOOK INSIDE THE DATABASE.
// WE ONLY CAN SET THE INFORMATION WHICH IS PROVIDED INSIDE THE DATABASE STRUCTURE. 
// IF WE WANT TO ADD MORE FIELDS IN OUR STRUCTURE, THEN SCHEMA ALLOWS US TO DO THAT.
const UserSchema = new Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    location:{
        type : String,
        required : true
    },
    date:{
        type : Date,
        default : Date.now
    },
})


// HERE WE EXPORTS USER AS WELL AS USERSCHEMA FOR FURTHER USE LIKE CREATION OF A NEW USER OR LOGGING A EXISTED USER.
module.exports = mongoose.model('user', UserSchema)