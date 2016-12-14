let db = require('./db.config')
let Sequelize = require('sequelize')
let Users = require('./users')(db)
let Links = require('./links')(db)

// Links:Users (1:1)
// Users:Links (1:n)
Links.belongsTo(Users)
Users.hasMany(Links, {foreignKey: 'userId', onDelete: 'cascade'})

// // HELPER TO DROP ALL TABLES
// db.sync({force: true}).then(() => {
//   console.log('Tables have been dropped')
// })

db.sync().then(() => {
  console.log('Tables have been Created')
})

module.exports = {
  db: db,
  Users: Users,
  Links: Links
}
