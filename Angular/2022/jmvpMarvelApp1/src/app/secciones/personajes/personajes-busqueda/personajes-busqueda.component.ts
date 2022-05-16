import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { PersonajesService } from '../../../servicios/personajes.service'
import { Personajes } from "../../../interfaces/IPersonajes";

@Component({
  selector: 'app-personajes-busqueda',
  templateUrl: './personajes-busqueda.component.html',
  styleUrls: ['./personajes-busqueda.component.scss']
})

export class PersonajesBusquedaComponent implements OnInit {


  constructor(

  ) { }

  ngOnInit() {

  }

}
