const express = require("express");
const db = require("../db");

exports.users = (req, res) => {
    const sql = "SELECT * FROM clients";

    db.query(sql, function (err, result) {
        if (err) throw err;
        res.render("users/list", {data: result});
    });
};

exports.newUser = (req, res) => {
    res.render("users/new");
};

exports.createUser = (req, res) => {
    const sql = `INSERT INTO clients (id, name, email1, email2, phone, address, created_at, updated_at) VALUES (NULL, "${req.body.name}", "${req.body.email1}", NULL, NULL, NULL, NULL, NULL);`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        res.render("alert/success");
    });
};

exports.deleteUser = (req, res) => {
    console.log("===========> ", req.params.userId);
    const sql = `DELETE FROM clients WHERE clients.id = "${req.params.userId}"`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        res.render("alert/success");
    });
};

exports.viewUser = (req, res) => {
    const sql = `SELECT * FROM clients WHERE id='${req.params.userId}'`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        // console.log('==>',result[0].name)
        res.render("users/edit", {data: result[0]});
    });

    // res.render("users/edit", { data: req.params.userId});
};

exports.editUser = (req, res) => {
    const sql = `UPDATE clients SET name="${req.body.name}", email1="${req.body.email1}" WHERE id = "${req.params.userId}"`;

    // const sql = `UPDATE clients SET ? WHERE id = "${req.params.userId}", {name:"${req.body.name}"}`;

    //connection.query('UPDATE users SET ? WHERE UserID = ?', [{ Name: name }, userId])

    db.query(sql, function (err, result) {
        if (err) throw err;
        // console.log('==>',result[0].name)
        res.render("alert/success");
    });

    // res.render("users/edit", { data: req.params.userId});
};
// UPDATE `clients` SET `name` = 'Leonard 123', `created_at` = NULL, `updated_at` = NULL WHERE `clients`.`id` = 17;
