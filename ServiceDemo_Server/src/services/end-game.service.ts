import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndGameService implements OnInit {

constructor(private missionsData:HttpClient){}

missionAdded = new Subject<any>();

getmissions(){
return this.missionsData.get(this.url)
}

private url = 'http://localhost:3000/missions';
ngOnInit(): void {
  HttpClient
}

  addMissions(m:any){
    return this.missionsData.post(this.url, m).pipe(
      map(x=>this.missionAdded.next(x))
    )
  }
  removeMissions(id:any){
    return this.missionsData.delete(this.url+"/"+id);
  }
  getDataChanged():any{
    return this.missionAdded.asObservable();
  }
}
