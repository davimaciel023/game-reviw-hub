import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GameServiceService } from '../../../servicos/game-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-form-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './game-form-component.component.html',
  styleUrl: './game-form-component.component.scss'
})
export class GameFormComponentComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: GameServiceService,
    private router: Router
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
  }

  cadastrar() {
    if(this.form.valid) {
      const novoJogo = this.form.value
      this.service.cadastrarGame(novoJogo).subscribe({
        next: (resposta) => {
          console.log("Jogo cadastrado com sucesso: ", resposta);
        },
        error: (erro) => {
          console.log("Erro ao cadastrar jogo: ", erro);
        }
      })
    }
  }

}
