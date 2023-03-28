// api/user.ts
import request from '@/utils/request'

export const Login = (data: {[key: string]: any}) => {
  return request.post('/sys/login', data)
}