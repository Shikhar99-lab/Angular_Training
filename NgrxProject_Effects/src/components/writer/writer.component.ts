import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { add } from '../../app/store/cricketer/cricketer.actions';
import { Cricketer } from '../../app/models/cricketer.model';
import { FormsModule } from '@angular/forms'
 
@Component({
  selector: 'app-writer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './writer.component.html',
  styleUrl: './writer.component.css'
})
export class WriterComponent {
  constructor(private store: Store) { }

  cid: number = 0;
  cfname: string = '';
  clname: string = '';
  crole: string = ''

  cricketerAdded() {
    const cricketer: Cricketer = {
      id: this.cid,
      fname: this.cfname,
      lname: this.clname,
      role: this.crole
    };
    this.store.dispatch(add({cricketer}));
  }



}
