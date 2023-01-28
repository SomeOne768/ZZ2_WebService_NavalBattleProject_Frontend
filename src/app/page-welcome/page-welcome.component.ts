import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

import { DialogEnterNumGameComponent } from '../dialog-enter-num-game/dialog-enter-num-game.component';

@Component({
  selector: 'app-page-welcome',
  templateUrl: './page-welcome.component.html',
  styleUrls: ['./page-welcome.component.css']
})
export class PageWelcomeComponent implements OnInit {

  constructor(
    private titleService: Title,
    private dialog: MatDialog
  ) {
    this.titleService.setTitle('Welcome page');
  }

  ngOnInit(): void {
  }

  openDialogEnterNumGame() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(DialogEnterNumGameComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log("salut");
    })
  }

}
