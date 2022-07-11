import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class GameService {
  currentPLayer$ = new BehaviorSubject<'x' | 'o'>('x');
  stateSquare$ = new BehaviorSubject<'default' | 'x' | 'o'>('default');
  selectedSquares$ = new BehaviorSubject<any[]>([]);

  constructor() { }

  changePlayer() {
    const player = this.currentPLayer$.value
    this.currentPLayer$.next(player === 'x' ? 'o' : 'x')
  }

  selectSquares(idSquare: number) {
    const obj = {
      player: this.currentPLayer$.value,
      idSquare
    }
    this.selectedSquares$.next([...this.selectedSquares$.value, obj])
  }

  newGame(): void {
    this.currentPLayer$.next('x');
    this.stateSquare$.next('default');
    this.selectedSquares$.next([]);
  }
}
