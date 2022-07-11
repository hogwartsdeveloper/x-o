import { Component, OnInit } from '@angular/core';
import {GameService} from "../services/game.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-champion-modal',
  templateUrl: './champion-modal.component.html',
  styleUrls: ['./champion-modal.component.scss']
})
export class ChampionModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ChampionModalComponent>,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
  }

  playAgain(): void {
    this.gameService.newGame();
    this.closeModal();
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}
