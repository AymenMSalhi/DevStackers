import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'Dev Stackers';
  theme: string = 'light';

  constructor(
  ) {}

  ngOnInit() {}
}
