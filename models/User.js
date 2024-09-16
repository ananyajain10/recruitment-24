const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [/^([a-zA-Z]){3,15}[2][012]([0-9]){5,6}@akgec.ac.in$/, "Email should be of <name><studentno>@akgec.ac.in"]

    },
    stdno: {
        type: Number,
        required: true,
        maxlength: [8,"Student number should be of 8 or less digit"],
        validate: [/^[2][3]([0-9]){5,6}$/, "Student no. should be valid"],
        unique: true
    },
    rollno:{
        type: Number,
        required: true,
        maxlength: [13,"University Roll Number should be of 13"],
        validate: [/^[2][2]([0-9]){11}$/, "Roll no. should be valid"],
        unique: true
    },
    branch: {
        type: String,
        enum: ['CSE', 'CS-HINDI', 'CSE-AIML', 'CSE-DS', 'CS', 'AIML', 'IT', 'CSIT', 'ECE', 'EN', 'ME', 'CE','MCA', 'OTHER'],
        required: true,
    },
    section: {
        type: String,
    },
    hosteller:{
        type: String,
        required: true,
        enum: ['Yes', 'No']
    },

    gender:{
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Both']
    },


    phone: { 
        type: Number,
        required: true,
        maxlength: [10, "Phone number should be of 10 digit"],
        validate: [/^[6-9]([0-9]){9}$/, "Phone number should be valid"]
    },
    // unstop:{
    //     type: String,
    //     required: true
    // },
    hackerrank:{
        type: String,
        required: true
    }
}
,{
    timestamps: true
});

const User = mongoose.model('User', UserSchema);
module.exports = User;