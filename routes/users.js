const express = require("express");
const router = express.Router();

const users = [{firstName: "Smith"}, {firstName: "Jones"}];

const db = require("../db");
const userCtrl = require("../controllers/userCtrl");

router.get("/", (req, res) => {
    // console.log(req.query.name);
    // res.json({
    //   status: 200,
    //   message: "Users List",
    //   data: users
    // });
    userCtrl.users(req, res);
});

router.get("/new", (req, res) => {
    userCtrl.newUser(req, res)
});

router.post("/", (req, res) => {
    userCtrl.createUser(req, res)
});

router
    .route("/:userId")
    .get((req, res) => {
        res.json({
            status: 200,
            message: "Detail",
            user_id: users[req.params.userId - 1],
        });
    })
    .put((req, res) => {
        res.json({
            status: 200,
            message: "Update User",
            user_id: req.params.userId,
        });
    })
    .delete((req, res) => {
        res.json({
            status: 200,
            message: "Delete User",
            user_id: req.params.userId,
        });
    });

router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next();
});

module.exports = router;
