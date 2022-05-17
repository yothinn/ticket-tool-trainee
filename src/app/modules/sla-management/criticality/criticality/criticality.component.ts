import { Component, OnInit } from '@angular/core';
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

  openCriticalityDialog(): void {
    const dialogRef = this._dialog.open(CriticalEditDialogComponent, {
      height:'400px',
      width: '40%',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((criticality: any) => {
      console.log('The dialog was closed');
      if (criticality) {
        console.log(criticality);

        // Save to backend
      };
    });
  }
}
