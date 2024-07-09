let express = require('express')

let router = express.Router()
let uploads=require('../multerConfig.js')
let clientController = require('../controller/clientController.js')

router.post('/clientSave',uploads.single('Image'),clientController.clientSave)

router.post('/clientlogin',clientController.clientlogin)
router.post('/createClient/:unique',clientController.createClient)
router.get('/getClient/:unique',clientController.getClient)
module.exports = router