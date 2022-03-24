const service = require('../service/user')

class UserController {
  async create (ctx) {
    const user = ctx.request.body
    await service.create(user)
    ctx.body = {
      msg: 'success'
    }
  }

  async getUserInfo(ctx) {
    const user = ctx.user
    const result = await service.getUserById(user.userId)
    ctx.body = result
  }
}

module.exports = new UserController()