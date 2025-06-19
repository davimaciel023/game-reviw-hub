import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  gameID: string = ''

  constructor(
    private router: Router,
    private service: GameServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service.getGames().subscribe((games) => {
      this.game = games
    })

    this.gameID = String(this.route.snapshot.paramMap.get('id'))

  }

  cadastrar() {
    this.router.navigate(['/form'])
  }

  avaliacoes(){
    this.router.navigate([`/games/${this.gameID}/avaliar`])
  }

}
