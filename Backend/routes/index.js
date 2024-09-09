const express = require('express')
const { complaint, contact, home } = require('../controller/controller')
const router = express.Router()


router.get('/',home)
router.post('/complaint',complaint)
router.post('/contact',contact)

module.exports = {router} 