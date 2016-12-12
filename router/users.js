let usersRouter = require('express').Router()

usersRouter.route('/')
    .get()
    .post()
    .put()

module.exports = usersRouter