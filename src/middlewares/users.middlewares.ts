import { Request, Response, NextFunction } from 'express'
import { checkSchema } from 'express-validator'
import usersService from '~/services/users.services'
import { validate } from '~/utils/validations'

export const registerValidation = validate(
  checkSchema({
    username: {
      in: ['body'],
      isLength: {
        options: { min: 3 },
        errorMessage: 'Username must be at least 3 characters long'
      },
      isString: true,
      notEmpty: true,
      errorMessage: 'Username is required and must be a string',
      trim: true,
      custom: {
        options: async (value) => {
          const existingUser = await usersService.findByUsername(value)
          if (existingUser) {
            throw new Error('Username already exists')
          }
        }
      }
    },
    password: {
      in: ['body'],
      isLength: {
        options: { min: 8 },
        errorMessage: 'Password must be at least 8 characters long'
      },
      isString: true,
      notEmpty: true,
      errorMessage: 'Password is required and must be a string',
      trim: true
    },
    confirmPassword: {
      in: ['body'],
      custom: {
        options: (value, { req }) => {
          if (value !== req.body.password) {
            throw new Error('Confirm password must match password')
          }
          return true
        }
      },
      isString: true,
      notEmpty: true,
      errorMessage: 'Confirm password is required and must be a string',
      trim: true
    }
  })
)
