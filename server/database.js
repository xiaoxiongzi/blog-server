const { Sequelize } = require('sequelize')

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_ROOT,
  MYSQL_PASSWORD
} = process.env

const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_ROOT, MYSQL_PASSWORD, {
  dialect: 'mysql',
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  timezone: '+08:00',
  define: {
    paranoid: true,
    timestamps: true,
    underscored: true,
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  },
  query: {
    raw: true
  }
})

module.exports = sequelize
