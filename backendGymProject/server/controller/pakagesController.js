const PakagesModel = require("../models/pakagesModel");

// 1. Create Package
const createPakage = async (req, res) => {
    try {
        const pakage = await PakagesModel.create(req.body);

        res.status(201).json({
            success: true,
            message: "Package created successfully",
            pakage
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// 2. Get All Packages
const getPakages = async (req, res) => {
    try {
        const pakages = await PakagesModel.find();

        res.status(200).json({
            success: true,
            message: "Packages fetched successfully",
            count: pakages.length,
            pakages
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// 3. Get Single Package
const getPakage = async (req, res) => {
    try {
        const pakage = await PakagesModel.findById(req.params.id);

        if (!pakage) {
            return res.status(404).json({
                success: false,
                message: "Package not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Package fetched successfully",
            pakage
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// 4. Update Package
const updatePakage = async (req, res) => {
    try {
        const pakage = await PakagesModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!pakage) {
            return res.status(404).json({
                success: false,
                message: "Package not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Package updated successfully",
            pakage
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// 5. Delete Package
const deletePakage = async (req, res) => {
    try {
        const pakage = await PakagesModel.findByIdAndDelete(
            req.params.id
        );

        if (!pakage) {
            return res.status(404).json({
                success: false,
                message: "Package not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Package deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


module.exports = {
    createPakage,
    getPakages,
    getPakage,
    updatePakage,
    deletePakage
};