const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const Student = sequelize.define('student', {
    id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    fullName : Sequelize.STRING,
    age: Sequelize.INTEGER,
    DOB: Sequelize.DATE,
    class: Sequelize.STRING,
    section: Sequelize.STRING,
    gender: Sequelize.STRING,
    parentName: Sequelize.STRING,
    PhoneNumber: Sequelize.STRING,
    address: Sequelize.STRING,
    status: Sequelize.STRING,
    paid: Sequelize.INTEGER,
    owing: Sequelize.INTEGER
})
 
module.exports = Student