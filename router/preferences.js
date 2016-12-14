let preferencesRouter = require('express').Router()
let preferencesController = require('../controller/preferences')

preferencesRouter.route('/')
    .get(preferencesController.GET_PREFERENCES)
    .post(preferencesController.ADD_PREFERENCE)
    .put(preferencesController.UPDATE_PREFERENCE)

module.exports = preferencesRouter