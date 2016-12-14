let usersRouter = require('express').Router()
let usersController = require('../controller/users')
let helpers = require('../helpers')

usersRouter.route('/')
    .get(usersController.GET_USER)
    .post(helpers.HASH, usersController.CREATE_USER)
    .put(usersController.EDIT_USER)
    .delete(usersController.DELETE_USER)

usersRouter.route('/login')
    .post(usersController.LOGIN)

module.exports = usersRouter