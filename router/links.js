let linkRouter = require('express').Router()
let linkController = require('../controller/links')

linkRouter.route('/')
    .get(linkController.GET_LINKS)
    .post(linkController.ADD_LINK)
    .delete(linkController.REMOVE_LINK)

module.exports = linkRouter