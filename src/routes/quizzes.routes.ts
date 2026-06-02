import { Router } from 'express'

import {
  createManyQuestionsInQuiz,
  createQuestionInQuiz,
  createQuiz,
  deleteQuizById,
  getAllQuizzes,
  getById,
  getQuizQuestionsCapital,
  updateQuizById
} from '~/controllers/quizzes.controllers'

const quizzesRouter = Router()
quizzesRouter.post('/', createQuiz)
quizzesRouter.get('/', getAllQuizzes)
quizzesRouter.get('/:id', getById)
quizzesRouter.put('/:id', updateQuizById)
quizzesRouter.delete('/:id', deleteQuizById)
quizzesRouter.get('/:quizId/populate', getQuizQuestionsCapital)
quizzesRouter.post('/:quizId/question', createQuestionInQuiz)
quizzesRouter.post('/:quizId/questions', createManyQuestionsInQuiz)

export default quizzesRouter
