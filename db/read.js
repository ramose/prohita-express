var db = require("./db");

const sql = "SELECT * FROM clients";

db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
});