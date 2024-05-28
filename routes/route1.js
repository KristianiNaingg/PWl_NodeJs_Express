const express = require('express')
const path= require('path')

const router = express.Router()

const port = 3000


router.get( '/page1',(req, res) =>{
    res.sendFile(path.join(__dirname,'../views','form.html'))
})

router.post( '/page2',(req, res) =>{
    console.log(req.body)
    res.send(`
        <h1> Hello express page 2</h1>
        <p>
            hello, ${req.body.name}</p>
            `)
})
    

 router.get( '/',(req, res) =>{
    res.sendFile(path.join(__dirname,'../views','home.html'))
})

// app.get('/', (req, res) => {
//   res.send('Hello manusia!');
// });

module.exports =router