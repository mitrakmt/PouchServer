let workerController = {}
let Promise = require("bluebird")
let workerModel = require('../model/worker')

workerController.GET_QUEUE_FOR_WORKER = (req, res) => {
    let QUEUE_PROMISE = () => {

        return new Promise((resolve, reject) => {
            let result = workerModel.GET_NEW_QUEUE()
            resolve(result);
        })
    }

    QUEUE_PROMISE()
        .then(queue => {
            console.log("QUEUE", queue)
            res.status(200).send(queue)
        })
}

workerController.START_WORKER = (req, res) => {
    let options = {
        method: 'POST',
        uri: 'http://localhost:7000/worker/queue',
        body: {
            POUCH_API_KEY: true
        },
        json: true
    }

    request(options)
        .then(response => {
            console.log("Web worker initiated")
        })
}

module.exports = workerController