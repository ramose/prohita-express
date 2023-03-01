var mysql = require("mysql");

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 8889,
    password: "root",
    database: "prohita",
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = db;
