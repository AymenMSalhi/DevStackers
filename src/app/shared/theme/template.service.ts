import { Injectable } from '@angular/core';
import { ThemeSwitcherService } from './theme-switcher.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  mode: string = 'light';
  constructor(
    private themeSwitcher: ThemeSwitcherService
  ) {
    this.mode = localStorage.getItem('theme')!;

    this.themeSwitcher.getMessage().subscribe(res => {
      this.mode = localStorage.getItem('theme')!;
    })
  }
}
