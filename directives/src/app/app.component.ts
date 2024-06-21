import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomDirectiveDirective } from '../directives/custom-directive.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CustomDirectiveDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives';
}
