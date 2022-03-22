const Router = require('koa-router')
const { create } = require('../controller/user')
const { verifyUser } = require('../middleware/user')
const { ParameterException } = require('../utils/http-exception')

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/', verifyUser, create)

module.exports = userRouter
