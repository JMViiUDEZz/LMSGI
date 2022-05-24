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
  //formulario de búsqueda de personajes
  //https://classroom.google.com/u/4/c/NDA4ODU5MTg2NjQ1/m/MjI4MDYyODQxMTQ0/details
  formBusca: FormGroup; //FormGroup es un cojunto de FormControls, el estado de este objeto depende del estado de todos sus objetos, es decir, si uno de los FormControl es inválido, el grupo entero es inválido.
  campoDeBusca: FormControl; //FormControl es un objeto qué se usa en los formularios para tener un control sobre su valor y su estado en el formulario.
  errorMsg: any; //mensaje de error

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

    //agregar clase al cuerpo de búsqueda
    document.body.classList.add('bgBusca')
  }

  ngOnDestroy() {
    //quitar clase en el cuerpo de búsqueda
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

  //toggle es un tipo de interruptor o botón que se usa para alternar entre estados como uno y apagado o verdadero o falso, por lo que este eliminará el mensaje de error
  toogle(){
    let el = document.getElementById('errorMsg');
    console.log(el.parentNode.removeChild(el));
  }
}
