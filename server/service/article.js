const { col } = require('sequelize')
const Article = require('../model/article')
const Category = require('../model/category')

// https://stackoverflow.com/questions/50148491/how-to-get-join-data-result-without-prefix-table-name-in-sequelize-orm/52922156#52922156
const createQueryOption = (excludeContent) => {
  return {
    attributes: {
      ...(excludeContent ? {
        exclude: ['content']
      } : {}),
      include: [
        [col('category.name'), 'categoryName']
      ]
    },
    include: [
      {
        model: Category,
        as: 'category',
        required: false,
        attributes: []
      }
    ],
    raw: true
  }
}

class ArticleService {
  async create (article) {
    const result = await Article.create(article)
    return result
  }

  async remove (articleId) {
    await Article.destroy({ where: { articleId }})
  }

  async update(articleId, article) {
    await Article.update(article, {
      where: { articleId }
    })
  }

  async list(offset, limit) {
    const result = await Article.findAndCountAll({ 
      offset, 
      limit,
      ...createQueryOption(true)
    })
    return result
  }

  async findByTitle(title) {
    const result = await Article.findOne({ where: { title }})
    return result
  }

  async find(where) {
    const result = await Article.findOne({ where, ...createQueryOption(false)  })
    return result
  }
} 

module.exports = new ArticleService()