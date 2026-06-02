import mongoose from 'mongoose'

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/SimpleQuiz');

    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error('MongoDB connection failed:', error)
    process.exit(1)
  }
}
