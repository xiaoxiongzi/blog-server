const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')
const { md5Password } = require('../utils/index')

class User extends Model {}

User.init({
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'user_id'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  avatar: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  password: {
    type: DataTypes.STRING,
    set(val) {
      this.setDataValue('password', md5Password(val))
    },
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    defaultValue: 'user'
  }
}, {
  sequelize,
  timestamps: true,
  tableName: 'user'
})

module.exports = User
