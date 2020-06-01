import express from 'express'

import UserController from './controllers/UserController'

const routes = express.Router()


routes.get('/', UserController.list )

routes.post('/users', UserController.create)
routes.put('/users/:user', UserController.index)
routes.post('/users/objectives', UserController.addObjective)
routes.post('/users/goals', UserController.addGoal)


export default routes