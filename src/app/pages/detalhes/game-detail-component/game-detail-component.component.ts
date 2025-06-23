import { Component } from '@angular/core';
import { Game } from '../../../interfaces/gameInterfaces.models';
import { GameServiceService } from '../../../servicos/game-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-detail-component',
  imports: [],
  templateUrl: './game-detail-component.component.html',
  styleUrl: './game-detail-component.component.scss'
})
export class GameDetailComponentComponent {

  game!: Game;

  constructor(
    private service: GameServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = String(this.route.snapshot.paramMap.get('id'))

    this.service.pegarPorId(id).subscribe({
      next: (game) => {
        this.game = game
      },
      error: (err) => {
        console.log('erro ao pegar game: ', err);
        alert('Não foi possível carregar o jogo')
        this.router.navigate(['/listar'])
      }
    })
  }

}
