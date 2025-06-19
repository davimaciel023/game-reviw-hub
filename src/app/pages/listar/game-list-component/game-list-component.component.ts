import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-game-list-component',
  imports: [CommonModule, RatingModule, FormsModule],
  templateUrl: './game-list-component.component.html',
  styleUrl: './game-list-component.component.scss'
})
export class GameListComponentComponent {

}
