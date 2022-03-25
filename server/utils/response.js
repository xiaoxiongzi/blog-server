class SuccessResponse {
  constructor(data, msg = 'success', code = 0) {
    this.msg = msg
    this.code = code
    if (data) {
      this.data = data
    }
  }
}
class ErrorResponse {
  constructor(msg = 'error', code = 1) {
    this.msg = msg
    this.code = code
  }
}

module.exports = {
  SuccessResponse,
  ErrorResponse
}