const express = require('express')
const router = express.Router()

const studentController = require('../controllers/student')

// router.get('/dashBoard', studentController.getDashBoard)

router.post('/addStudent', studentController.postAddStudent)

// router.get('/allStudent', studentController.getAllStudent)

// router.get('/getAll', studentController.getAll)

// router.get('/getPaid', studentController.getPaid)

// router.get('/getOwing', studentController.getOwing)

// router.get('/getNotPaid', studentController.getNotPaid)

// router.get('/getSingleStudent', studentController.getSingleStudent)

module.exports = router