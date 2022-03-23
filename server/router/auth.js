const  Router = require('koa-router')
const { login } = require('../controller/auth')
const { verifyLogin } = require('../middleware/auth')

const authRouter = new Router()
authRouter.post('/login', verifyLogin, login)

module.exports = authRouter