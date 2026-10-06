// const ProductModel = require("../models/ProductModel");

// const createProduct = async (req, res) => {
//     try {
//         const {
//             name,
//             discription,
//             price,
//             category,
//             stock
//         } = req.body;

//         const product = await ProductModel.create({
//             name,
//             discription,
//             price,
//             category,
//             stock
//         });

//         res.status(201).json({
//             success: true,
//             message: "Product created successfully",
//             product
//         });

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// };

// module.exports = createProduct;


const ProductModel = require("../models/ProductModel")

const createProduct = async (res,req)=>{

    try{
        const{
            name,
            discription,
            price,
            category,
            stock
        } = req.body;

        const product = await ProductModel.create({
             name,
            discription,
            price,
            category,
            stock
        })

        res.status(201).json({
            success:true,
            message:"product created successfully", 
            product
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}