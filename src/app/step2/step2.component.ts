import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component {
  constructor(private router: Router) {}

  goToPreviousStep() {
    this.router.navigate(['/step1']);
  }

  goToNextStep() {
    this.router.navigate(['/step3']);
  }
}
