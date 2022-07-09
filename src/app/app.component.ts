import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameService} from "./services/game.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'x-o';
  destroy$ = new Subject<void>();
  player: 'default' | 'x' | 'o';

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.currentPLayer$.pipe(takeUntil(this.destroy$)).subscribe(player => {
      this.player = player;
    })
  }

  onNewGame() {
    this.gameService.currentPLayer$.next('x');
    this.gameService.stateSquare$.next('default');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete()
  }
}
