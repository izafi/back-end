const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: string,
        require: true
    },
    subject: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true,
        trim: true
    }
})