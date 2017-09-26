var db = require('../config/db');
var Book = {
    getAll: function(callback) {
        return db.query("SELECT * FROM book", callback);
    },
    getById: function(isbn, callback) {
        return db.query("SELECT * FROM book WHERE isbn=?", [isbn], callback);
    },
    add: function(Book, callback) {
        return db.query("INSERT INTO book VALUES(?,?)", [Book.isbn, Book.title], callback);
    },
    delete: function(isbn, callback) {
        return db.query("DELETE FROM book WHERE isbn=?", [isbn], callback);
    },
    update: function(isbn, Book, callback) {
        return db.query("UPDATE book SET title=? where isbn=?", [Book.title, isbn], callback);
    }
};
module.exports = Book;