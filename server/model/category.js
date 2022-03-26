const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class Category extends Model {}

Category.init({
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'category_id'
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
  tableName: 'category',
  defaultScope: {
    attributes: { exclude: ['deletedAt'] }
  }
})

module.exports = Category
