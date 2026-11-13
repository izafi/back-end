const mongoose = require("mongoose");

const pakagesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            enum: ["Basic", "Moderate", "Premium"]
        },

        description: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true
        },

        duration: {
            type: String,
            required: true
        },

        features: {
            type: [String],
            required: true
        },

        status: {
            type: String,
            enum: ["Active", "Inactive"],
            default: "Active"
        }
    },
    {
        timestamps: true
    }
);

const PakagesModel = mongoose.model("PakagesModel", pakagesSchema);

module.exports = PakagesModel;