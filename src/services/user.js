let users = require('../usersMockDb')

const addUser = (user) => {
  user.id = (Math.random() * 10000).toFixed(0)
  users.push(user)
}

const getAllUsers = () => {
  return users
}

const removeUser = (id) => {
  users = users.filter(user => user.id !== id)
}

const updateUser = (id, updatedUser) => {
  users = users.map(user => user.id === id ? updatedUser : user)
}

const findUserByEmail = (email) => {
  return users.find(user => user.email === email)
}

const findUserByName = (name) => {
  return users.find(user => user.name === name)
}

const findUserById = (id) => {
  return users.find(user => user.id === id)
}

module.exports = {
  users,
  addUser,
  getAllUsers,
  removeUser,
  updateUser,
  findUserByEmail,
  findUserByName,
  findUserById
}
