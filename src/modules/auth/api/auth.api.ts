import { api, sanctum } from '@/core/api/http';
import { LoginPayload } from '../schemas/auth.schema';

export const getCsrfCookie = () => sanctum.get('/sanctum/csrf-cookie')

export const login = (payload: LoginPayload) => {
  return api.post('/login', payload)
} 

export const getLoggedInUser = () => {
  return api.get('/me')
}

export const logout = () => {
  return api.post('/logout')
}


