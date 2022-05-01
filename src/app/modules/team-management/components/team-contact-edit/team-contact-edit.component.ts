import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Team } from 'app/core/team/team.types';

@Component({
  selector: 'app-team-contact-edit',
  templateUrl: './team-contact-edit.component.html',
  styleUrls: ['./team-contact-edit.component.scss']
})
export class TeamContactEditComponent implements OnInit, OnChanges {

  @Input() team?: Team;

  contactForm?: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactForm = this.createContactForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.team);
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
