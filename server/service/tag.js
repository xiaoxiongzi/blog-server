const Tag = require('../model/tag')

class TagService {
  async create (tag) {
    const result = await Tag.create(tag)
    return result
  }

  async remove (tagId) {
    await Tag.destroy({ where: { tagId }})
  }

  async update(tagId, tag) {
    await Tag.update(tag, {
      where: { tagId }
    })
  }

  async list() {
    const result = await Tag.findAndCountAll()
    return result
  }

  async find(where) {
    const result = await Tag.findOne({ where })
    return result
  }
} 

module.exports = new TagService()