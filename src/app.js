import express from 'express'
import loginR from './routes/login.routes.js'

const app = express()
app.use(express.json())
app.use(loginR)

export default app
