import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/shared/theme/template.service';
import { ThemeSwitcherService } from 'src/app/shared/theme/theme-switcher.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {
  theme: string = 'light';
  checked: boolean = false;
  constructor(
    private templateService: TemplateService,
    private themeswitcher: ThemeSwitcherService
  ) {
    this.theme = this.templateService.mode;
  }

  ngOnInit(): void {
    localStorage.getItem('theme') === 'light' ? this.checked = false: this.checked = true
    this.checked? this.templateService.mode = 'dark': this.templateService.mode = 'light'
  }

  switch() {
    this.checked ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
    this.theme = localStorage.getItem('theme')!;
    this.themeswitcher.setMessage('');
  }
}
