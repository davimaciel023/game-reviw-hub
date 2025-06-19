import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GameServiceService } from '../../../servicos/game-service.service';
import { Game } from '../../../interfaces/gameInterfaces.models';



@Component({
  selector: 'app-game-list-component',
  imports: [CommonModule, RatingModule, FormsModule],
  templateUrl: './game-list-component.component.html',
  styleUrl: './game-list-component.component.scss'
})
export class GameListComponentComponent {

  game: Game[] = []

  constructor(
    private router: Router,
    private service: GameServiceService
  ) {}

  ngOnInit(): void {
    this.service.getGames().subscribe((games) => {
      this.game = games
    })
  }

  cadastrar() {
    this.router.navigate(['/form'])
  }

}
