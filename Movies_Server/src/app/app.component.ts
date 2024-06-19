import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddMovieComponent } from '../components/add-movie/add-movie.component';
import { ViewMoviesComponent } from '../components/view-movies/view-movies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddMovieComponent, ViewMoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Movies_Server';
}
