class HttpException extends Error {
  constructor (message = '服务器异常', errorCode = 10000, status = 500) {
    super()
    this.errorCode = errorCode
    this.status = status
    this.message = message
  }
}

class ParameterException extends HttpException {
  constructor (message = '参数错误', errorCode = 10000) {
    super()
    this.code = 400
    this.message = message
    this.errorCode = errorCode
  }
}

class UnauthorizedException extends HttpException {
  constructor (message = '用户未登陆', errorCode = 10001) {
    super()
    this.code = 401
    this.message = message
    this.errorCode = errorCode
  }
}

module.exports = {
  HttpException,
  ParameterException,
  UnauthorizedException
}
