const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req,res) {
    res.sendFile(__dirname+"/index.html")
})

app.use(bodyParser.urlencoded({extended:true}));

app.post("/", function (req,res) {
    var calculate = req.body.num1 * req.body.num2;
    res.send("It's calculated! " + calculate)
})

app.listen(port, () => console.log(`Example app listening on port 3000!`))