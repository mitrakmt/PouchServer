let workerRouter = require('express').Router()
let workerController = require('../controller/worker')

workerRouter.route('/')
    .get(workerController.GET_QUEUE_FOR_WORKER)
    .post(workerController.START_WORKER)

module.exports = workerRouter