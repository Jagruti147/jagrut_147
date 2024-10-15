import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { StepGuard } from './step.guard';

export const routes: Routes = [
  { path: 'step1', component: Step1Component },
  { path: 'step2', component: Step2Component,canActivate: [StepGuard] },
  { path: 'step3', component: Step3Component },
  { path: '', redirectTo: '/step1', pathMatch: 'full' }, // default route
  { path: '**', redirectTo: '/step1' } // fallback route
];

export class AppRoutingModule { }
