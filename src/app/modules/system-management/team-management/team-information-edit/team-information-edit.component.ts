import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProblemDialogComponent } from '../dialogs/problem-dialog/problem-dialog.component';
import { TeamMemberDialogComponent } from '../dialogs/team-member-dialog/team-member-dialog.component';

@Component({
  selector: 'app-team-information-edit',
  templateUrl: './team-information-edit.component.html',
  styleUrls: ['./team-information-edit.component.scss']
})
export class TeamInformationEditComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openTeamMemberDialog(): void {
    const dialogRef = this.dialog.open(TeamMemberDialogComponent, {
      height:'580px',
      width: '90%'
      // data: {},
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  openProblemDialog(): void {
    const dialogRef = this.dialog.open(ProblemDialogComponent, {
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
