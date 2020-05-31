import express from 'express'

import UserController from './controllers/UserController'

const routes = express.Router()


routes.get('/', UserController.index )

routes.post('/users', UserController.create)

export default routes