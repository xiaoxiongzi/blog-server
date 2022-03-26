const { Op } = require('sequelize')
const service = require('../service/article')
const { formatListAndCount } = require('../utils')
const { ParameterException } = require('../utils/http-exception')
const { SuccessResponse } = require('../utils/response')
const { checkRepeat } = require('../utils/service')
class ArticleController {
  async create (ctx) {
    const article = ctx.request.body
    const { title } = article
    await checkRepeat(service, { title }, '文章标题已存在')
    const { articleId } = await service.create(article)
    ctx.body = new SuccessResponse({ articleId })
  }

  async remove (ctx) {
    const { articleId } = ctx.params
    await service.remove(articleId)
    ctx.body = new SuccessResponse()
  }

  async update (ctx) {
    const { articleId } = ctx.params
    const article = ctx.request.body
    const { title } = article
    const where = { title, articleId: { [Op.not]: articleId } }
    await checkRepeat(service, where, '文章标题已存在')
    await service.update(articleId, article)
    ctx.body = new SuccessResponse()
  }

  async list (ctx) {
    const { offset = 0, size = 10 } = ctx.request.query
    const result = await service.list(Number(offset), Number(size))
    ctx.body = new SuccessResponse(formatListAndCount(result))
  }

  async detail (ctx) {
    const { articleId } = ctx.params
    const result = await service.find({ articleId })
    if (!result) {
      const error = new ParameterException('文章不存在')
      throw error
    }
    ctx.body = new SuccessResponse({ ...result })
  }
}

module.exports = new ArticleController()