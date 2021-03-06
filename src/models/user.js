//entire user model
const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require('bcryptjs')

//pass in the object that represents that schema
//create schema first and pass that in 
//pass an object that defines the property for that schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error("Age must be greater than 0");
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.includes("password")) {
                throw new Error("Password cannot contain password");
            }
        }
    }
});

userSchema.pre('save', async function(next) {
    const user = this
    console.log('just before saving')

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

const User = mongoose.model("User", userSchema);

module.exports = User