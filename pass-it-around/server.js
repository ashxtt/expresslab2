const express = require('express')
const app = express()
const port = 3500

 //!Take one down pass it around
 app.get("/", (req, res) => {
    res.send(`
    <h1> 99 bottles of bear on the wall</h1>
    <a href="/98">Take one down pass it around</a>
    `)
 })

 app.get("/:number_of_bottles", (req, res) => {
    const bottles = req.params.number_of_bottles
    
    console.log(bottles)
    if(bottles <= 0){
        res.send(`
        <h1>Yay no more bottles!</h1>
        <a href="/">Start Over</a>
        `)
    }else{
        res.send(`
    <h1>${bottles}</h1>
    <a href="/${bottles - 1}"> Take one down pass it around</a>
    
    `)
    }
 })


app.listen(port)
