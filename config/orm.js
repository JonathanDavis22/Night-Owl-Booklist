let connection = require("./connection.js");

let orm = {
    selectAll: function (table, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            cb(err, result)
            console.log(result);
        })
    },
    insertOne: function (table, newTitle, newWriter) {
        let queryString = "INSERT INTO ?? (book_name, author) VALUES (?, ?)";
        connection.query(queryString, [table, newTitle, newWriter],
            function (err, result) {
                if (err) throw err;
                console.log(result);
            })
    },
    updateOne: function (table, id) {
        let queryString = "UPDATE ?? SET have_read = NOT have_read WHERE id = ?";
        connection.query(queryString, [table, id],
            function (err, result) {
                if (err) throw err;
                console.log(result);
            })
    },
    deleteOne: function (table, id) {
        let queryString = "DELETE FROM ?? WHERE id = ?";
        connection.query(queryString, [table, id],
        function (err, result) {
            if (err) throw err;
            console.log(result);
        })
    }
}

module.exports = orm;