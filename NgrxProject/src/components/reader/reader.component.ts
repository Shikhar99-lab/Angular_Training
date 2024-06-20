import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cricketer } from '../../app/models/cricketer.model';
import { Store, select } from '@ngrx/store';
import { cricketerSelector } from '../../app/store/cricketer/cricketer.selector';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [],
  templateUrl: './reader.component.html',
  styleUrl: './reader.component.css'
})
export class ReaderComponent implements OnInit {
  cricketers: Cricketer[] | undefined;
  cricketer$: Observable<Cricketer[]> | undefined;
  constructor(private store: Store) { }
  ngOnInit(): void {
    this.cricketer$ = this.store.pipe(select(cricketerSelector));
    this.cricketer$.subscribe((data => this.cricketers = data))
  }
}
