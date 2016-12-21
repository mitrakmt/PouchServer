let usersController = {}
let helpers = require('../helpers')
let usersModel = require('../model/users')
let request = require('request-promise')

usersController.GET_USER = (req, res) => {
    let userId = req.headers.userid

    usersModel.GET_USER(userId)
        .then(user => {
            res.status(200).send(user)
        })
        .catch(error => {
            res.status(204).send(error)
        })
}

usersController.LOGIN = (req, res) => {
    let email = req.body.email
    let password = req.body.password

    usersModel.GET_PASSWORD(email, password)
        .then(user => {
            // let dbPassword = helpers.DECRYPT(user.password)
            // console.log(dbPassword)
            if (user.password === password) {
                res.status(200).send(user)
            } else {
                res.status(204).send('Bad Request')
            }
        })

}

usersController.CREATE_USER = (req, res) => {
    let email = req.body.email
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let profileImageUrl = req.body.profileImageUrl
    let frequency = req.body.frequency
    let categorySelected = req.body.categorySelected
    let password = req.body.password


    usersModel.CREATE_USER(email, password, firstName, lastName, profileImageUrl, frequency, categorySelected)
        .then(user => {
            if(user.errors[0].message === 'email must be unique') {
                res.status(400).send('Email must be unique')
            } else {
              res.status(200).send(user)
            }
        })
        .catch(error => {
            res.status(204).send(error)
        })
}

usersController.EDIT_USER = (req, res) => {

}

usersController.EDIT_FREQUENCY = (req, res) => {
    let frequency = req.body.frequency
    let userId = req.headers.userId

    usersModel.EDIT_FREQUENCY(userId, frequency) 
        .then(frequency => {
            res.status(200).send(frequency)
        })
        .catch(error => {
            return error
        })
}

usersController.DELETE_USER = (req, res) => {
    userModel.DELETE_USER()
        .then(status => {
            res.status(200).send(status)
        })
        .catch(error => {
            res.status(204).send(error)
        })
}

module.exports = usersController