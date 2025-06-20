import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GameServiceService } from '../../../servicos/game-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-form-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './game-form-component.component.html',
  styleUrl: './game-form-component.component.scss'
})
export class GameFormComponentComponent {

  form: FormGroup;
  gameId: string = ''
  titulo: string = 'Cadastrar Game'

  constructor(
    private fb: FormBuilder,
    private service: GameServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      genre: ['', Validators.required],
      description: ['', Validators.required],
      platform: ['', Validators.required],
      imagem: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('id') ?? ''
    console.log('id game', this.gameId);

    if(this.gameId) {
      this.titulo = 'Editar Game'
      this.service.pegarPorId(this.gameId).subscribe((game) => {
        console.log('carregando dados: ', game);
        this.form.patchValue(game)
      })
    }
  }

  cadastrar() {

    if(this.form.invalid) {
      alert(`Formulário inválido`)
      return
    }

    const dados = this.form.value

    if (this.gameId) {
      // Carrega o jogo atual para não perder as avaliações
      this.service.pegarPorId(this.gameId).subscribe((gameAtual) => {
        const jogoAtualizado = {
          ...gameAtual,
          ...dados
        };
        this.service.editarGame(this.gameId, jogoAtualizado).subscribe({
          next: (res) => {
            alert(`Game editado com sucesso!`);
            this.router.navigate(['/listar']);
          },
          error: (err) => {
            console.log(`Erro na edição: ${err}`);
          }
        });
      });
    } else {
      this.service.cadastrarGame(dados).subscribe({
        next: (resposta) => {
          console.log("Jogo cadastrado com sucesso: ", resposta);
        },
        error: (erro) => {
          console.log("Erro ao cadastrar jogo: ", erro);
        }
      })

      this.router.navigate(['/listar'])

    }
  }

  cancelar() {
    this.router.navigate(['/listar'])
  }

}
