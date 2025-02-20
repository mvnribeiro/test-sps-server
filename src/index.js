require('dotenv').config()
const express = require('express')
const cors = require('cors')
const loginRouter = require('./controllers/login')
const usersRouter = require('./controllers/user')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/login', loginRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
})
