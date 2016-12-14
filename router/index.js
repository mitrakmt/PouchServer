let rootRouter = require('express').Router()
let linkRouter = require('./links')
let userRouter = require('./users')
let preferenceRouter = require('./preferences')
let workerRouter = require('./worker')

rootRouter.use('/links', linkRouter)
rootRouter.use('/users', userRouter)
rootRouter.use('/preferences', preferenceRouter)
rootRouter.use('/worker', workerRouter)

module.exports = rootRouter
