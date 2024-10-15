import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StepGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const hasCompletedStep1 = true; // Check your condition here
    if (!hasCompletedStep1) {
      this.router.navigate(['/step1']);
      return false;
    }
    return true;
  }
}
