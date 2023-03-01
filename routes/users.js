const express = require("express");
const router = express.Router();

const users = [{firstName: "Smith"}, {firstName: "Jones"}];

const db = require("../db");

router.get("/", (req, res) => {
    // console.log(req.query.name);
  // res.json({
  //   status: 200,
  //   message: "Users List",
  //   data: users
  // });

  

const sql = "SELECT * FROM clients";

db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    // res.json({
    //     status: 200,
    //     message: "Users List",
    //     data: result[0].name
    //   });

    res.render("users/list", {data: result});

});

});

router.get("/new", (req, res) => {
  res.render("users/new")
});

router.post("/", (req, res) => {
    const isValid = true
    if(isValid){
        users.push({firstName: req.body.firstName})
        res.redirect(`/users/${users.length}`)
    } else {
        res.render("users/new", {firstName: req.body.firstName})
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
      user_id: users[req.params.userId-1],
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
    req.user = users[id]
    next()
})

module.exports = router;
