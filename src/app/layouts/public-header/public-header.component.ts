import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/shared/theme/template.service';
import { ThemeSwitcherService } from 'src/app/shared/theme/theme-switcher.service';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent implements OnInit {
  checked: boolean = false;
  constructor(
    private templateService: TemplateService,
    private themeswitcher: ThemeSwitcherService
  ) { }

  ngOnInit(): void {
    localStorage.getItem('theme') === 'light' ? this.checked = false: this.checked = true

    this.checked? this.templateService.mode = 'dark': this.templateService.mode = 'light'
  }

  switch() {
    this.checked ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
    this.themeswitcher.setMessage('');
  }

}
