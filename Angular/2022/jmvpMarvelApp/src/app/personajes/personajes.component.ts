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
    this.spinner.show(); //loading
    this.getPersonagen();//carrega os cards de personajes iniciais
}
  getPersonagen(){
    return this.marvelService.getPersonagens().subscribe(
      (response => {
        this.personajes = response;
        this.spinner.hide();
        console.log(response)
      })
    )
  }
}