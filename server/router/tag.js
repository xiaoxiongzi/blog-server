const Router = require('koa-router')
const { create, remove, update, list, detail } = require('../controller/tag')
const { verifyAuth } = require('../middleware/auth')

const userRouter = new Router({ prefix: '/tag' })

userRouter.post('/', verifyAuth, create)
userRouter.delete('/:tagId', verifyAuth, remove)
userRouter.put('/:tagId', verifyAuth, update)
userRouter.get('/list', list)
userRouter.get('/detail/:tagId', detail)

module.exports = userRouter