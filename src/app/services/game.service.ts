import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
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
}
