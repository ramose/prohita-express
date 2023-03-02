const express = require("express");
const db = require("../db");

exports.users = (req, res) => {
    const sql = "SELECT * FROM clients";

    db.query(sql, function (err, result) {
        if (err) throw err;
        res.render("users/list", {data: result});
    });
}