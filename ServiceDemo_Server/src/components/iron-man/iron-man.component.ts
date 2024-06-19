import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EndGameService } from '../../services/end-game.service';

@Component({
  selector: 'app-iron-man',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './iron-man.component.html',
  styleUrl: './iron-man.component.css'
})
export class IronManComponent {

  newMission: any = '';
  constructor(private endgameservice: EndGameService) {

  }
  addMission():void{
    this.endgameservice.addMissions({
      id:"100",
      mission:this.newMission
    }).subscribe();
  }
}
