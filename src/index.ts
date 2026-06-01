import express from 'express'
import usersRouter from './routes/users.routes'

const app = express()
const port = 3000
app.use(express.json()) //dung de parse json tu client gui len
app.use('/users', usersRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
