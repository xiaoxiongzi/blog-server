const Article = require('../model/article')

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
      attributes: { exclude: ['content'] }
    })
    return result
  }

  async findByTitle(title) {
    const result = await Article.findOne({ where: { title }})
    return result
  }

  async find(where) {
    const result = await Article.findOne({ where })
    return result
  }
} 

module.exports = new ArticleService()