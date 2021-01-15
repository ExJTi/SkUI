import { post } from 'sky-engine/utils/request';
import { ADMIN } from '@/api/apiModules';

export function loginByUsername(userName, password) {
  const data = {
    userName,
    pwd: password,
    timestamp: new Date().getTime()
  };
  return post(`${ADMIN}/loginAdmin`, data);
}

export function logout() {
  return post(`${ADMIN}/logoutAdmin`);
}

export function getUserInfo() {
  return post(`${ADMIN}/getCurrentUserInfo`);
}
