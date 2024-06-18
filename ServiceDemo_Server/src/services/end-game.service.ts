import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndGameService implements OnInit {

constructor(private CricketersData:HttpClient){}

getCricketers(){
return this.CricketersData.get(this.url)
}

private url = 'http://localhost:3000/cricketers';
ngOnInit(): void {
  HttpClient

}

  addMissions(m:string) : void{
     
  }
  removeMissions(id:any){
    return this.CricketersData.delete(this.url+"/"+id);
  }
}
