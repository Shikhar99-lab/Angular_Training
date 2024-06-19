import { Component } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {

  newMovie: any = '';
  constructor(private movieService: MovieServiceService) {

  }
  addMovies():void{
    this.movieService.addMovies({
      id:"100",
      title:this.newMovie
    }).subscribe();
  }
}
