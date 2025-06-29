import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalhes-externos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhes-externos.component.html',
  styleUrls: ['./detalhes-externos.component.scss']
})
export class DetalhesExternosComponent {
  game: any;
  generos: string = '';
  plataformas: string = '';

  private readonly API_KEY = '638c56342dc9447fa2df5184a9ecaf99';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  console.log('ID recebido:', id); // <-- debug
  this.http.get(`https://api.rawg.io/api/games/${id}?key=${this.API_KEY}`).subscribe({
    next: (res: any) => {
      this.game = res;
    },
    error: (err) => {
      console.error('Erro ao carregar jogo externo:', err);
      alert('Não foi possível carregar o jogo');
    }
  });
}
}
