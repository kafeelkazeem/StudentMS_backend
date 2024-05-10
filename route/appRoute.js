const express = require('express')
const router = express.Router()

const studentController = require('../controllers/student')

router.get('/dashBoard', studentController.getDashBoard)

router.post('/addStudent', studentController.postAddStudent)

router.get('/allStudent', studentController.getAllStudent)

router.get('/getClass', studentController.getClass)

module.exports = router