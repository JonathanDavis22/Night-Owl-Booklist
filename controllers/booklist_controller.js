let express = require("express");
let books = require("../models/booklist.js");

let router = express.Router();

router.get("/", function (req, res) {
    books.selectAll(function (booksData) {
        console.log(booksData);
        res.render("index", {
            booksData: booksData
        });
    });
});

// Add a new book to the database
router.post("/api/books", function (req, res) {
    books.newBook(req.body.newTitle, req.body.newWriter)
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