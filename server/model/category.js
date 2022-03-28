const { Model, DataTypes } = require('sequelize')
const Article = require('./article')
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
// Category 和 Article 是一对多的关系。因此，每个Category有多个Article，Article表中有一个categoryId列。
// https://stackoverflow.com/questions/60190182/sequelize-hasmany-and-belongsto-issue
Category.hasMany(Article, { foreignKey: 'categoryId' })
Article.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' })
module.exports = Category
