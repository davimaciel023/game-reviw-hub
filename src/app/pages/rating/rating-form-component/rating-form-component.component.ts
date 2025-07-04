import { Component } from '@angular/core';
import { GameServiceService } from '../../../servicos/game-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-rating-form-component',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RatingModule],
  templateUrl: './rating-form-component.component.html',
  styleUrl: './rating-form-component.component.scss'
})
export class RatingFormComponentComponent {

  form: FormGroup;
  gameId: string = ''

  constructor(
    private service: GameServiceService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {

    this.form = this.fb.group({
      name: ['', Validators.required],
      stars: [null, Validators.required],
      comment: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.gameId = String(this.route.snapshot.paramMap.get('id'))
    console.log('ID capturado: ', this.gameId);
  }

  cadastrar() {

    console.log(`verificando formulario`);
    if(this.form.valid) {

      console.log(`Formulario validado: ${this.form.value}`);

      const avaliacao = this.form.value

      this.service.criarAvaliacao(this.gameId, avaliacao).subscribe({
        next: () => {
          alert('Avaliação criada com sucesso!')
          this.form.reset()
        },
        error: (erro) => {
          alert("Erro ao criar avaliação")
          console.log("Erro ao criar avaliação", erro);
        }
      })

      this.router.navigate(['/listar'])
    }
  }

  cancelar() {
    this.router.navigate(['/listar'])
  }
}
