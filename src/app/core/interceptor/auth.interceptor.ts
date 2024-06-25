import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const excludedRoutes = [
    `${environment.baseUrl}/auth/login`,
    `${environment.baseUrl}/auth/register`
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
