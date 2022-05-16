import { Component, OnInit } from '@angular/core';
import { Personajes } from "../../../interfaces/IPersonajes";

import { PersonajesService } from '../../../servicios/personajes.service'

@Component({
  selector: 'app-personajes-detalle',
  templateUrl: './personajes-detalle.component.html',
  styleUrls: ['./personajes-detalle.component.scss']
})
export class PersonajesDetalleComponent implements OnInit  {


  constructor(
    private PersonajesService:PersonajesService,
  ) { }

  ngOnInit() {

  }

}

