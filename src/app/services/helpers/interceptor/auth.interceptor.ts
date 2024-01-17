import { HttpInterceptorFn } from '@angular/common/http';
import { API_URL } from '../API_URL';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const excludedRoutes = [
    `${API_URL}/auth/login`,
    `${API_URL}/auth/register`
  ];

  if (excludedRoutes.includes(req.url)) {
    return next(req);
  }
  const token = localStorage.getItem('token');
  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  });
  return next(authReq);
};
