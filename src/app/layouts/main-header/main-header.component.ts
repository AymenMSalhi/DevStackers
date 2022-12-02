import { Component, OnInit } from '@angular/core';
import { ThemeSwitcherService } from 'src/app/shared/theme/theme-switcher.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  checked: boolean = false;
  constructor(
    private themeswitcher: ThemeSwitcherService
  ) { }

  ngOnInit(): void {
    localStorage.getItem('theme') === 'light' ? this.checked = false: this.checked = true
  }

  switch() {
    this.checked ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
    this.themeswitcher.setMessage('');
  }
}
