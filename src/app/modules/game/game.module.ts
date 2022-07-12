import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import {SquareComponent} from "./square/square.component";
import {MatButtonModule} from "@angular/material/button";
import {GameService} from "./services/game.service";
import { ChampionModalComponent } from './champion-modal/champion-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ComponentsModule} from "../components/components.module";



@NgModule({
  declarations: [
    GameComponent,
    SquareComponent,
    ChampionModalComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    ComponentsModule
  ],
  exports: [
    GameComponent
  ],
  providers: [GameService]
})
export class GameModule { }
