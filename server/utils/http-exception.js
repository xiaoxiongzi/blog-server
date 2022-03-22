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
    this.errorCode = errorCode || 10000
  }
}

module.exports = {
  HttpException,
  ParameterException
}
