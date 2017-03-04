import { Component, HostListener, Input } from '@angular/core';

import { TakService } from '../tak.service';

import { Stack, Piece, PlayerColor, PieceType } from 'takjs';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() row: number;
  @Input() col: number;
  @Input() stack: Stack;

  constructor(private _tak: TakService) { }

  @HostListener('click')
  cellAction() {
    if (this._tak.pieceInHand) {
      this._tak.dropPiece(this.row, this.col);
    } else if (this._tak.stackInHand) {
      this._tak.moveStackTo(this.row, this.col);
    } else {
      this._tak.moveStackFrom(this.row, this.col);
    }
  }

  pieceToStr(piece: Piece) {
    const { color, type } = piece;
    const colorStr = color === PlayerColor.white ? 'W' : 'B';
    const typeStr = type === PieceType.flat ? 'F' : 'S';
    return `${colorStr}${typeStr}`;
  }
}
