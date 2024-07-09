const express = require('express')
let router = express.Router()
let adminController = require('../controller/adminController.js')

router.post('/adminlogin',adminController.adminlogin)

module.exports =router