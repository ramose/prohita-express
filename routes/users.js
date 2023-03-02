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
    res.render("users/new");
});

router.post("/", (req, res) => {
    const isValid = true;
    if (isValid) {
        users.push({firstName: req.body.firstName});
        res.redirect(`/users/${users.length}`);
    } else {
        res.render("users/new", {firstName: req.body.firstName});
    }

    //   res.json({
    //     status: 200,
    //     message: "Create User",
    //     first_name: req.body.firstName
    //   });
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
