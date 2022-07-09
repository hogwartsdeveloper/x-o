import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import {SquareComponent} from "./square/square.component";
import {MatButtonModule} from "@angular/material/button";
import {GameService} from "./services/game.service";



@NgModule({
  declarations: [
    GameComponent,
    SquareComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    GameComponent
  ],
  providers: [GameService]
})
export class GameModule { }
