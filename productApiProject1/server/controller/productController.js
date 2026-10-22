
const ProductModel = require("../models/ProductModel");

// 1. Create Product
const createProduct = async (req, res) => {
    try {
        const product = await ProductModel.create(req.body);

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// 2. Get All Products
const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();

        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            count: products.length,
            products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// 3. Get Single Product
const getProduct = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// 4. Delete Single Product
const deleteProduct = async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndDelete(
            req.params.id
        );

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct
};