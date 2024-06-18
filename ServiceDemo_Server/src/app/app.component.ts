import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SpiderManComponent } from '../components/spider-man/spider-man.component';
import { IronManComponent } from '../components/iron-man/iron-man.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpiderManComponent, IronManComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ServiceDemo';
}
