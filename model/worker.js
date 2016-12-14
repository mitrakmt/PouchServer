let workerModel = {}
var Promise = require("bluebird");
let Users = require('../db').Users
let Links = require('../db').Links

workerModel.GET_NEW_QUEUE = () => {
    let queue = []
    Users.findAll({})
        .then(users => {
            for (var i = 0; i < users.length; i++) {
                workerModel.FIND_BEST_LINK(users[i].id)
                    .then(urls => {
                        console.log("URLS", urls)
                        queue.push({
                            urls: urls,
                            email: users[i].email
                        })
                    })
            }
        })
    console.log("QUEUE RIGHT BEFORE RETURN IN GET NEW QUEUE MODEL", queue)
    return queue
}

workerModel.FIND_BEST_LINK = (userId) => {
    let flag = false
    let resultLink
    for (var i = 10; i >= 1; i--) {
        Links.findOne({
            where: {
                userId: userId,
                importance: i
            }
        })
        .then(link => {
            console.log("LINK INSIDE LOOP", link)
            if (link) {
                console.log("RETURNING RESULT: ", link)
                flag = true
                resultLink = link
                return resultLink
            }
        })
        if (flag) {
            break;
        }
    }
}

module.exports = workerModel