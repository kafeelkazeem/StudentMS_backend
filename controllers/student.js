const Student = require('../models/student')

exports.getDashBoard = (req, res, next) =>{
    res.json({message: 'hello'})
}

exports.postAddStudent = (req, res, next) =>{
    console.log(req.body.name)
    // const student = {
    //     fullName : req.body.fullName,
    //     age: req.body.age,
    //     dob : req.body.dob,
    //     cls : req.body.cls,
    //     section : req.body.section,
    //     gender : req.body.gender,
    //     parentName : req.body.parentName,
    //     PhoneNumber : req.body.PhoneNumber,
    //     address : req.body.address,
    //     status : req.body.status,
    //     paid : req.body.paid,
    //     owing : req.body.owing
    // }
    //res.json({message: student.fullName})
    // Student.create({
    //     fullName : student.fullName,
    //     age: student.age,
    //     dob : student.dob,
    //     cls : student.cls,
    //     section : student.section,
    //     gender : student.gender,
    //     parentName : student.parentName,
    //     PhoneNumber : student.PhoneNumber,
    //     address : student.address,
    //     status : student.status,
    //     paid : student.paid,
    //     owing : student.owing
    // })
    // .then(result =>{
    //     res.json({message : true})
    // })
    // .catch(err =>{
    //     res.json({message: false})
    // })
}