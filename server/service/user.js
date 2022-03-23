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

  async getUserById (id) {
    const user = await User.findOne({ 
      where: { id },
      attributes: ['id', 'name', 'avatar', 'role'],
    })
    return user
  }
}

module.exports = new UserService()