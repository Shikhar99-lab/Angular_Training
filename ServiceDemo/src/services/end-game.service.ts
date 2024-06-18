import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndGameService {

  missionSubject = new BehaviorSubject<string[]>(['save new york','kill thanos']);
  missionObservable = this.missionSubject.asObservable()
  // getMissions() : string[]{
  //   return this.missions;
  // }
  addMissions(m:string) : void{
    // console.log(this.missionSubject.value)
    // this.missionSubject.push(m);
    let newMissionSubject : string[] = [...this.missionSubject.value, m]
    console.log(newMissionSubject)
    this.missionSubject.next(newMissionSubject)
  }
  removeMissions(m:number) : void{
    let removeMission : string[] = [...this.missionSubject.value];
    removeMission.splice(m, 1);
    this.missionSubject.next(removeMission);
  }
  constructor() { }
}
