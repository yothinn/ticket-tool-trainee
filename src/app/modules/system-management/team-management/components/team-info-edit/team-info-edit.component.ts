import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-team-info-edit',
  templateUrl: './team-info-edit.component.html',
  styleUrls: ['./team-info-edit.component.scss']
})
export class TeamInfoEditComponent implements OnInit {

  infoFrom?: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.infoFrom = this.createInfoForm();
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
