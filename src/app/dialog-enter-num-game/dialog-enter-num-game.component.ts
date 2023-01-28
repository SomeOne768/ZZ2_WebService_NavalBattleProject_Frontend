import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-enter-num-game',
  templateUrl: './dialog-enter-num-game.component.html',
  styleUrls: ['./dialog-enter-num-game.component.css']
})
export class DialogEnterNumGameComponent {

  message: string = "Are you sure?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"

  constructor(
    private dialogRef: MatDialogRef<DialogEnterNumGameComponent>
  ) { }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}
