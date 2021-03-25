import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Prato } from 'src/app/interface/prato';
import { BaseservicesService } from 'src/app/services/baseservices.service';
import { SweetAlert } from '../Swet/sweet.alert';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  public formulario!: FormGroup;

  get name(): any {
    return this.formulario.get('name');
  }
  get preco(): any {
    return this.formulario.get('preco');
  }

  constructor(
    private servicePrato: BaseservicesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      name: [null, Validators.required],
      preco: [null, Validators.required],
    });
  }

  cadastrar() {
    if (this.formulario.valid) {
      const prato: Prato = new Prato();

      prato.nome = this.name.value;
      prato.preco = this.preco.value;

      this.servicePrato.createPrato(prato).subscribe((retorno: Prato) => {
        SweetAlert.exibirSucesso(retorno.nome + ' incluído com sucesso!🥳🥳🥳');
        this.router.navigate(['/']);
      });
    } else {
      SweetAlert.exibirErro('Preencha todos o campos.🥱🥱🥱');
    }
  }

  Cancelar() {
    this.router.navigate(['/mesas']);
  }
}
