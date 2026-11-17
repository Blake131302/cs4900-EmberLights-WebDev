import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmCancel } from '../../../../shared/components/confirm-cancel/confirm-cancel';

@Component({
  imports: [MatDialogModule],
  selector: 'app-create-page',
  styleUrl: './create-page.scss',
  templateUrl: './create-page.html',
})
export class CreatePage {
  private dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmCancel, {
      width: '400px',
      disableClose: true,
      data: { name: 'Create Playlist' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
    });
  }
}
