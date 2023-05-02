import { User } from '@/types/user.d';
import { request } from 'umi';
import env from '../../config/env';

export function getCurrentUser() {
  return request<User>(`${env.API_URL}/api/currentUser`, {
    method: 'GET',
  });
}

export function userLogin(email: string, password: string) {
  return request<User>(`${env.API_URL}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: { email, password },
  });
}

export function userLogout() {
  return request<void>(`${env.API_URL}/api/logout`, {
    method: 'POST',
  });
}
