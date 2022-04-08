import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-team-contact-edit',
  templateUrl: './team-contact-edit.component.html',
  styleUrls: ['./team-contact-edit.component.scss']
})
export class TeamContactEditComponent implements OnInit {
  contactForm?: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup ({
      contactName: new FormControl('',Validators.required),
      contactEmail: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  saveFrom(): void {
    let payload = this.contactForm?.value;
    console.log(payload);
  }

}
