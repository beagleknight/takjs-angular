import { Component, OnInit, Input } from '@angular/core';

import { Board } from 'takjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() board: Board;

  constructor() { }

  ngOnInit() {
  }

}
