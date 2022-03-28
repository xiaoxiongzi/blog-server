const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const useRoutes = require('./router')
const { catchError } = require('./middleware/exception')
const { APP_PORT, IS_PROD } = require('./config')
const sequelize = require('./database')

const app = new Koa()
app.use(catchError)
app.use(bodyParser())
useRoutes(app)

const initApp = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    await sequelize.sync({ alter: !IS_PROD })
    console.log('数据库连接成功')
    app.listen(APP_PORT, () => {
      console.log(`App listening on http://127.0.0.1:${APP_PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

initApp()