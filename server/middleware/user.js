const service = require('../service/user')
const { ParameterException } = require('../utils/http-exception')

const verifyUser = async (ctx, next) => {
  const { name, password } = ctx.request.body
  if (!name || !password) {
    const error = new ParameterException('姓名和密码不能为空!')
    throw error
  }
  const result = await service.getUserByName(name)
  if (result) {
    const error = new ParameterException('用户名已存在！')
    throw error
  }
  await next()
}

module.exports = {
  verifyUser,
}