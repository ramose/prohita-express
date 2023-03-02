const express = require("express");
const db = require("../db");

exports.users = (req, res) => {
    const sql = "SELECT * FROM clients";

    db.query(sql, function (err, result) {
        if (err) throw err;
        res.render("users/list", {data: result});
    });
}

exports.newUser = (req, res) => {
    res.render("users/new");
}

exports.createUser = (req, res) => {
    const sql = `INSERT INTO clients (id, name, email1, email2, phone, address, created_at, updated_at) VALUES (NULL, "${req.body.firstName}", 'email', NULL, NULL, NULL, NULL, NULL);`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        res.render("alert/success");
    });
}

exports.deleteUser = (req, res) => {
    const sql = `DELETE FROM clients WHERE clients.id = "${req.body.id}"`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        res.render("alert/success");
    });
}