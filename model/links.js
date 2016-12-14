let linksModel = {}
let User = require('../db').Users
let Link = require('../db/').Links

linksModel.GET_LINKS = (userId) => {
    return Link.findAll({
        where: {
            userId: userId
        }
    })
    .then(links => {
        return links
    })
}

linksModel.ADD_LINK = (userId, link, category, importance) => {
    return Link.create({
        userId: userId,
        url: link,
        category: category,
        importance: importance
    })
    .then(link => {
        return link
    })
    .catch(error => {
        return error
    })
}

module.exports = linksModel