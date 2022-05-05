import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.contactForm = this.initContactForm(this.team);
  }

  initContactForm(team?: Team): FormGroup {
    return this._formBuilder.group({
      contactName: [team?.contactName || '', Validators.required],
      contactEmail: [team?.contactEmail || '', Validators.required],
      contactMobile: [team?.contactMobile || '', Validators.required]
    });
  }

}
