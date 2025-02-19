const {
  addUser,
  getAllUsers,
  removeUser,
  updateUser,
  findUserByEmail,
  findUserByName
} = require('../services/user')

const usersRouter = require('express').Router()

usersRouter.get('/', (_request, response) => {
  try {
    return response.status(200).json(getAllUsers())
  } catch (error) {
    return response.status(500).json({ error: error.message })
  }
})

usersRouter.get('/:id', (request, response) => {
  try {
    const id = request.params.id
    const user = getAllUsers().find(user => user.id === id)
    return response.status(200).json(user)
  } catch (error) {
    return response.status(500).json({ error: error.message })
  }
})

usersRouter.post('/', (request, response) => {
  try {
    const user = request.body

    if (findUserByEmail(user.email)) {
      return response.status(400).json({ error: 'Email already exists' })
    }

    if (findUserByName(user.name)) {
      return response.status(400).json({ error: 'Name already exists' })
    }

    addUser(user)
    return response.status(201).json(user)
  } catch (error) {
    return response.status(500).json({ error: error.message })
  }
})

usersRouter.delete('/:id', (request, response) => {
  try {
    const id = request.params.id
    removeUser(id)
    return response.status(204).end()
  } catch (error) {
    return response.status(500).json({ error: error.message })
  }
})

usersRouter.put('/:id', (request, response) => {
  try {
    const id = request.params.id
    const updatedUser = request.body
    updateUser(id, updatedUser)
    return response.status(200).json(updatedUser)
  } catch (error) {
    return response.status(500).json({ error: error.message })
  }
})

module.exports = usersRouter
