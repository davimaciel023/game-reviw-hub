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

  game: Game[] = []
  gameId: string = ''

  constructor(
    private service: GameServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.gameId = String(this.route.snapshot.paramMap.get('id'))

    this.service.pegarPorId(this.gameId).subscribe()
  }

}
