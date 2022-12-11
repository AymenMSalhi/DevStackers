import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  hobbies: string[] = [];

  hobbiesForm!: FormGroup;
  constructor() {
    this.hobbiesForm = new FormGroup({
      'hobby': new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  addHobby() {
    this.hobbies.push(
      this.hobbiesForm.value.hobby
    );
    this.hobbiesForm.reset();
  }

}
