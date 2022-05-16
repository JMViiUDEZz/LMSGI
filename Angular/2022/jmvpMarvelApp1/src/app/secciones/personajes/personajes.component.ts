import { Component, OnInit } from '@angular/core';
import { Personajes } from 'src/app/interfaces/IPersonajes';
import { PersonajesService } from 'src/app/servicios/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class LibrosComponent implements OnInit {
  //DECLARACIÓN DE PROPIEDADES
  personajes: Personajes[] = [];

  //DECLARACIÓN DE MÉTODOS
  constructor(private personajesService: PersonajesService) { }

  async ngOnInit(){
  }

}
