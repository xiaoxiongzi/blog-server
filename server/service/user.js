const User = require('../model/user')

class UserService {
  async create (user) {
    const { name, password } = user
    const result = await User.create({ name, password })
    return result.toJSON()
  }

  async getUserByName (name) {
    const users = await User.findOne({ where: { name } })
    return users
  }
}

module.exports = new UserService()