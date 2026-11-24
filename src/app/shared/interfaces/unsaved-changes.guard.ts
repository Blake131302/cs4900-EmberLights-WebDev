// unsaved-changes.guard.ts
import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

// Interface so any form component can reuse this guard
export interface HasUnsavedChanges {
  canDeactivate: () => boolean | Observable<boolean>;
}

export const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> = (component) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
