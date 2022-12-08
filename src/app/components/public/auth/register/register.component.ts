import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  step: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  Back() {
    this.step--;
  }

  SendVerifCode() {
    this.step++;
  }

  onCodeChanged(e: any) {

  }

  onCodeCompleted(e: any) {

  }

  VerifCode() {
    this.step++;
  }

  RegisterUser() {
    this.step++;
  }
}
