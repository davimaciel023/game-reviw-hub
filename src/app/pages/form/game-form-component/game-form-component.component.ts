import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      genre: ['', Validators.required],
      description: ['', Validators.required],
      platform: ['', Validators.required],
      imagem: ['', Validators.required]
    })
  }

  ngOnInit(): void {}
}
