import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameServiceService } from '../../../servicos/game-service.service';
import { Game } from '../../../interfaces/gameInterfaces.models';



@Component({
  selector: 'app-game-list-component',
  standalone: true,
  imports: [CommonModule, RatingModule, FormsModule],
  templateUrl: './game-list-component.component.html',
  styleUrl: './game-list-component.component.scss',
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

  avaliacoes(jogo: Game){
    this.router.navigate([`/games/${jogo.id}/avaliar`])
  }

  mediaAvaliacao(jogo: Game): number {
    if(!jogo.ratings || jogo.ratings.length === 0) return 0

    const total = jogo.ratings.reduce((soma, avaliacoes) =>
      soma + avaliacoes.stars, 0)

    return total / jogo.ratings.length
  }

  editar() {
    this.router.navigate(['/form'])
  }

  excluir() {

  }

}
