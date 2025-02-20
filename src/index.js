require('dotenv').config()
const express = require('express')
const cors = require('cors')
const tokenExtractor = require('./utils/middlewares/token_extractor')
const authenticateToken = require('./utils/middlewares/authenticate_token')
const loginRouter = require('./controllers/login')
const usersRouter = require('./controllers/user')

const app = express()

app.use(cors())
app.use(express.json())
app.use(tokenExtractor)
app.use('/login', loginRouter)
app.use('/users', authenticateToken, usersRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
})
