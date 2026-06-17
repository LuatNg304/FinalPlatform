import { Router } from 'express'
import { registerUser } from '~/controllers/users.controllers'
import { registerValidation } from '~/middlewares/users.middlewares'
import { validate } from '~/utils/validations'

const usersRouter = Router()

usersRouter.post('/register', registerValidation, registerUser)

export default usersRouter
