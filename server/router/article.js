const Router = require('koa-router')
const { create } = require('../controller/article')
const { verifyAuth } = require('../middleware/auth')

const userRouter = new Router({ prefix: '/article' })

userRouter.post('/', verifyAuth, create)

module.exports = userRouter