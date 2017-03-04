import { Component, OnInit } from '@angular/core';

import { Board, Player, PlayerColor } from 'takjs';
import { TakService } from './tak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  whitePlayer: Player;
  blackPlayer: Player;
  board: Board;
  whitePlayerTurn: boolean;
  blackPlayerTurn: boolean;

  constructor(private _tak: TakService) {}

  ngOnInit() {
    this._tak.game$.subscribe(({ whitePlayer, blackPlayer, board, turn }) => {
      this.whitePlayer = whitePlayer;
      this.blackPlayer = blackPlayer;
      this.board = board;
      this.whitePlayerTurn = turn === PlayerColor.white;
      this.blackPlayerTurn = turn === PlayerColor.black;
    });
  }
}
