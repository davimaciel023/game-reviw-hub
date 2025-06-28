import { Game } from './../../../interfaces/gameInterfaces.models';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameServiceService } from '../../../servicos/game-service.service';



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
  totalGame: number = 0
  gamesExterno: Game[] = []
  gamesLocais: Game[] = []

  constructor(
    private router: Router,
    private service: GameServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.service.pegarJogosExternos().subscribe((res: any) => {
      this.game = res.results.map((j: any) => ({
        id: j.id,
        title: j.name,
        genre: j.genres.map((g: any) => g.name).join(', '),
        imagem: j.background_image,
        platform: j.platforms.map((p: any) => p.platform.name).join(', '),
        ratings: []
      }));

      console.log( this.game );
      console.log(this.gamesLocais)
    })

    this.service.getGames().subscribe((res: Game[]) =>  {
      this.gamesLocais = res
    })

    this.gameID = String(this.route.snapshot.paramMap.get('id'))

    this.totalGame = (this.game.length) + (this.gamesLocais.length)
  }

  cadastrar() {
    this.router.navigate(['/form'])
  }

  mediaAvaliacao(jogo: Game): number {
    if(!jogo.ratings || jogo.ratings.length === 0) return 0

    const total = jogo.ratings.reduce((soma, avaliacoes) =>
      soma + avaliacoes.stars, 0)

    return total / jogo.ratings.length
  }


  detalhes(jogo: Game) {
    this.router.navigate([`/detalhes/${jogo.id}`])
  }

  avaliacoes(jogo: Game){
    this.router.navigate([`/games/${jogo.id}/avaliar`])
  }

  editar(jogo: Game) {
    this.router.navigate(['/form/', jogo.id])
  }

  excluir(jogo: Game) {
    this.service.deletarGame(jogo.id).subscribe({
      next: (res) => {
        alert(`Item excluido com sucesso`)
      },
      error: (err) => {
        console.log(`Erro ao excluir: ${err}`);
      }
    })
  }

}
