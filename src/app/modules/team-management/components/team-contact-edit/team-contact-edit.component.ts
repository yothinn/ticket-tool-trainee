import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-team-contact-edit',
  templateUrl: './team-contact-edit.component.html',
  styleUrls: ['./team-contact-edit.component.scss']
})
export class TeamContactEditComponent implements OnInit {

  contactForm?: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactForm = this.createContactForm();
  }

  createContactForm(): FormGroup {
    return this.formBuilder.group({
      contactName: ['', Validators.required],
      contactEmail: ['', Validators.required],
      contactMobile: ['', Validators.required]
    });
  }
  saveFrom(): void {
    const payload = this.contactForm?.value;
    console.log(payload);
  }

}
