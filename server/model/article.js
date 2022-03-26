const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class Article extends Model {}

Article.init({
  articleId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'article_id'
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '文章标题'
  },
  summary: {
    type: DataTypes.STRING,
    defaultValue: '',
    comment: '文章摘要'
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: '文章详情'
  },
  cover: {
    type: DataTypes.STRING(2048),
    defaultValue: '',
    comment: '封面图片链接'
  },
  commentCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    comment: '评论数',
    field: 'comment_count'
  }
}, {
  sequelize,
  tableName: 'article',
})

module.exports = Article
