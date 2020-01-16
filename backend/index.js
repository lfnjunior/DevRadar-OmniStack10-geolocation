const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()

mongoose.connect(
    'localhostmongodb://localhost/devradar',
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })

    app.use(routes)
app.use(express.json())
app.listen(3333)