const User = require('../model/user')

class UserService {
  async create (user) {
    const { name, password } = user
    const result = await User.create({ name, password })
    return result.toJSON()
  }

  async getUserByName (name) {
    const user = await User.findOne({ where: { name } })
    return user
  }

  async getUserById (userId) {
    const user = await User.findOne({ 
      where: { userId },
      attributes: ['userId', 'name', 'avatar', 'role'],
    })
    return user
  }
}

module.exports = new UserService()