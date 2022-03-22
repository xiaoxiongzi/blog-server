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
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true
  },
  query: {
    raw: true
  }
})

module.exports = sequelize
