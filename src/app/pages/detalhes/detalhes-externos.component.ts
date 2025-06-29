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

  this.http.get(`https://api.rawg.io/api/games/${id}?key=${this.API_KEY}`).subscribe((res: any) => {
    this.game = res;
    this.generos = res.genres.map((g: any) => g.name).join(', ');
    this.plataformas = res.platforms.map((p: any) => p.platform.name).join(', ');

    this.traduzirDescricao(res.description_raw).subscribe((traduzido: any) => {
      this.game.description = traduzido.translatedText;
    });
  }, err => {
    console.error('Erro ao carregar o jogo:', err);
  });
}


  traduzirDescricao(texto: string) {
    const body = {
      q: texto,
      source: 'en',
      target: 'pt',
      format: 'text'
    };

    return this.http.post('https://libretranslate.de/translate', body);
  }
}
