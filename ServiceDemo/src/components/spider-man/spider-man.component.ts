import { Component, OnInit } from '@angular/core';
import { EndGameService } from '../../services/end-game.service';

@Component({
  selector: 'app-spider-man',
  standalone: true,
  imports: [],
  templateUrl: './spider-man.component.html',
  styleUrl: './spider-man.component.css'
})

export class SpiderManComponent implements OnInit {
  missions: string[] | undefined;
  constructor(private endgameservice: EndGameService) {

  }
  ngOnInit(): void {
  this.endgameservice.missionObservable.subscribe((data)=>{
    this.missions = data;
  });
}
removeMissions(index:number){
  this.endgameservice.removeMissions(index);
}

}
