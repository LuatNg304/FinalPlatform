import { Request, Response } from 'express'
import quizSchema from '~/models/schemas/quiz.schema'

export const getAllQuizzes = async (req: Request, res: Response) => {
  try {
    const quizzes = await quizSchema.find()

    res.status(200).json(quizzes)
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching quizzes',
      error
    })
  }
}
export const getById = async (req: Request, res: Response) => {
  try {
    const quiz = await quizSchema.findById(req.params.id).populate('questions')
    if (!quiz) {
      return res.status(404).json({
        message: 'Quiz not found'
      })
    }
    res.status(200).json(quiz)
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching quiz',
      error
    })
  }
}
export const createQuiz = async (req: Request, res: Response) => {
  try {
    const { title, description, questions } = req.body
    const quiz = await quizSchema.create({
      title,
      description,
      questions
    })
    res.status(201).json(quiz)
  } catch (error) {
    res.status(500).json({
      message: 'Error creating quiz',
      error
    })
  }
}

