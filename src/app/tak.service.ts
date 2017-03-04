import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { createGame, Game, Action, ActionType, Piece, PlayerColor } from 'takjs';

@Injectable()
export class TakService {
  pieceInHand: Piece;
  stackInHand: any;

  game$: Observable<Game>;
  nextPlayerAction$: Subject<Action>;
  turn: PlayerColor;

  constructor() {
    const { game$, nextWhiteAction$, nextBlackAction$ } = createGame();

    this.game$ = game$;

    this.pieceInHand = null;

    this.game$.subscribe(({ turn }) => {
      this.turn = turn;

      if (turn === PlayerColor.white) {
        this.nextPlayerAction$ = nextWhiteAction$;
      } else {
        this.nextPlayerAction$ = nextBlackAction$;
      }
    });
  }

  grabPiece(piece: Piece) {
    this.pieceInHand = piece;
  }

  dropPiece(row: number, col: number) {
    if (this.pieceInHand) {
      this.nextPlayerAction$.next({
        player: this.turn,
        type: ActionType.drop,
        row,
        col,
        data: {
          piece: this.pieceInHand
        }
      });
      this.pieceInHand = null;
    }
  }

  moveStackFrom(row: number, col: number) {
    const piecesGrabbed: number = parseInt(prompt('How many pieces do you grab?'), 10);
    this.stackInHand = { row, col, piecesGrabbed: piecesGrabbed };
  }

  moveStackTo(row: number, col: number) {
    if (this.stackInHand) {
      const piecesToDrop: number = parseInt(prompt('How many pieces do you drop?'), 10);
      this.nextPlayerAction$.next({
        player: this.turn,
        type: ActionType.move,
        row: this.stackInHand.row,
        col: this.stackInHand.col,
        data: {
          piecesGrabbed: this.stackInHand.piecesGrabbed,
          to: {
            row,
            col,
            piecesToDrop
          }
        }
      });
      this.stackInHand = null;
    }
  }
}
