import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {

  linksForm!: FormGroup;

  links: any[] = [];

  constructor() {
    this.linksForm = new FormGroup({
      link: new FormControl('', Validators.required),
      domain: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  addLink() {
    let domainname = (new URL(this.linksForm.value.link));
    let protocol = domainname.protocol;
    this.linksForm.value.domain = protocol+'//'+domainname.hostname+'/favicon.ico';

    this.links.push(
      {
        link: this.linksForm.value.link,
        domain: this.linksForm.value.domain
      }
    );
    this.linksForm.reset()
    console.log(this.links);
  }

}
