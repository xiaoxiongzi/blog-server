const Router = require('koa-router')
const { create, getUserInfo } = require('../controller/user')
const { verifyUser } = require('../middleware/user')
const { verifyAuth } = require('../middleware/auth')

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/', verifyUser, create)
userRouter.get('/info', verifyAuth, getUserInfo)

module.exports = userRouter
