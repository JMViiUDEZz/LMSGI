import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { MarvelService } from '../../servicios/marvel.service'
import { Personajes } from "../../interfaces/IPersonajes";

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

  public personagemResult:Personajes[];
  //form de busca de personagems
  formBusca: FormGroup;
  campoDeBusca: FormControl;
  errorMsg: any;

  constructor(
    private marvelService:MarvelService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.campoDeBusca = this.fb.control('');
    this.formBusca = this.fb.group({
      campoDeBusca: this.campoDeBusca
    });
    this.buscarPersonagem();

    //adiciona class no body da busca
    document.body.classList.add('bgBusca')
  }

  ngOnDestroy() {
    //remove class no body da busca
    document.body.classList.remove('bgBusca')
  }

  buscarPersonagem(){
    this.campoDeBusca.valueChanges.pipe(
      switchMap(
        ()=> this.marvelService.buscaPersonagens(this.campoDeBusca.value)
      )
    ).subscribe(
      (response => {
        this.personagemResult = response;
        console.log('personagem buscado ->',response);
      }),
      error => {
        this.errorMsg = error
      }
    )
  }

  //remove a msg de erro do DOM
  toogle(){
    let el = document.getElementById('errorMsg');
    console.log(el.parentNode.removeChild(el));
  }
}
