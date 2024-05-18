const router = require('express').Router()
const { createUser } = require('./users')

router.route('/').post(createUser)

module.exports = router