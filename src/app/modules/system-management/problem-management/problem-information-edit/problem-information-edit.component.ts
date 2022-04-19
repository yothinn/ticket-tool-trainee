import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestDataDialogComponent } from '../dialogs/request-data-dialog/request-data-dialog.component';
import { TeamOwnerDialogComponent } from '../dialogs/team-owner-dialog/team-owner-dialog.component';

@Component({
  selector: 'app-problem-information-edit',
  templateUrl: './problem-information-edit.component.html',
  styleUrls: ['./problem-information-edit.component.scss']
})
export class ProblemInformationEditComponent implements OnInit {

  requestData:string[] = ['Ticket Description','Order No','Attachment file','XXXXXXX','XXXXXXXX'];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openRequestDataDialog(): void{
    const dialogRef = this.dialog.open(RequestDataDialogComponent, {
      height:'580px',
      width: '90%'
      // data: {},
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }


  openTeamOwnerDialog(): void{
    const dialogRef = this.dialog.open(TeamOwnerDialogComponent, {
      height:'580px',
      width: '90%'
      // data: {},
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
