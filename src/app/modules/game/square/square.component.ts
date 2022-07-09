import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {count, Subject, takeUntil} from "rxjs";
import {GameService} from "../services/game.service";

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit, OnDestroy {
  state: 'default' | 'x' | 'o';
  player: 'x' | 'o';
  destroy$ = new Subject<void>();
  @Input() id: number;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.currentPLayer$
      .pipe(takeUntil(this.destroy$))
      .subscribe(player => this.player = player)

    this.gameService.stateSquare$
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => this.state = state)
  }

  onClickSquare() {
    this.gameService.selectSquares(this.id);
    this.state = this.player;
    this.gameService.changePlayer();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
