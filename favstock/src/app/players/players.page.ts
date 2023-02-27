import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { TeamForMatchComponent } from '../team-for-match/team-for-match.component';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})

export class PlayersPage implements OnInit {
  playersArr = [
    {id:1,name:'Asim Debnath',role:'Batsman-A', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:2,name:'Rajen Debnath',role:'Bowler', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:3,name:'Rajat Biswas',role:'Batsman', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:4,name:'Kartick Biswas',role:'Allrounder-A', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:5,name:'Rocky',role:'Allrounder-A', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:6,name:'Khokan Debnath',role:'Batsman', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:7,name:'Bisu Poddar',role:'Batsman', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:8,name:'Atul ',role:'Batsman', batingStyle:'Left Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:9,name:'Tapas Mandal',role:'Batsman', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:10,name:'MD',role:'Batsman', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:11,name:'Vola Sarkar',role:'Batsman-A', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:12,name:'Sukuranjan Biswas',role:'Bowler', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:13,name:'Saheb Debnath',role:'Batsman-A', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:14,name:'Ayan',role:'', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:15,name:'Rohit',role:'', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:16,name:'Suman Roy',role:'', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:17,name:'Tushar Roy',role:'Bowler', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:18,name:'Sayan Biswas',role:'', batingStyle:'Left Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:19,name:'Ranju Sarkar',role:'Batsman-A', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:20,name:'Subha',role:'Batsman', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:21,name:'Rana',role:'', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:22,name:'Sudip Dey',role:'Batsman', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:23,name:'Basu Roy',role:'', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:24,name:'Sujoy Talukdar',role:'', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
    {id:25,name:'Moinak',role:'Batsman', batingStyle:'Right Handed', bowlingStyle:'Right Arm - (Pace)', address: '', rating:'8.5',image:''},
  ];
  todaysPlayer:any=[];
  
  constructor(
    public router: Router,
    // public actionSheetController: ActionSheetController,
    public modalController: ModalController,
    private toastController: ToastController,
    private loadingCtrl: LoadingController
  ) { 
  }

  ngOnInit() {
    this.playersArr.sort((a, b) => a.name.localeCompare(b.name));
  }
  onSelectPlayer(event:any,p:any){
    console.log('event',event.target.checked );
    if(event.target.checked !== true){
      this.todaysPlayer.push(p);
    }else{
      const index: number = this.todaysPlayer.indexOf(p);
      if (index !== -1) {
          this.todaysPlayer.splice(index, 1);
      }  

    }
   console.log(this.todaysPlayer);
   
  }
  onPart(){
    if(this.todaysPlayer.length===0){
      // alert('Please select players');
      this.presentToast('Please select players')

    }else{
      if(this.isOdd(this.todaysPlayer.length)){
        // alert('Please select one more player')
        this.presentToast('Please select one more player')

      }else{
        this.partNow(this.todaysPlayer);
      }
    }

  }
  openPlayerDetails(){

  }
  partNow(players:any){
    // alert('Done');
    this.showLoading();
    let teamA = [];
    let teamB = [];
    let randomPlayers=this.shuffleArray(players);
    let numberOfPlayers=randomPlayers.length/2;
    teamA = randomPlayers.splice(0,numberOfPlayers);
    teamB = randomPlayers;
    // Check Top Batsman
    let noOfBatter=this.checkBatterInTeam(teamA);
    // Check Top Allrounders
    let noOfAllrounder=this.checkAllrounderInTeam(teamB);
    if(noOfBatter>noOfBatter/2){
      this.presentToast('Too strong Team'+noOfBatter)
    }
    let tossWon:any=['A','B'];
    let teamData={
      aTeam:teamA,
      bTeam: teamB,
      totalPlayers:players.length,
      tossWonBy: this.shuffleArray(tossWon)
    }
    // console.log('Team A', teamA);
    // console.log('Team B', teamB);
    // this.presentToast('Partition Done');

    this.presentModal(teamData);
  }
  isOdd(n:number) {
    return Math.abs(n % 2) == 1;
  }

  shuffleArray(array:[]) {
   var m = array.length, t, i;

   while (m) {    
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
   }

  return array;
  }
  dismissModal() {
    return this.modalController.dismiss();
  }
  
  onReset(){
    this.presentToast('Please Wait')
    this.reloadCurrentRoute();
  }
  reloadCurrentRoute() {
    // this.todaysPlayer=[];

    window.location.reload();
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
    this.ngOnInit();
  }
  checkBatterInTeam(p:any){
    let numberOfAllrounder=0
    p.forEach((element:any) => {
      if(element.role==='allrounder-A'){
        numberOfAllrounder=numberOfAllrounder+1;
      }
    });
    return numberOfAllrounder;
  }
  checkAllrounderInTeam(p:any){
    let numberOfBatter=0
    p.forEach((element:any) => {
      if(element.role==='Batsman-A'){
        numberOfBatter=numberOfBatter+1;
      }
    });
    return numberOfBatter;
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Partition Inprogress...',
      duration: 1500,
    });

    loading.present();
  }
  async presentToast(msg='Done') {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'middle'
    });

    await toast.present();
  }
  async presentModal(data:any) {
    const modal = await this.modalController.create({
      component: TeamForMatchComponent,
      componentProps: {data} ,
    });
    return await modal.present();
  }
}
