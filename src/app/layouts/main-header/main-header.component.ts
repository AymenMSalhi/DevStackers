import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/shared/services/template.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  theme!: string;
  constructor(
    private templateService: TemplateService
  ) { }

  ngOnInit(): void {
    this.theme = this.templateService.theme;
  }

  switchTheme() {
    //this.theme === 'light'? 'dark': 'light'
    if(this.theme === 'light') {
      this.theme = 'dark';
      localStorage.setItem('theme', 'dark')
    } else {
      this.theme = 'light';
      localStorage.setItem('theme', 'light')
    }
  }
}
