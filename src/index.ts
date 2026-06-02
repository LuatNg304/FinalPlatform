import express from 'express'
import usersRouter from './routes/users.routes'
import dotenv from 'dotenv'
import { connectDB } from './config/database.config'
import quizzesRouter from './routes/quizzes.routes'
import questionsRouter from './routes/questions.routes'

dotenv.config()
connectDB()
const app = express()
const port = 3000
app.use(express.json()) //dung de parse json tu client gui len

app.use('/quizzes', quizzesRouter)
app.use('/questions', questionsRouter)
app.use('/users', usersRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
