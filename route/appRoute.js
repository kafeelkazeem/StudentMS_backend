const express = require('express')
const router = express.Router()

const studentController = require('../controllers/student')

router.get('/', studentController.getDashBoard)

router.post('/addStudent', studentController.postAddStudent)

module.exports = router