import {Component, Inject, OnInit} from '@angular/core';
import {GameService} from "../services/game.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-champion-modal',
  templateUrl: './champion-modal.component.html',
  styleUrls: ['./champion-modal.component.scss']
})
export class ChampionModalComponent implements OnInit {
  title: string;

  constructor(
    private dialogRef: MatDialogRef<ChampionModalComponent>,
    private gameService: GameService,
    @Inject(MAT_DIALOG_DATA) private data: { title: string }
  ) {
    this.title = data.title
  }

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
