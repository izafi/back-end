
const express = require("express");
const app = express();

const { body, validationResult } = require("express-validator");

// Middleware
app.set("view engine", "ejs");

app.use(express.json());

app.use(express.urlencoded({
    extended: false
}));

// Registration Validation
const validationRegistration = [

    body("username")
        .notEmpty()
        .withMessage("Username is required")
        .bail()
        .isLength({ min: 5 })
        .withMessage("Username must be at least 5 characters long"),

    body("useremail")
        .notEmpty()
        .withMessage("Email is required")
        .bail()
        .isEmail()
        .withMessage("Invalid email address"),

    body("userage")
        .notEmpty()
        .withMessage("Age is required")
        .bail()
        .isInt({ min: 1, max: 100 })
        .withMessage("Age must be between 1 and 100"),

    body("userpass")
        .notEmpty()
        .withMessage("Password is required")
        .bail()
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long"),

    body("usercity")
        .notEmpty()
        .withMessage("City is required")

];

// Display Form
app.get("/myform", (req, res) => {
    res.render("myform");
});

// Save Form
app.post("/saveform", validationRegistration, (req, res) => {

    const errors = validationResult(req);

    if (errors.isEmpty()) {

        return res.send({
            success: true,
            message: "Registration successful",
            data: req.body
        });

    }

    return res.status(400).send({
        success: false,
        errors: errors.array()
    });

});

// Server
app.listen(3000, () => {
    console.log("Express server started on port 3000");
});
