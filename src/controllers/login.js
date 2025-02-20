const jwt = require('jsonwebtoken')
const loginRouter = require('express').Router()
const { findUserByEmail } = require('../services/user')

loginRouter.post('/', (request, response) => {
  const { email, password } = request.body
  const user = findUserByEmail(email)
  
  if (user && user.password === password) {
    const userForToken = {
      id: user.id,
      email: user.email,
      type: user.type
    }
    const token = jwt.sign(userForToken, process.env.SECRET)
    return response.status(200).json({ token, ...userForToken })
  } else {
    return response.status(401).json({ error: 'invalid email or password' })
  }
})

module.exports = loginRouter
