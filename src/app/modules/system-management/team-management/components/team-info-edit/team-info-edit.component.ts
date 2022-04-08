import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-team-info-edit',
  templateUrl: './team-info-edit.component.html',
  styleUrls: ['./team-info-edit.component.scss']
})
export class TeamInfoEditComponent implements OnInit {
  infoFrom?: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.infoFrom = new FormGroup ({
      teamName: new FormControl('',Validators.required),
      teamDescription: new FormControl('',Validators.required)
    });
  }
  saveFrom(): void {
    let payload = this.infoFrom?.value;
    console.log(payload);
  }

}
