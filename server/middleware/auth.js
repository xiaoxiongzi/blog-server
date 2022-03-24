const jwt = require('jsonwebtoken')
const userService = require('../service/user')
const { ParameterException, UnauthorizedException } = require('../utils/http-exception')
const { md5Password } = require('../utils')
const { PUBLIC_KEY } = require('../config')

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body
  if (!name || !password) {
    const error = new ParameterException('姓名和密码不能为空!')
    throw error
  }
  const user = await userService.getUserByName(name)
  if (!user) {
    const error = new ParameterException('用户名不存在!')
    throw error
  }
  if (md5Password(password) !== user.password) {
    const error = new ParameterException('密码错误!')
    throw error
  }
  ctx.user = user
  await next()
}

const verifyAuth = async (ctx, next) => {
  const authorization = ctx.headers.authorization
  if (!authorization) {
    const error = new UnauthorizedException()
    throw error
  }
  const token = authorization.replace('Bearer ', '')
  const result = jwt.verify(token, PUBLIC_KEY, {
    algorithms: ['RS256']
  })
  ctx.user = result
  await next()
}


module.exports = {
  verifyLogin,
  verifyAuth,
}