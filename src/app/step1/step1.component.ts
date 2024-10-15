import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component {
  constructor(private router: Router) {}

  goToNextStep() {
    this.router.navigate(['/step2']);
  }
}
