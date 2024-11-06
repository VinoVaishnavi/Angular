import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github';
  flower:any = [
    {name: 'Rose', color:'Red'},
    {name: 'Jasmine', color:'White'},
    {name: 'Sunflower', color:'Yellow'}
  ]
}
