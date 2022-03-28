const { Op } = require('sequelize')
const service = require('../service/category')
const { formatListAndCount } = require('../utils')
const { ParameterException } = require('../utils/http-exception')
const { SuccessResponse } = require('../utils/response')
const { checkRepeat } = require('../utils/service')

class CategoryController {
  async create (ctx) {
    const category = ctx.request.body
    const { name } = category
    await checkRepeat(service, { name }, '分类名已存在')
    const { categoryId } = await service.create(category)
    ctx.body = new SuccessResponse({ categoryId })
  }

  async remove (ctx) {
    const { categoryId } = ctx.params
    await service.remove(categoryId)
    ctx.body = new SuccessResponse()
  }

  async update (ctx) {
    const { categoryId } = ctx.params
    const category = ctx.request.body
    const { name } = category
    const where = { name, categoryId: { [Op.not]: categoryId } }
    await checkRepeat(service, where, '分类名已存在')
    await service.update(categoryId, category)
    ctx.body = new SuccessResponse()
  }

  async list (ctx) {
    const result = await service.list()
    ctx.body = new SuccessResponse(formatListAndCount(result))
  }

  async detail (ctx) {
    const { categoryId } = ctx.params
    const result = await service.find({ categoryId })
    if (!result) {
      const error = new ParameterException('分类不存在')
      throw error
    }
    ctx.body = new SuccessResponse({ ...result })
  }
}

module.exports = new CategoryController()