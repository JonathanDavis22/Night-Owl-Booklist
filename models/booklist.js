let orm = require("../config/orm.js");

let books = {
    // Display the booklist
    selectAll: function(cb) {
        orm.selectAll("booklist", function(res) {
            cb(res);
        });
    },
    // Add a new book/author to the db.
    insertOne: function(newTitle, newWriter) {
        orm.insertOne("booklist", newTitle, newWriter)
    },
    // Change the 'read' status
    updateOne: function(book_name, author) {
        orm.updateOne("booklist", book_name, author)
    }
};

module.exports = books;