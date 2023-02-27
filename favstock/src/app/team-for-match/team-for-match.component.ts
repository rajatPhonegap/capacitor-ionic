import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-team-for-match',
  templateUrl: './team-for-match.component.html',
  styleUrls: ['./team-for-match.component.scss'],
})
export class TeamForMatchComponent implements OnInit {
  @Input() data: any;
  totalPlayers:number=0;
  aTeamplayersArr = [
    {id:3,name:'Rajat Biswas',role:'', batingStyle:'Right Handes', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},

  ];
  bTeamplayersArr = [
    {id:3,name:'Rajat Biswas',role:'', batingStyle:'Right Handes', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},

  ];
  today:any;
  constructor(
    public router: Router,
    public modalController: ModalController,


  ) {
  this.today=Date();
   }

  ngOnInit() {
    this.aTeamplayersArr=[];
    this.bTeamplayersArr=[];
    this.aTeamplayersArr=this.data?.aTeam;
    this.bTeamplayersArr=this.data?.bTeam;
    this.totalPlayers = this.data?.totalPlayers;
  }
  onReset(){
    this.router.navigate(['tabs/players']);
    return this.modalController.dismiss();
  }
}
