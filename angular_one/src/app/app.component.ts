import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './app.component.html'
})

export class AppComponent {
  title:string = 'Shikhar';
  names:string[] = ["ABCD", "WXYZ","PQRS"];
  newName:string = '';
  
  nameAdded():void{
    this.names.push(this.newName)
  }
  remove(n1:number):void{
    this.names.splice(n1,1);
  }
  sortAscending():void{
    
  }
}
