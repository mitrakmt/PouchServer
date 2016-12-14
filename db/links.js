let Sequelize = require('sequelize')

module.exports = (db) => {
  const Links = db.define('links', {
    url: {
      type: Sequelize.STRING
    }, 
    category: {
        type: Sequelize.STRING
    },
    importance: {
      type: Sequelize.INTEGER
    }
  })

  return Links
}
