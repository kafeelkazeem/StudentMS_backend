const express = require('express')
const sequelize = require('./util/database')

const route = require('./route/appRoute')

const app = express()

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

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

sequelize.sync()
.then(result =>{
    app.listen(3000)
})
.catch(err =>{
    console.log(err)
})