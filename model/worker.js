let workerModel = {}
let Promise = require("bluebird");
let Sequelize = require('sequelize')
let Users = require('../db').Users
let Links = require('../db').Links

workerModel.GET_NEW_QUEUE = () => {
    let queue = []
    let promiseArray = []

    return Users.findAll({})
        .then(users => {
            // eventually workerModel.FIND_BEST_LINK(users id) , group into an array, send back.
        })
}

workerModel.FIND_BEST_LINK = (userId) => {
    return Links.findOne({
        where: {
            userId: userId
        },
        order: [
            ['importance', 'DESC']
        ]
    })
    .then(links => {
        return links[0]
        console.log("LINK FOR EACH USER ===============", links)
    })
}

module.exports = workerModel