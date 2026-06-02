import { Router } from 'express'
import {
  createQuestion,
  deleteQuestionById,
  getAllQuestions,
  getQuestionById,
  updateQuestionById
} from '~/controllers/questions.controllers'

const questionsRouter = Router()

questionsRouter.post('/', createQuestion)
questionsRouter.get('', getAllQuestions)
questionsRouter.get('/:id', getQuestionById)
questionsRouter.put('/:id', updateQuestionById)
questionsRouter.delete('/:id', deleteQuestionById)
export default questionsRouter
