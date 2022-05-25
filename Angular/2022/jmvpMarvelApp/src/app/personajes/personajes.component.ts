import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { MarvelService } from '../servicios/marvel.service';
import { Personajes } from "../interfaces/IPersonajes";


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  public personajes:Personajes[]

  constructor(
    private marvelService:MarvelService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show(); //cargando
    this.getPersonaje();//cargar cartas de personajes iniciales
}
  //esta funcion llama a la funcion de personajes
  getPersonaje(){
    return this.marvelService.getPersonajes().subscribe(
      (response => {
        this.personajes = response; //recibir personajes
        this.spinner.hide(); //cargando
        console.log(response) //muestra personajes en la consola
      })
    )
  }
}
