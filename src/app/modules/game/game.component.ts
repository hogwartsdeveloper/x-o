import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {GameService} from "./services/game.service";
import {MatDialog} from "@angular/material/dialog";
import {ChampionModalComponent} from "./champion-modal/champion-modal.component";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  title = 'x-o';
  destroy$ = new Subject<void>();
  player: 'default' | 'x' | 'o';

  constructor(
    private dialog: MatDialog,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.gameService.currentPLayer$
      .pipe(takeUntil(this.destroy$))
      .subscribe(player => {
        this.player = player;
      })

    this.gameService.selectedSquares$.pipe(takeUntil(this.destroy$)).subscribe(selected => {
      if (selected.length > 3) {
        this.checkChampion(selected);
      }
    })
  }

  onNewGame() {
    this.gameService.newGame();
  }

  checkChampion(selected: any[]) {
    if (
      this.checkVertical(selected, 'x') ||
      this.checkHorizontal(selected, 'x') ||
      this.checkX(selected, 'x')
    ) {
      setTimeout(() => {
        this.openModal('player one win!');
      }, 200)
    } else if (
      this.checkVertical(selected, 'o') ||
      this.checkHorizontal(selected, 'o') ||
      this.checkX(selected, 'o')
    ) {
      setTimeout(() => {
        this.openModal('player two win!');
      }, 200)
    }
  }

  checkVertical(selected: any[], player: string): boolean {
    const vertical = [1, 2, 3];
    const vertical2 = [4, 5, 6];
    const vertical3 = [7, 8, 9];

    let champ = true;

    vertical.map(v => {
      if (selected.findIndex(s => s.idSquare === v && s.player === player) === -1) {
        champ = false;
      }
    });

    if (champ) {
      return champ
    } else {
      champ = true;
    }

    vertical2.map(v => {
      if (selected.findIndex(s => s.idSquare === v && s.player === player) === -1) {
        champ = false;
      }
    });

    if (champ) {
      return champ
    } else {
      champ = true;
    }

    vertical3.map(v => {
      if (selected.findIndex(s => s.idSquare === v && s.player === player) === -1) {
        champ = false;
      }
    });

    return champ;
  }

  checkHorizontal(selected: any[], player: string): boolean {
    const horizontal = [1, 4, 7];
    const horizontal2 = [2, 5, 8];
    const horizontal3 = [3, 6, 9];

    let champ = true;

    horizontal.map(v => {
      if (selected.findIndex(s => s.idSquare === v && s.player === player) === -1) {
        champ = false;
      }
    });

    if (champ) {
      return champ
    } else {
      champ = true;
    }

    horizontal2.map(v => {
      if (selected.findIndex(s => s.idSquare === v && s.player === player) === -1) {
        champ = false;
      }
    });

    if (champ) {
      return champ
    } else {
      champ = true;
    }

    horizontal3.map(v => {
      if (selected.findIndex(s => s.idSquare === v && s.player === player) === -1) {
        champ = false;
      }
    });

    return champ;
  }

  checkX(selected: any[], player: string): boolean {
    const x = [1, 5, 9];
    const x2 = [3, 5, 7];

    let champ = true;

    x.map(v => {
      if (selected.findIndex(s => s.idSquare === v && s.player === player) === -1) {
        champ = false;
      }
    });

    if (champ) {
      return champ
    } else {
      champ = true;
    }

    x2.map(v => {
      if (selected.findIndex(s => s.idSquare === v && s.player === player) === -1) {
        champ = false;
      }
    });

    return champ;
  }

  openModal(title: string): void {
    this.dialog.open(ChampionModalComponent, {data: {title}, panelClass: 'modal'})
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete()
  }
}
