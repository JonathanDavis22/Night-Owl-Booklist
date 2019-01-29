let express = require("express");
let books = require("../models/booklist.js");

let router = express.Router();

router.get("/", function (req, res) {
    books.selectAll(function (booksData) {
        console.log(booksData);
        res.render("index");
    });
});

// Add a new book to the database
router.post("/api/books", function (req, res) {
    books.insertOne(["book_name", "read"], [req.body.book_name, req.body.read], function (result) {
        // Send the ID of the new book
        res.json({ id: result.insertID });
    });
});

// Set read status to true
router.put("/api/books/:id", function (req, res) {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);

    books.updateOne({ read: req.body.read }, condition, function (result) {
        if (result.changedRows === 0) {
            // If no rows changed, ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Delete book from DB
router.delete("/api/books/:id", function (req, res) {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);

    books.deleteOne(condition, function (result) {
        if (result.changedRows === 0) {
            // If no rows changed, ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;