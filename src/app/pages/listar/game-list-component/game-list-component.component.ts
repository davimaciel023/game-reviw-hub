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

  gamesExterno: Game[] = [];
  gamesLocais: Game[] = [];
  totalGame: number = 0;

  constructor(
    private router: Router,
    private service: GameServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.carregarJogosExternos();
    this.carregarJogosLocais();
  }

  carregarJogosExternos() {
    this.service.pegarJogosExternos().subscribe((res: any) => {
      this.gamesExterno = res.results.map((j: any) => ({
        id: j.id,
        title: j.name,
        genre: j.genres.map((g: any) => g.name).join(', '),
        imagem: j.background_image,
        platform: j.platforms?.map((p: any) => p.platform.name).join(', ') ?? '',
        ratings: []
      }));
      this.atualizarTotal();
    });
  }

  carregarJogosLocais() {
    this.service.getGames().subscribe((res: Game[]) => {
      this.gamesLocais = res;
      this.atualizarTotal();
    });
  }

  atualizarTotal() {
    this.totalGame = this.gamesExterno.length + this.gamesLocais.length;
  }

  cadastrar() {
    this.router.navigate(['/form']);
  }

  mediaAvaliacao(jogo: Game): number {
    if (!jogo.ratings || jogo.ratings.length === 0) return 0;
    const total = jogo.ratings.reduce((soma, aval) => soma + aval.stars, 0);
    return total / jogo.ratings.length;
  }

  detalhes(jogo: Game) {
    this.router.navigate([`/detalhes/${jogo.id}`]);
  }

  detalhesExterno(id: string) {
    this.router.navigate([`/externo/${id}`]);
  }

  avaliacoes(jogo: Game) {
    this.router.navigate([`/games/${jogo.id}/avaliar`]);
  }

  editar(jogo: Game) {
    this.router.navigate(['/form', jogo.id]);
  }

  excluir(jogo: Game) {
    this.service.deletarGame(jogo.id).subscribe({
      next: () => {
        alert(`Item excluído com sucesso`);
        this.carregarJogosLocais();
      },
      error: (err) => {
        console.error(`Erro ao excluir: ${err}`);
      }
    });
  }

  topGames() {
    this.router.navigate(['/topGames'])
  }
}
