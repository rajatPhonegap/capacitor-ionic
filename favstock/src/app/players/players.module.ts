import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayersPageRoutingModule } from './players-routing.module';

import { PlayersPage } from './players.page';
import { TeamForMatchComponent } from '../team-for-match/team-for-match.component';
import { MainHeaderComponent } from '../main-header/main-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayersPageRoutingModule
  ],
  declarations: [PlayersPage,TeamForMatchComponent,MainHeaderComponent]
})
export class PlayersPageModule {}
