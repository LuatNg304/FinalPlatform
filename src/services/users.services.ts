import { SignOptions } from 'jsonwebtoken'
import { TokenType } from '~/constants/enum'
import { RegisterRequest } from '~/models/request/user.request'
import userSchema from '~/models/schemas/user.schema'
import { hashPassword } from '~/utils/crypto'
import { signToken } from '~/utils/jwt'

class UsersService {
  private signAccessToken(userId: string) {
    return signToken({
      payload: {
        userId,
        tokenType: TokenType.AccessToken
      },
      options: {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN! as SignOptions['expiresIn']
      }
    })
  }
  private signRefreshToken(userId: string) {
    return signToken({
      payload: {
        userId,
        tokenType: TokenType.AccessToken
      },
      options: {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN! as SignOptions['expiresIn']
      }
    })
  }
  async register(payload: RegisterRequest) {
    const result = await userSchema.create({
      ...payload,
      password: hashPassword(payload.password)
    })
    const userId = result._id.toString()
    const [access_token, refresh_token] = await Promise.all([
      this.signAccessToken(userId),
      this.signRefreshToken(userId)
    ])
    return {
      access_token,
      refresh_token
    }
  }
  async findByUsername(username: string) {
    const user = await userSchema.findOne({ username })
    return Boolean(user)
  }
}

const usersService = new UsersService()
export default usersService
