import { Component, OnInit } from '@angular/core';
import { ThemeSwitcherService } from './shared/theme/theme-switcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'Aymen2023';
  theme: string = 'light';

  constructor(
    private themeswitcher: ThemeSwitcherService
  ) {}

  ngOnInit() {
    this.switchTheme();

    this.themeswitcher.getMessage().subscribe(event => {
      this.switchTheme();
    })
  }

  switchTheme() {
    if(!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light')
      this.theme = 'light'
    } else {
      this.theme = localStorage.getItem('theme')!;
    }
  }
}
