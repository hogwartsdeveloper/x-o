import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  currentPLayer$ = new BehaviorSubject<'x' | 'o'>('o');

  constructor() { }

  changePlayer() {
    const player = this.currentPLayer$.value
    this.currentPLayer$.next(player === 'x' ? 'o' : 'x')
  }
}
