const express = require("express")
const port = process.env.port
const app = express()
const getwea = require("./getweather")
app.use(express.static("static"))
app.set("view engine","hbs")
app.set("views",(__dirname,"./public"))
app.get("",(req,res) => {
    res.render("main",{})
})

app.get("/get",(req,res) => {
    getwea(req.query.lat,req.query.lon,(error,data) => {
        if(error)
        {
            return res.send({"error":error})
        }
        res.send({
            "dat":data
        })
    })
})


app.listen(port,() => {
    console.log("Server is running on Port " + port)
})