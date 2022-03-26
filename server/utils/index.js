const crypto = require('crypto')

const md5Password = (password) => {
  const md5 = crypto.createHash('md5')
  const result = md5.update(password).digest('hex')
  return result
}

function formatListAndCount(data) {
  const { count, rows } = data
  return {
    total: count,
    list: rows
  }
}

module.exports = {
  md5Password,
  formatListAndCount
}
