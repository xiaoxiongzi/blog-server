const Category = require('../model/category')

class CategoryService {
  async create (category) {
    const result = await Category.create(category)
    return result
  }

  async remove (categoryId) {
    await Category.destroy({ where: { categoryId }})
  }

  async update(categoryId, category) {
    await Category.update(category, {
      where: { categoryId }
    })
  }

  async list() {
    const result = await Category.findAndCountAll()
    return result
  }

  async find(where) {
    const result = await Category.findOne({ where })
    return result
  }
} 

module.exports = new CategoryService()