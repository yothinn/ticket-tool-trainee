import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Team } from 'app/core/team/team.types';

type TeamInfo = {
  name: string;
  description: string;
};
@Component({
  selector: 'app-team-info-edit',
  templateUrl: './team-info-edit.component.html',
  styleUrls: ['./team-info-edit.component.scss']
})
export class TeamInfoEditComponent implements OnInit, OnChanges {

  @Input() team?: Team;

  infoForm?: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.infoForm = this.initInfoForm(this.team);
  }

  initInfoForm(team?: Team): FormGroup {
    return this._formBuilder.group({
      name: [team?.name || '', Validators.required],
      description: [team?.description || '', Validators.required]
    });
  }

  getTeamInfo(): TeamInfo {
    return this.infoForm.getRawValue() as TeamInfo;
  }

}
