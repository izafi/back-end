const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;


// =========================
// EJS
// =========================

app.set("view engine", "ejs");


// =========================
// PUBLIC FOLDER
// =========================

app.use(express.static(path.join(__dirname, "public")));


// =========================
// FORM DATA
// =========================

app.use(express.urlencoded({ extended: true }));


// =========================
// CONTACT DATA
// =========================

let contacts = [
    {
        id: 1,
        name: "Ali",
        phone: "03001234567"
    },

    {
        id: 2,
        name: "Ahmed",
        phone: "03111234567"
    }
];


// =========================
// HOME
// =========================

app.get("/", (req, res) => {

    res.render("home", {
        title: "Home"
    });

});


// =========================
// ADD CONTACT PAGE
// =========================

app.get("/add-contact", (req, res) => {

    res.render("addContact", {
        title: "Add Contact"
    });

});


// =========================
// ADD CONTACT
// =========================

app.post("/add-contact", (req, res) => {

    const { name, phone } = req.body;

    contacts.push({

        id: Date.now(),

        name: name,

        phone: phone

    });

    res.redirect("/contacts");

});


// =========================
// SHOW CONTACTS
// =========================

app.get("/contacts", (req, res) => {

    res.render("showContact", {

        title: "Show Contacts",

        contacts: contacts

    });

});


// =========================
// DELETE CONTACT
// =========================

app.get("/delete-contact/:id", (req, res) => {

    const id = Number(req.params.id);

    contacts = contacts.filter(
        contact => contact.id !== id
    );

    res.redirect("/contacts");

});


// =========================
// UPDATE PAGE
// =========================

app.get("/update-contact/:id", (req, res) => {

    const id = Number(req.params.id);

    const contact = contacts.find(
        contact => contact.id === id
    );


    if (!contact) {

        return res
            .status(404)
            .send("Contact not found");

    }


    res.render("updateContact", {

        title: "Update Contact",

        contact: contact

    });

});


// =========================
// UPDATE CONTACT
// =========================

app.post("/update-contact/:id", (req, res) => {

    const id = Number(req.params.id);

    const { name, phone } = req.body;


    const contact = contacts.find(
        contact => contact.id === id
    );


    if (!contact) {

        return res
            .status(404)
            .send("Contact not found");

    }


    contact.name = name;

    contact.phone = phone;


    res.redirect("/contacts");

});


// =========================
// SERVER
// =========================

app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});