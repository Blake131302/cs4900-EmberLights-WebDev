import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  imports: [MatDialogModule],
  selector: 'app-confirm-cancel',
  styleUrl: './confirm-cancel.scss',
  templateUrl: './confirm-cancel.html',
})
export class ConfirmCancel {
  dialogRef = inject(MatDialogRef<ConfirmCancel>);
  data = inject(MAT_DIALOG_DATA);

  confirm() {
    this.dialogRef.close({ confirmed: true });
  }
}
