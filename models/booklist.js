let orm = require("../config/orm.js");

let books = {
    // Display the booklist
    selectAll: function(cb) {
        orm.selectAll("booklist", function(res) {
            cb(res);
        });
    },
    // Add a new book/author to the db.
    newBook: function(newTitle, newWriter) {
        orm.insertOne("booklist", newTitle, newWriter)
    },
    // Change the 'read' status
    have_read: function(id) {
        orm.updateOne("booklist", id)
    },
    deleteBook: function(id) {
        orm.deleteOne("booklist", id)
    }
};

module.exports = books;