let usersModel = {}
let User = require('../db').Users

usersModel.CREATE_USER = (email, password, firstName, lastName, profileImageUrl, frequency, categorySelected) => {
    return User.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        profileImageUrl: profileImageUrl,
        frequency: frequency,
        categorySelected: categorySelected
    })
    .then(user => {
        return user
    })
    .catch(error => {
        return error
    })
}

usersModel.GET_PASSWORD = (email, password) => {
    return User.findOne({
        where: {
            email: email
        }
    })
    .then(user => {
        return user
    })
    .catch(error => {
        return error
    })
}

usersModel.EDIT_FREQUENCY = (userId, frequency) => {
    return User.findOne({
        where: {
            id: userId
        }
    })
}

usersModel.GET_USER = (userId) => {
    return User.findOne({
        where: {
            id: userId
        }
    })
    .then(user => {
        return user
    })
    .catch(error => {
        return error
    })
}

usersModel.EDIT_USER = (id, fieldsToEdit) => {

}

usersModel.DELETE_USER = (id, password) => {
    return User.destroy({
        where: {
            id: id
        }
    })
    .then(status => {
        return status
    })
    .catch(error => {
        return error
    })
}

module.exports = usersModel