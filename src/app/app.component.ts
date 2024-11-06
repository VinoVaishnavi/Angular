import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github';
  myColor:string = 'Red'
  myName:string = 'Vino'
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AngularMaterialComponent, {
      width: '400px',
      data: { name: 'User' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result); 
    });
  }
}
