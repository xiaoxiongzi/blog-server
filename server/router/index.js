const requireDirectory = require('require-directory')
const Router = require('koa-router')

const useRoutes = (app) => {
  requireDirectory(module, '.', {
    visit (router) {
      if (router instanceof Router) {
        app.use(router.routes())
        app.use(router.allowedMethods())
      }
    }
  })
}

module.exports = useRoutes