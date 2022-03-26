class HttpException extends Error {
  constructor (message = '服务器异常', errorCode = 10000, status = 500) {
    super()
    this.status = status
    this.errorCode = errorCode
    this.message = message
  }
}

class ParameterException extends HttpException {
  constructor (message = '参数错误', errorCode = 10000) {
    super()
    this.status = 400
    this.errorCode = errorCode
    this.message = message
  }
}

class UnauthorizedException extends HttpException {
  constructor (message = '用户未登陆', errorCode = 10001) {
    super()
    this.status = 401
    this.message = message
    this.errorCode = errorCode
  }
}

module.exports = {
  HttpException,
  ParameterException,
  UnauthorizedException
}
