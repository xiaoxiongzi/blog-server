const { HttpException } = require('../utils/http-exception')

const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    // 已知错误
    if (error instanceof HttpException) {
      const { message, errorCode, status } = error
      ctx.body = {
        message,
        errorCode,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = status
    } else {
      ctx.body = {
        message: '未知异常',
        errorCode: 999,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = 500
    }
  }
}

module.exports = {
  catchError
}
