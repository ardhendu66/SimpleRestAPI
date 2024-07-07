const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)
.then(function(ans){
    app.listen(PORT, function(){
        console.log(`Server listening on PORT: ${PORT}`)
    })
    console.log('Database connected...')
}).catch(function(err){
    console.error(err)
    process.exit(1)
})

app.use(express.json())
app.get('/', function(req,res){
    res.send(`<h1>Home Page</h1>`)
})
app.use('/comp', require('./router/route'))
