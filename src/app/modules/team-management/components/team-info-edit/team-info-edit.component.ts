import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Team } from 'app/core/team/team.types';

@Component({
  selector: 'app-team-info-edit',
  templateUrl: './team-info-edit.component.html',
  styleUrls: ['./team-info-edit.component.scss']
})
export class TeamInfoEditComponent implements OnInit, OnChanges {

  @Input() team?: Team;
  infoFrom?: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.infoFrom = this.createInfoForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
      
  }

  createInfoForm(): FormGroup {
    return this.formBuilder.group({
      teamName: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  saveFrom(): void {
    const payload = this.infoFrom?.value;
    console.log(payload);
  }

}
