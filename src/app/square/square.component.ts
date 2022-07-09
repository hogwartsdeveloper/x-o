import {Component, OnDestroy, OnInit} from '@angular/core';
import {count, Subject, takeUntil} from "rxjs";
import {GameService} from "../services/game.service";

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit, OnDestroy {
  state: string = 'default';
  player: 'x' | 'o';
  destroy$ = new Subject<void>();

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.currentPLayer$
      .pipe(takeUntil(this.destroy$))
      .subscribe(player => this.player = player)
  }

  onClickSquare() {
    this.state = this.player;

    this.gameService.changePlayer();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
