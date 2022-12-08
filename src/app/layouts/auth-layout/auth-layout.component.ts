import { Component, OnInit } from '@angular/core';
import { ThemeSwitcherService } from 'src/app/shared/theme/theme-switcher.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {
  theme: string = '';
  constructor(
    private themeswitcher: ThemeSwitcherService
  ) { }

  ngOnInit(): void {
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
