import { Component, OnInit } from '@angular/core';
import { ThemeSwitcherService } from 'src/app/shared/theme/theme-switcher.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
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
