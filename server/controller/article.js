const service = require('../service/article')
const { SuccessResponse } = require('../utils/response')

class ArticleController {
  async create (ctx) {
    const article = ctx.request.body
    const { articleId } = await service.create(article)
    ctx.body = new SuccessResponse({ articleId })
  }
}

module.exports = new ArticleController()