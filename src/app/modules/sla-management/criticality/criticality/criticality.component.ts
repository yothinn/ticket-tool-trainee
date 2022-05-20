import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageResponse } from 'app/core/base/pageResponse.types';
import { Criticality } from 'app/core/criticality/criticality.types';
import { Observable } from 'rxjs';
import { CriticalEditDialogComponent } from '../dialogs/critical-edit-dialog/critical-edit-dialog.component';

@Component({
  selector: 'app-criticality',
  templateUrl: './criticality.component.html',
  styleUrls: ['./criticality.component.scss']
})
export class CriticalityComponent implements OnInit {

  // @Input() selectCriticality: Criticality;
  // @Input() criticality: Criticality;

  criticalityResponse$?: Observable<PageResponse<Criticality[]>>

  criticalitys: any[] = [
    {value: 'master-0', viewValue: 'Master1'},
    {value: 'master-1', viewValue: 'Master2'},
    {value: 'master-2', viewValue: 'Master3'},
  ];

  constructor(
    private _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openCriticalityDialog(data?: {index: number; criticality: Criticality}): void {
    console.log(data);
    const dialogRef = this._dialog.open(CriticalEditDialogComponent, {
      height:'400px',
      width: '50%',
      disableClose: true,
      data: {
        criticality:data?.criticality
      }   
    });

    dialogRef.afterClosed().subscribe((criticality: any) => {
      console.log('The dialog was closed');
      if (data) {
        console.log(data);

        // Save to backend
      };
    });
  }

  // getCriticalitys(): void {
  //   const param = new GetCriticalityParameter();

  //   this.criticalityResponse$ = this._criticalityService.getCriticals(param);
  // }

  onDeleteCriticality(data?: {index: number; criticality: Criticality}): void {
    console.log(data);
  }
}
