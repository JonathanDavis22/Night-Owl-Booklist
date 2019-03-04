let express = require("express");
let books = require("../models/booklist.js");

let router = express.Router();

router.get("/", function (req, res) {
    books.selectAll(function (err, data) {
        let booksObject = {
            booksData: data
        };
        console.log('booksData is', booksObject);
        res.render("index", booksObject);
    });
});

// Add a new book to the database
router.post("/api/books", function (req, res) {
    books.newBook(req.body.newTitle, req.body.newWriter)
    res.redirect("/");
});

// Set read status to true
router.put("/api/books/:id", function (req, res) {
    books.have_read(req.params.id)
});

// Delete book from DB
router.delete("/api/books/:id", function (req, res) {
    books.deleteBook(req.params.id)
});

module.exports = router;