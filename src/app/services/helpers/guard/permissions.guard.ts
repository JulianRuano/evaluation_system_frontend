import { CanActivateFn } from '@angular/router';

export const permissionsGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('user')) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.authorities[0].authority === 'ADMIN'  || user.authorities[0].authority === 'USER'){
      return true;
    }
  }
  return false;
};
