let preferencesRouter = require('express').Router()

preferencesRouter.route('/')
    .get()
    .post()
    .put()

module.exports = preferencesRouter