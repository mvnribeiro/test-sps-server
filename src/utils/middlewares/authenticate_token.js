const jwt = require('jsonwebtoken')
const { findUserById } = require('../../services/user')

const authenticateToken = async (request, response, next) => {
  if (!request.token) {
    return response.status(401).json({ error: 'Token not provided' })
  }

  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!decodedToken.id) {
    return response.status(401).json({ error: 'invalid token' })
  }

  const user = findUserById(decodedToken.id.toString())
  request.user = user

  next()
}

module.exports = authenticateToken
