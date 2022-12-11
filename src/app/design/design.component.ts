import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
  theme: string = 'light';
  constructor() { }

  ngOnInit(): void {
  }

  themeSwitch() {
    if(this.theme === 'light') {
      this.theme = 'dark';
    } else {
      this.theme = 'light';
    }
  }

}
