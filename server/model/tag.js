const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class Tag extends Model {}

Tag.init({
  tagId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'tag_id'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '标签名称'
  }
}, {
  sequelize,
  timestamps: true,
  tableName: 'tag'
})

module.exports = Tag
