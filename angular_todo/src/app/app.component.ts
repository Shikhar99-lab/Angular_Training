import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TaskListComponent} from '../components/task-list/task-list.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent],
  template: '<app-task-list></app-task-list>',

})
export class AppComponent {
  title:string = 'aquaman';

}
