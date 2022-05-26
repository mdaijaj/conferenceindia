
const mongoose= require('../database/db');
const Schema = mongoose.Schema

let userSchema=  new Schema({
    name: {
       type: String,
       required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    registrationType: {
        type: String,
        enum: ['virtual', 'offline'],
        default: 'virtual',
    }
}, {
    timestamps: true
});  

const User=mongoose.model('User', userSchema);
module.exports= User;