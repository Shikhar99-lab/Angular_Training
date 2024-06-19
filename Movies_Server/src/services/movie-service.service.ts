import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService implements OnInit {

  constructor(private moviesData:HttpClient) { }

  moviesAdded = new Subject<any>();

getMovies(){
return this.moviesData.get(this.url)
}

private url = 'http://localhost:3000/movies';
ngOnInit(): void {
  HttpClient
}

addMovies(m:any){
    return this.moviesData.post(this.url, m).pipe(
      map(x=>this.moviesAdded.next(x))
    )
  }
  removeMovies(id:any){
    return this.moviesData.delete(this.url+"/"+id);
  }
  getDataChanged():any{
    return this.moviesAdded.asObservable();
  }

}
