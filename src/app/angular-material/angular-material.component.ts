import { Component, Inject, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  name: string;
}
@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent {
  animal: string = '';

  constructor(
    public dialogRef: MatDialogRef<AngularMaterialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

