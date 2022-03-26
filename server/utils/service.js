const { ParameterException } = require('./http-exception')

async function checkRepeat(service, where, message) {
  const result = await service.find(where)
  if (result) {
    const error = new ParameterException(message)
    throw error
  }
}

module.exports = {
  checkRepeat
}