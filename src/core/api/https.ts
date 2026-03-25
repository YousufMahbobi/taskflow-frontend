import { env } from '@/core/config/env';
import axios from 'axios';

export const https = axios.create({
  baseURL: env.apiUrl,
  withCredentials: true,
});
