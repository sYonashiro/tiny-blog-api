const express = require('express')
const routes = express.Router()

const PostController = require('./controllers/PostController')

routes.get('/posts', PostController.index)
routes.post('/posts', PostController.store)
routes.put('/posts/:id', PostController.update)
routes.delete('/posts/:id', PostController.delete)

module.exports = routes