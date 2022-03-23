const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')

dotenv.config({
  path: path.resolve(__dirname, `../env/.env.${process.env.NODE_ENV}`)
})

const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './keys/private.key'))
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'))

const {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_ROOT,
  MYSQL_PASSWORD
} = process.env

module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_ROOT,
  MYSQL_PASSWORD,
  PRIVATE_KEY,
  PUBLIC_KEY
}
