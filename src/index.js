require('dotenv').config()
const express = require('express')
const cors = require('cors')
const usersRouter = require('./controllers/user')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/users', usersRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
})
