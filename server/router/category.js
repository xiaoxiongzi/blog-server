const Router = require('koa-router')
const { create, remove, update, list, detail } = require('../controller/category')
const { verifyAuth } = require('../middleware/auth')

const userRouter = new Router({ prefix: '/category' })

userRouter.post('/', verifyAuth, create)
userRouter.delete('/:categoryId', verifyAuth, remove)
userRouter.put('/:categoryId', verifyAuth, update)
userRouter.get('/list', list)
userRouter.get('/detail/:categoryId', detail)

module.exports = userRouter