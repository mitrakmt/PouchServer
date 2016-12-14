let linksController = {}
let linksModel = require('../model/links')

linksController.GET_LINKS = (req, res) => {
    let userId = req.headers.userid
    linksModel.GET_LINKS(userId)
        .then(links => {
            res.status(200).send(links)
        })
}

linksController.ADD_LINK = (req, res) => {
    let userId = req.headers['userid']
    let link = req.body.url
    let category = req.body.category
    let importance = req.body.importance

    linksModel.ADD_LINK(userId, link, category, importance)
        .then(link => {
            res.status(200).send(link)
        })
}

linksController.REMOVE_LINK = (req, res) => {
    
}

module.exports = linksController