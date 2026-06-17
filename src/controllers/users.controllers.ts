import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { RegisterRequest } from '~/models/request/user.request'
import usersService from '~/services/users.services'

export const registerUser = async (req: Request<ParamsDictionary, any, RegisterRequest>, res: Response) => {
  try {
    const result = await usersService.register(req.body)
    res.status(201).json({
      message: 'User registered successfully',
      result
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error registering user',
      error
    })
  }
}
