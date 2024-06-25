import { CanActivateFn } from '@angular/router';

export const permissionsGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('user')) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.authorities[0].authority === 'admin' || user.authorities[0].authority === 'user') {
      return true;
    }
  }
  return false;
};
