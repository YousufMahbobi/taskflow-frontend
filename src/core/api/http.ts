import { env } from '@/core/config/env';
import axios from 'axios';

export const http = axios.create({
  baseURL: env.apiUrl,
  withCredentials: true,
});
