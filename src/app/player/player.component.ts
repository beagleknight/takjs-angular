import { Component, Input, HostListener, HostBinding } from '@angular/core';

import { TakService } from '../tak.service';

import { Player, PieceType } from 'takjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Input() player: Player;
  @Input() @HostBinding('class.active') active: boolean;

  constructor(private _tak: TakService) { }

  @HostListener('click')
  grabPiece() {
    this._tak.grabPiece({ color: this.player.color, type: PieceType.flat });
  }
}
