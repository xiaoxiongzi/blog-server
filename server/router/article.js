const Router = require('koa-router')
const { create, remove, update, list, detail } = require('../controller/article')
const { verifyAuth } = require('../middleware/auth')

const userRouter = new Router({ prefix: '/article' })

userRouter.post('/', verifyAuth, create)
userRouter.delete('/:articleId', verifyAuth, remove)
userRouter.put('/:articleId', verifyAuth, update)
userRouter.get('/list', list)
userRouter.get('/detail/:articleId', detail)

module.exports = userRouter