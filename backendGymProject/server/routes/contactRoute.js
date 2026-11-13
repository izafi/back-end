const express = require("express");

const router = express.Router();

router.post("/",createContact);

router.get("/",getContact);

router.get("/:id",getContact);

router.put("/:id",updateContact);

router.delete("/:id",deleteContact);
