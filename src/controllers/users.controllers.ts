import { Request, Response } from 'express'

export const loginController = (req: Request, res: Response) => {
  if (req.body.email === 'luatluat3042@gmail.com' && req.body.password === 'Luatluat304@') {
    res.json({
      message: 'Login successful'
    })
  }
  res.status(401).json({
    error: 'Invalid email or password'
  })
}
