const service = require('../service/user')
const { SuccessResponse } = require('../utils/response')

class UserController {
  async create (ctx) {
    const user = ctx.request.body
    const { userId } = await service.create(user)
    ctx.body = new SuccessResponse({ userId })
  }

  async getUserInfo(ctx) {
    const user = ctx.user
    const result = await service.getUserById(user.userId)
    ctx.body = new SuccessResponse(result)
  }
}

module.exports = new UserController()