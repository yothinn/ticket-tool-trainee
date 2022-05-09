import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-ticket-info-edit',
  templateUrl: './my-ticket-info-edit.component.html',
  styleUrls: ['./my-ticket-info-edit.component.scss']
})
export class MyTicketInfoEditComponent implements OnInit {
  infoForm?: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.infoForm = this.initInfoForm();
  }

  initInfoForm(): FormGroup {
    return this.formBuilder.group({
      
      description: ['', Validators.required]
    });
  }

  save(): void {
    const payload = this.infoForm?.value;
    console.log(payload);
  }

}
