import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { InventoryFilterComponent } from './inventory-filter/inventory-filter.component';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public router: Router,
    public actionSheetController: ActionSheetController,
    public modalController: ModalController
  ) {}
  openProductDetails(val:any){}

  openFavDetails(id: number) {
    this.router.navigate(['tabs/tab3/fav-details']);
  }
  filterBy() {
    this.presentModal();
  }
  sortBy() {
    this.presentActionSheet();
  }
  dismissModal() {
    return this.modalController.dismiss();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Sort By',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Popularity',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Rating',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Task compeleted',
          icon: 'caret-forward-circle',
          handler: () => {
            console.log('Play clicked');
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: InventoryFilterComponent,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }
}
