import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-ticket-info-edit',
  templateUrl: './my-ticket-info-edit.component.html',
  styleUrls: ['./my-ticket-info-edit.component.scss']
})
export class MyTicketInfoEditComponent implements OnInit {
  infoFrom?: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.infoFrom = this.createInfoForm();
  }
  createInfoForm(): FormGroup {
    return this.formBuilder.group({
      
      description: ['', Validators.required]
    });
  }

  saveFrom(): void {
    const payload = this.infoFrom?.value;
    console.log(payload);
  }

}
