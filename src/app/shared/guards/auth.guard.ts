import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AngularFireAuth);
  const hasAuthenticated = Boolean(authService.authState);
  const router = inject(Router);
  !hasAuthenticated && router.navigate(['login']);
  return hasAuthenticated;
};
