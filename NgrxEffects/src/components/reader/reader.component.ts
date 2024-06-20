import { Component } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { loadData } from '../../app/store/people/people.actions';
import { peopleSelector } from '../../app/store/people/people.selector';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [],
  templateUrl: './reader.component.html',
  styleUrl: './reader.component.css'
})
export class ReaderComponent {
  data$ = this.store.pipe(select(peopleSelector));
  data:any;
  constructor(private store: Store, private actions$: Actions) {}

  ngOnInit() {
    this.store.dispatch(loadData());
    this.data$.subscribe((data)=>this.data=data);
  }
}
