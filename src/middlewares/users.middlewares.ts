import { Request, Response, NextFunction } from 'express'
export const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ message: 'Username and password are required' })
  }
  next()
}
