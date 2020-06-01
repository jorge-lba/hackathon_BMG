import express from 'express'

import UserController from './controllers/UserController'

const routes = express.Router()


routes.get('/', UserController.list )

routes.get('/users/:name', UserController.index)
routes.post('/users', UserController.create)


export default routes