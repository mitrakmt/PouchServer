let Sequelize = require('sequelize')

module.exports = (db) => {
  const Users = db.define('users', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    profileImageUrl: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    frequency: {
      type: Sequelize.INTEGER
    },
    categorySelected: {
      type: Sequelize.STRING
    }
  })

  return Users
}
