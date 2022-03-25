const Article = require('../model/article')

class ArticleService {
  async create (article) {
    const result = await Article.create(article)
    return result
  }
}

module.exports = new ArticleService()