const { Op } = require('sequelize')
const service = require('../service/tag')
const { formatListAndCount } = require('../utils')
const { ParameterException } = require('../utils/http-exception')
const { SuccessResponse } = require('../utils/response')
const { checkRepeat } = require('../utils/service')

class TagController {
  async create (ctx) {
    const tag = ctx.request.body
    const { name } = tag
    await checkRepeat(service, { name }, '标签名已存在')
    const { tagId } = await service.create(tag)
    ctx.body = new SuccessResponse({ tagId })
  }

  async remove (ctx) {
    const { tagId } = ctx.params
    await service.remove(tagId)
    ctx.body = new SuccessResponse()
  }

  async update (ctx) {
    const { tagId } = ctx.params
    const tag = ctx.request.body
    const { name } = tag
    const where = { name, tagId: { [Op.not]: tagId } }
    await checkRepeat(service, where, '标签名已存在')
    await service.update(tagId, tag)
    ctx.body = new SuccessResponse()
  }

  async list (ctx) {
    const result = await service.list()
    ctx.body = new SuccessResponse(formatListAndCount(result))
  }

  async detail (ctx) {
    const { tagId } = ctx.params
    const result = await service.find({ tagId })
    if (!result) {
      const error = new ParameterException('标签不存在')
      throw error
    }
    ctx.body = new SuccessResponse({ ...result })
  }
}

module.exports = new TagController()