const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const route = require('./route/appRoute')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use((req, res, next) => {
    // Allow requests from all origins
    res.header('Access-Control-Allow-Origin', '*');
    // Allow specified headers
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // Allow specified HTTP methods
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    // Continue to the next middleware
    next();
});

app.use('/api', route)

mongoose.connect('mongodb+srv://kafeelkazeem:78789898@cluster0.8ynp2ef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster')
.then(res => {
    app.listen(3000)
})
.catch(err => console.log(err))