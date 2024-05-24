const Student = require('../models/student')

// exports.getDashBoard = (req, res, next) =>{
//     let totalStudent;
//     let totalStudentPaid;
//     let totalStudentNotPaid;
//     let totalStudentOwing;

//     Student.findAll()
//     .then(result =>{
//         totalStudent = result.length
//         return  Student.findAll({where : {status: 'paid'}})
//     })
//     .then(result =>{
//         totalStudentPaid = result.length
//         return Student.findAll({where : {status: 'not paid'}})
//     })
//     .then(result =>{
//         totalStudentNotPaid = result.length
//         return Student.findAll({where: {status: 'owing'}})
//     })
//     .then(result =>{
//         totalStudentOwing = result.length
//         res.json({
//             totalStudent: totalStudent, 
//             totalStudentPaid: totalStudentPaid, 
//             totalStudentNotPaid: totalStudentNotPaid, 
//             totalStudentOwing: totalStudentOwing
//         })
//     })
//     .catch(err =>{
//         console.log(err)
//     })   
// }

exports.postAddStudent = (req, res, next) =>{
    const student = {
        firstName : req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        dob : req.body.dob,
        class : req.body.cls,
        section : req.body.section,
        gender : req.body.gender,
        parentName : req.body.parentName,
        PhoneNumber : req.body.PhoneNumber,
        address : req.body.address,
        status : req.body.status,
        paid : req.body.paid,
        owing : req.body.owing
    }
    Student.create(student)
    .then(result =>{
        res.json({message : true})
    })
    .catch(err =>{
        console.log(err)
        res.json({message: false})
    })
}

// exports.getAllStudent = (req, res, next) =>{
//     Student.findAll()
//     .then(result =>{
//         let num = result.length
//         res.json({amount: num})
//     })
//     .catch(err =>{
//         console.log(err)
//     })   
// }

// exports.getAll = (req, res, next) =>{
//     const cls = req.query.class
//     Student.findAll({attributes : ['id', 'firstName', 'lastName', 'age', 'gender', 'status', 'paid', 'owing'], where : {class: cls}})
//     .then(result =>{
//         res.json(result)
//     })
//     .catch(err =>{
//         console.log(err)
//     })
// }

// exports.getPaid = (req, res, next) =>{
//     const cls  = req.query.class
//     Student.findAll({attributes : ['id', 'firstName', 'lastName', 'age', 'gender', 'status', 'paid', 'owing'], where : {
//         class: cls,
//         status: 'paid'
//     }})
//     .then(result =>{
//         res.json(result)
//     })
//     .catch(err =>{
//         console.log(err)
//     })
// }

// exports.getOwing = (req, res, next) =>{
//     const cls  = req.query.class
//     Student.findAll({attributes : ['id', 'firstName', 'lastName', 'age', 'gender', 'status', 'paid', 'owing'], where : {
//         class: cls,
//         status: 'owing'
//     }})
//     .then(result =>{
//         res.json(result)
//     })
//     .catch(err =>{
//         console.log(err)
//     })
// }

// exports.getNotPaid = (req, res, next) =>{
//     const cls  = req.query.class
//     Student.findAll({attributes : ['id', 'firstName', 'lastName', 'age', 'gender', 'status', 'paid', 'owing'], where : {
//         class: cls,
//         status: 'not paid'
//     }})
//     .then(result =>{
//         res.json(result)
//     })
//     .catch(err =>{
//         console.log(err)
//     })
// }

// exports.getSingleStudent = (req, res, next) =>{
//     const id = req.query.id
//     Student.findByPk(id)
//     .then(result =>{
//         res.json(result)
//     })
//     .catch(err =>{
//         console.log(err)
//     })
// }