import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../../services/movie-service.service';

@Component({
  selector: 'app-view-movies',
  standalone: true,
  imports: [],
  templateUrl: './view-movies.component.html',
  styleUrl: './view-movies.component.css'
})
export class ViewMoviesComponent {
  movies: any | undefined;

  constructor(private movieService: MovieServiceService) {

  }

  getMovies(){
    this.movieService.getMovies().subscribe((data:any)=>{
      this.movies = data;
    });
  }

  ngOnInit(): void {
    this.getMovies()

    this.movieService.getDataChanged().subscribe((data:any)=>{
      this.getMovies();
    })
}

removeMovies(id:string){
  this.movieService.removeMovies(id).subscribe((data:any)=>{
    this.movieService.getMovies().subscribe((data:any)=>{
      this.movies = data;
    })
  })
}
}
