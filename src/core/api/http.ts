import { env } from '@/core/config/env';
import axios from 'axios';

export const api = axios.create({
  baseURL: env.apiUrl,
  withCredentials: true, 
})

//  Separate client for Sanctum
export const sanctum = axios.create({
  baseURL: env.baseUrl,
  withCredentials: true,
})

api.defaults.withXSRFToken = true
sanctum.defaults.withXSRFToken = true
