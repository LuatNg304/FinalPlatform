import { Router } from 'express'
import { createQuestion, deleteQuestionById, getQuestionById } from '~/controllers/questions.controllers'

const questionsRouter = Router()

questionsRouter.post('/', createQuestion)
questionsRouter.get('/:id', getQuestionById)
questionsRouter.delete('/:id', deleteQuestionById)
export default questionsRouter
