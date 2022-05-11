import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-ticket-info-edit',
  templateUrl: './my-ticket-info-edit.component.html',
  styleUrls: ['./my-ticket-info-edit.component.scss']
})
export class MyTicketInfoEditComponent implements OnInit {

  @Output() closed = new EventEmitter<any>();

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

  cancel(): void {
    this.closed.emit(undefined);
  }

  summit(): void {
    const payload = this.infoForm?.value;
    console.log(payload);

    this.closed.emit(payload);
  }

}
