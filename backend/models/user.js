const mongoose = require('mongoose')
const { Schema } = mongoose; // destructuring in javascript

const UserSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    location:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('user', UserSchema);

// model ki help se user ka data insert hota hai 
// model ki help se hum CRUD operations perform kar skte hai 
// model is wrapper for our schema

// NEXT STEP IS TO Create Routes in index.js