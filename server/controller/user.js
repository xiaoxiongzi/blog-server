const service = require('../service/user')

class UserController {
  async create (ctx) {
    const user = ctx.request.body
    const result = await service.create(user)
    ctx.body = result
  }
}

module.exports = new UserController()