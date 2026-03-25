import { http } from '@/core/api/http';
import { LoginPayload } from '../schemas/auth.schema';

export const getCsrfCookie = () => http.get('/sanctum/csrf-cookie')

export const login = (payload: LoginPayload) => {
  return http.post('/login', payload)
} 

export const getLoggedInUser = () => {
  return http.get('/me')
}

export const logout = () => {
  return http.post('/logout')
}


