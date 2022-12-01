import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  theme: string = '';

  constructor() {
    if(!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light');
      this.theme = 'light'
    } else {
      this.theme = localStorage.getItem('theme')!;
    }

  }
}
