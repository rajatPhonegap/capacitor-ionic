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
    {
      id: 1,
      name: 'Asim Debnath',
      role: 'Batsman-A',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image: '../../assets/img/asim.jpg',
    },
    {
      id: 2,
      name: 'Rajen Debnath',
      role: 'Bowler',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'../../assets/img/rajen.jpg',
    },
    {
      id: 3,
      name: 'Rajat Biswas',
      role: 'Batsman',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'../../assets/img/rajat.jpg',
    },
    {
      id: 4,
      name: 'Kartick Biswas',
      role: 'Allrounder-A',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'../../assets/img/kartick.jpg',
    },
    {
      id: 5,
      name: 'Rocky',
      role: 'Allrounder-A',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'',
    },
    {
      id: 6,
      name: 'Khokan Debnath',
      role: 'Batsman',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'../../assets/img/khokon.jpg',
    },
    {
      id: 7,
      name: 'Bisu Poddar',
      role: 'Batsman',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'../../assets/img/bisu.jpg',
    },
    {
      id: 8,
      name: 'Atul ',
      role: 'Batsman',
      batingStyle: 'Left Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'../../assets/img/atul.jpg',
    },
    {
      id: 9,
      name: 'Tapas Mandal',
      role: 'Batsman',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'../../assets/img/tapas.jpg',
    },
    {
      id: 10,
      name: 'MD',
      role: 'Batsman',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'../../assets/img/md.jpg',
    },
    {
      id: 11,
      name: 'Vola Sarkar',
      role: 'Batsman-A',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'../../assets/img/vola.jpg',
    },
    {
      id: 12,
      name: 'Sukuranjan Biswas',
      role: 'Bowler',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'',
    },
    {
      id: 13,
      name: 'Saheb Debnath',
      role: 'Batsman-A',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'../../assets/img/saheb.jpg',
    },
    {
      id: 14,
      name: 'Ayan',
      role: '',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'',
    },
    {
      id: 15,
      name: 'Rohit',
      role: '',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'',
    },
    {
      id: 16,
      name: 'Suman Roy',
      role: '',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'../../assets/img/suman.jpg',
    },
    {
      id: 17,
      name: 'Tushar Roy',
      role: 'Bowler',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'',
    },
    {
      id: 18,
      name: 'Sayan Biswas',
      role: '',
      batingStyle: 'Left Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'',
    },
    {
      id: 19,
      name: 'Ranju Sarkar',
      role: 'Batsman-A',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'../../assets/img/ranju.jpg',
    },
    {
      id: 20,
      name: 'Subha',
      role: 'Batsman',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'',
    },
    {
      id: 21,
      name: 'Rana',
      role: '',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'',
    },
    {
      id: 22,
      name: 'Sudip Dey',
      role: 'Batsman',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'',
    },
    {
      id: 23,
      name: 'Basu Roy',
      role: '',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'',
    },
    {
      id: 24,
      name: 'Sujoy Talukdar',
      role: '',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'../../assets/img/sujoy.jpg',
    },
    {
      id: 25,
      name: 'Moinak',
      role: 'Batsman',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'https://pps.whatsapp.net/v/t61.24694-24/319969070_1584577145390081_5489511254724017084_n.jpg?ccb=11-4&oh=01_AdQkKxvJhpozXwcFayOhCR_G4W_qJNXtK0ABTmF06Dds6A&oe=640AB221',
    },
    {
      id: 26,
      name: 'Bijoy Mandal',
      role: 'Bowler',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'',
    },
    {
      id: 27,
      name: 'Chandan',
      role: 'Batsman',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'',
    },
    {
      id: 27,
      name: 'X - Man',
      role: 'Batsman-A',
      batingStyle: 'Right Handed',
      bowlingStyle: 'Right Arm - (Pace)',
      address: '',
      rating: '8.5',
      image:'',
    },
  ];
  todaysPlayer: any = [];

  constructor(
    public router: Router,
    // public actionSheetController: ActionSheetController,
    public modalController: ModalController,
    private toastController: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.playersArr.sort((a, b) => a.name.localeCompare(b.name));
  }
  onSelectPlayer(event: any, p: any) {
    console.log('event', event.target.checked);
    if (event.target.checked !== true) {
      this.todaysPlayer.push(p);
    } else {
      const index: number = this.todaysPlayer.indexOf(p);
      if (index !== -1) {
        this.todaysPlayer.splice(index, 1);
      }
    }
    console.log(this.todaysPlayer);
  }
  onPart() {
    if (this.todaysPlayer.length === 0) {
      // alert('Please select players');
      this.presentToast('Please select players');
    } else {
      if (!this.isOdd(this.todaysPlayer.length)) {
        this.partNow(this.todaysPlayer);
      } else {
        this.presentToast('Please select one more player');
      }
    }
  }
  openPlayerDetails() {}
  partNow(players: any) {
    console.log('Todays player',this.todaysPlayer);
    
    // alert('Done');
    this.showLoading();
    let teamA = [];
    let teamB = [];
    // let randomPlayers = [];
    this.todaysPlayer = this.shuffleArray(players);
    let foundBatsman;
    let resAllPlayers;
    foundBatsman = this.todaysPlayer.filter((element:any) => element.role === 'Batsman-A');
    resAllPlayers = this.todaysPlayer.filter((element:any) => element.role !== 'Batsman-A');
    if(this.isOdd(foundBatsman.length)){
      alert('Found Batter'+foundBatsman.length);
      foundBatsman.push(resAllPlayers[0]);;
    }
    console.log('foundBatsman',foundBatsman);
    let teamAbatter=foundBatsman.splice(0, foundBatsman);
    // this.dividePlayers(randomPlayers);
    let tossWon: any = ['A', 'B'];
      let teamData = {
        aTeam: '',
        bTeam: '',  
        totalPlayers: this.todaysPlayer.length/2,
        tossWonBy: this.shuffleArray(tossWon),
      };
      this.presentModal(teamData);
    // this.checkABteamAndSwap(teamA,teamB);
    
    // if (
    //   noOfBatterInAteam > 2 ||
    //   noOfAllrounderInAteam > 1 ||
    //   noOfBatterInBteam > avgbat ||
    //   noOfAllrounderInBteam > 1
    // ) {
    //   this.presentToast('Too strong Team');
    //   teamA = [];
    //   teamB = [];
    //   randomPlayers = [];
    //   this.partNow(this.todaysPlayer);
    // } else {
      
    // }
    // Check Team and shuffel
  }
  isOdd(n: number) {
    return Math.abs(n % 2) == 1;
  }
  checkABteamAndSwap(a:any,b:any){
    let aTeam=a;
    let bTeam=b;
    let strongBat:any =[];
    let strongBall:any =[];
    aTeam.forEach((element:any) => {
      if(element.id===11 || element.id===13 || element.id===1 || element.id===19 ){
        strongBat.push(element);
      }
    });
    bTeam.forEach((element:any) => {
      if(element.id===11 || element.id===13 || element.id===1 || element.id===19){
        strongBat.push(element);
      }
    });
    aTeam.forEach((element:any) => {
      if(element.id===5 || element.id===4 ){
        strongBat.push(element);
        
        
      }
    });
    bTeam.forEach((element:any) => {
      if(element.id===5 || element.id===4 ){
        strongBall.push(element);
        
      }
    });
    if(strongBall.length>1 || strongBat.length> 2){
      // alert('Part again');
      this.presentToast('One Team Is  Stonger! Do it again');
      console.log('Strong bowl');
      console.log(strongBall);
      console.log('bowl');
      console.log('Strong Bat');
      console.log(strongBat);
      console.log('strongBat');
      
      // this.shuffleArray(this.todaysPlayer);
      // this.partNow(this.todaysPlayer);
    }else{
      let tossWon: any = ['A', 'B'];
      let teamData = {
        aTeam: aTeam,
        bTeam: bTeam,  
        totalPlayers: this.todaysPlayer.length,
        tossWonBy: this.shuffleArray(tossWon),
      };
      this.presentModal(teamData);
    }
  }
  shuffleArray(array: []) {
    var m = array.length,
      t,
      i;

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

  onReset() {
    this.presentToast('Please Wait');
    this.reloadCurrentRoute();
  }
  reloadCurrentRoute() {
    // this.todaysPlayer=[];

    window.location.reload();
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
    this.ngOnInit();
  }
  checkBatterInTeam(p: any) {
    let numberOfBatter = 0;
    p.forEach((element: any) => {
      if (element.role === 'Batsman-A') {
        numberOfBatter = numberOfBatter + 1;
      }
    });
    return numberOfBatter;
  }
  checkAllrounderInTeam(p: any) {
    let numberOfAllrounder = 0;
    p.forEach((element: any) => {
      if (element.role === 'Allrounder-A') {
        numberOfAllrounder = numberOfAllrounder + 1;
      }
    });
    return numberOfAllrounder;
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Partition Inprogress...',
      duration: 1500,
    });

    loading.present();
  }
  async presentToast(msg = 'Done') {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'middle',
    });

    await toast.present();
  }
  async presentModal(data: any) {
    const modal = await this.modalController.create({
      component: TeamForMatchComponent,
      componentProps: { data },
    });
    return await modal.present();
  }
}
