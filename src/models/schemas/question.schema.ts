import { Schema, model } from 'mongoose'

export interface IQuestion {
  text: string
  options: string[]
  keywords: string[]
  correctAnswerIndex: number
}

const questionSchema = new Schema<IQuestion>({
  text: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  keywords: {
    type: [String],
    default: []
  },
  correctAnswerIndex: {
    type: Number,
    required: true
  }
})

export default model<IQuestion>('Question', questionSchema)
