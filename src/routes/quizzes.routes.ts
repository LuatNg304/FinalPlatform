import { Router } from 'express'

import { createQuiz, getAllQuizzes, getById } from '~/controllers/quizzes.controllers'

const quizzesRouter = Router()

quizzesRouter.get('/', getAllQuizzes)
quizzesRouter.get('/:id', getById)
quizzesRouter.post('/', createQuiz)
export default quizzesRouter
