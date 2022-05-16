import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { MarvelService } from '../../servicios/marvel.service'
import { Personajes } from "../../interfaces/IPersonajes";

@Component({
  selector: 'app-personajes-busqueda',
  templateUrl: './personajes-busqueda.component.html',
  styleUrls: ['./personajes-busqueda.component.scss']
})
export class PersonajesBusquedaComponent implements OnInit {

  public personajeResult:Personajes[];
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
    this.buscarPersonaje();

    //adiciona class no body da busca
    document.body.classList.add('bgBusca')
  }

  ngOnDestroy() {
    //remove class no body da busca
    document.body.classList.remove('bgBusca')
  }

  buscarPersonaje(){
    this.campoDeBusca.valueChanges.pipe(
      switchMap(
        ()=> this.marvelService.buscaPersonajes(this.campoDeBusca.value)
      )
    ).subscribe(
      (response => {
        this.personajeResult = response;
        console.log('personaje buscado ->',response);
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
