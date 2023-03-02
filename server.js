const express = require("express")
const app = express()
const port = 3000

const methodOverride = require("method-override")

app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

/** Handling PUT and DELETE method from html form */
app.use(methodOverride("_method"))

app.set("view engine", "ejs")
app.use(logger)

// app.get("/", (req, res) => {
//     // res.json({status: 200})
//     res.render("index", { data1: "world"})
// })

const userRouter = require("./routes/users")

app.use("/users", userRouter)

function logger(req, res, next){
    console.log(req.originalUrl);
    next()
}

app.listen(port, () => {
    // console.log('oke');
})