import express from 'express'

import UserController from './controllers/UserController'

const routes = express.Router()


routes.get('/', UserController.list )

routes.get('/users/:user', UserController.index)
routes.post('/users', UserController.create)
routes.put('/users', UserController.addObjective)


export default routes