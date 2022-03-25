const jwt = require('jsonwebtoken')
const { PRIVATE_KEY  } = require('../config')
const { SuccessResponse } = require('../utils/response')

class AuthController {
  async login(ctx) {
    const { userId, name } = ctx.user
    const token = jwt.sign({ userId, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24 * 10, // 10天
      algorithm: 'RS256'
    })
    ctx.body = new SuccessResponse({ token })
  }
}
module.exports = new AuthController()