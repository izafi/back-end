const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    discription: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    stock: {
        type: Number,
        required: true
    }
});

const ProductModel = mongoose.model("ProductModel", productSchema);

module.exports = ProductModel;