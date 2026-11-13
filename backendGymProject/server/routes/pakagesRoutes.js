const express = require("express");

const {
    createPakage,
    getPakages,
    getPakage,
    updatePakage,
    deletePakage
} = require("../controller/pakagesController");

const router = express.Router();

router.post("/", createPakage);

router.get("/", getPakages);

router.get("/:id", getPakage);

router.put("/:id", updatePakage);

router.delete("/:id", deletePakage);

module.exports = router;