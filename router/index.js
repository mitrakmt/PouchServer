let rootRouter = require('express').Router()
let linkRouter = require('./links')
let userRouter = require('./user')
let preferenceRouter = require('./preferences')

rootRouter.use('/links', linkRouter)
rootRouter.use('/users', userRouter)
rootRouter.use('/preferences', preferenceRouter)

module.exports = rootRouter
