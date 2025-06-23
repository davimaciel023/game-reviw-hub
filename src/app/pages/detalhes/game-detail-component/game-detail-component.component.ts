import { Component } from '@angular/core';
import { Game } from '../../../interfaces/gameInterfaces.models';

@Component({
  selector: 'app-game-detail-component',
  imports: [],
  templateUrl: './game-detail-component.component.html',
  styleUrl: './game-detail-component.component.scss'
})
export class GameDetailComponentComponent {

  game: Game[] = []

}
