import { CanDeactivateFn } from '@angular/router';

export const withotSaveGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
