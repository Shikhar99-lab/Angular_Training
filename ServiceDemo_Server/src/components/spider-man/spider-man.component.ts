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
  missions: any | undefined;

  constructor(private endgameservice: EndGameService) {

  }

  getMissions(){
    this.endgameservice.getmissions().subscribe((data:any)=>{
      this.missions = data;
    });
  }

  ngOnInit(): void {
    this.getMissions()

    this.endgameservice.getDataChanged().subscribe((data:any)=>{
      this.getMissions();
    })
}

removeMissions(id:string){
  this.endgameservice.removeMissions(id).subscribe((data:any)=>{
    this.endgameservice.getmissions().subscribe((data:any)=>{
      this.missions = data;
    })
  })
}

}
