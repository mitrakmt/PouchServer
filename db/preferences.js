let Sequelize = require('sequelize')

module.exports = (db) => {
  const Preferences = db.define('links', {
    url: {
      type: Sequelize.STRING
    }
  })

  return Preferences
}
